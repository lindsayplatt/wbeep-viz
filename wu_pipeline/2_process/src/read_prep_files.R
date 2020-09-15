read_and_parse_huc12 <- function(huc12_fn) {
  geojson_sf(huc12_fn) %>% 
    st_make_valid() %>% 
    select(HUC12, NAME, geometry) %>% 
    st_transform("+proj=aea +lat_1=29.5 +lat_2=45.5 +lat_0=37.5 +lon_0=-96 +x_0=0 +y_0=0 +ellps=GRS80 +datum=NAD83 +units=m +no_defs")
}

read_and_parse_huc10<- function(wbd_gdb_fn, layer_nm) {
  st_read(wbd_gdb_fn, layer_nm) %>% 
    select(HUC10 = huc10, NAME = name, geometry = shape) %>% 
    st_transform("+proj=aea +lat_1=29.5 +lat_2=45.5 +lat_0=37.5 +lon_0=-96 +x_0=0 +y_0=0 +ellps=GRS80 +datum=NAD83 +units=m +no_defs")
}

read_and_parse_wu <- function(filepath, is_irr = FALSE) {
  
  # Columns have different names between water use types
  col_name <- ifelse(is_irr, "HUC_12t", "huc12") # Need the "t" column now because the data has a bad "HUC_12" column
  
  readr::read_csv(filepath) %>% 
    rename(HUC12 = !!col_name) %>% # Columns have different names between water use types
    mutate(HUC12 = gsub("'", "", HUC12)) %>% # For irr, using the `t` column has a leading '
    mutate(HUC12 = zeroPad(HUC12, 12)) %>% # Many of the HUCs were missing leading 0s ... :(
    # Starts in wide format with a column for each day of the year. 
    tidyr::pivot_longer(cols = starts_with("W_"), names_to = "prefixdate", values_to = "wu_val") %>% 
    mutate(Date = as.Date(gsub("W_", "", prefixdate), format = "%m-%d-%Y")) %>% 
    select(HUC12, Date, wu_val)
  
}
