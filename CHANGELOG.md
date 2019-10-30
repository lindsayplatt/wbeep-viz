# Changelog
All notable changes to this project will be documented in this file.

## [Unreleased]

## [0.0.3] - 2019-10-30
- Change river layers style to match openmaptiles rivers/waterbodies
- White Slivers Removal (fill-outline)
- Update styles for updated nhd river tiles 
- Modify About text and layout
- Secondary About Button
- USWDS SVG Fix Implemented
- Road toggle and road layers combined
- Flow Detail can only have one active button functionality
- Added aria labels to links with no text content
- Added Flow Detail to layers toggle and renamed stream titles
- Added Google Analytics event tracking for most user click actions
- Fixed changelog typos

## [0.0.2] - 2019-10-18
- Added About page and implemented routing
- Added post build notifications to Jenkinsfile
- Added Google Analytics plugin
- Legend Modal coloring and text fix

## [0.0.1] - 2019-10-09
- Use jordanpalette color scheme
- Layers box adjustment and Function refactor
- Map Layers Toggle Button
- Changed to use grouped stream orders
- Changed footer icons to Vue components
- New Map Layers Toggle Functionality
- Water layer above neighboring counties
- Restricted user ability to zoom out past the continental United States
- Added sub-subtitle with date of last available data
- Adjusted mapStyles to have HRU's solid colors
- Legend Toggle functionality
- Min-height for map
- Added footer email
- topNavToggle icon adjustment and mobile adjustment
- Changed URLs to use new tile server
- Map Options layers dynamic toggle functionality first added
- Made Subtitle more mobile friendly
- Edited Legend modal to better fit a mobile experience
- Added vue-svg-loader package
- Added Florida and Arizona SVGS
- Created Legend Modal
- Added new Legend text and legend info button
- Added a stream orders toggle bar so that we can test out which stream orders we want
- Made subtitle information modal popup
- Made Map Subtitle component
- Added map subtitle and subtitle info button
- Cleaned up mapStyles.json
- Changed map and page title to 'National Integrated Water Availability Assessments'
- Added attribution control for OpenMapTiles layers
- Removed Mapbox street layers and replaced them with OpenMapTiles
- Zoom to bounding box of the U.S.
- Removed City Dots and HRU Outlines
- Added Flexbox fluidity to the layout
- Added Mapbox layers for testing 
- Parameterized git branch/tag in Jenkinsfile
- Refined layer toggle for appearance and mobile compatibility
- Adjusted the minimum zoom level to 3 as well as the default/initial zoom level to 3
- Added Legend
- Added hover effect to HRUs
- Changed to allow tile assets to be pulled from S3
- Added layer toggle for all layers, and added 'showButton' property to mapStyles.js to control display of buttons
- Moved the map styles to a separate mapStyles.js 
- Changed application to use vue-mapbox plugin
- Dotted State lines to show its possible.
- Added Cities to the basemap layers.
- Changed basemap creation so  we have several source layers to avoid loading in all layers multiple times and filtering.  This way we only call the layer we want when we want
- changed layer order so HRU layer is lowest and changed the opacity of that layer 
- added map controls
- Deleted second mbtiles folder
- Fixed the title bar CSS at wide widths, adjusted the page title
- Added basemap mbtiles to the mbtiles directory
- Fixed menu bar title, added more appropriate title to page
- Added appropriate changes to the style variable in the Mapbox.vue to style the map the way I chose to
- Added USWDS components, Added title, removed component not needed

[Unreleased]: https://github.com/usgs-makerspace/wbeep-viz/compare/v0.0.3...master
[0.0.3]: https://github.com/usgs-makerspace/wbeep-viz/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/usgs-makerspace/wbeep-viz/compare/v0.0.1...v0.0.2
