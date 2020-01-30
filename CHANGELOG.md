# Changelog
All notable changes to this project will be documented in this file.

## [Unreleased]

## [0.1.5]
- added text to explain the limitations of the visualization at this time 

## [0.1.4]
-fixed zoom level issue that prevented county lines from showing

## [0.1.3]
- Quick Map BG Appearing Fix
- Map Bounding Box For Mobile 
- Fixed bug requiring double click on info text close box
- New Flexible Mobile Subtitle
- Improve plain language on Q&A page

## [0.1.2]
- modify svg to drop xlink:href to png image which is unnecessary

## [0.1.1]
- Added ClientId as a custom dimension for Google Analytics

## [0.1.0]
- refined the provisional statement
- Added custom Google Analytics events for session and time stamp
- Set the 'About the Map' information box to by open on page load
- Set up questions answers page to auto-generate via JSON
- Removed subtitle modal functionality from MapBox and got it in its own component
- New Legend and Legend Modal functionality
- Fixed issue where only the icon in close box was clickable
- Fixed issue where zoom controls were covered by layers menu
- Added question/answers page and link on map
- reformatted About page
- Rivers turn on no matter the zoom
- Changed to hash routing to accommodate the new nested folder structure on AWS
- Added a custom 404 error page
- Added the All USGS Google Analytics script
- Added page to intercept Internet Explorer users and require use of another browser
- Map Resize solution
- Open about page links in new tab
- Resize legend swatches
- Make legend wider to fit title
- Drop drop shadow on text, use plain text instead of colored
- Remove 'No Data' category from our display and map
- Revise legend text

## [0.0.10]
- Set up the tiers to use tier-specific resources

## [0.0.9]
- Disable the loading/splash screen on IE

## [0.0.8]
- Pinch to Zoom Functionality for Touch Devices
- Replace babel polyfill with regenerator/runtime to further address IE issues/deprecations

## [0.0.7]
- Fixes for Internet Explorer and Edge browsers

## [0.0.6]
- Mobile Loading Screen Scrolling Bug Fix

## [0.0.5]
- Added Loading Screen Functionality
- Modified env vars for beta tile source so it displays tiles correctly

## [0.0.4] - 2019-10-30
- Restrict river layers to minzoom of 8 to avoid poor river tile appearance

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

[Unreleased]: https://github.com/usgs-makerspace/wbeep-viz/compare/v0.1.5...master
[0.1.5]: https://github.com/usgs-makerspace/wbeep-viz/compare/v0.1.4...v0.1.5
[0.1.4]: https://github.com/usgs-makerspace/wbeep-viz/compare/v0.1.3...v0.1.4
[0.1.3]: https://github.com/usgs-makerspace/wbeep-viz/compare/v0.1.2...v0.1.3
[0.1.2]: https://github.com/usgs-makerspace/wbeep-viz/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/usgs-makerspace/wbeep-viz/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/usgs-makerspace/wbeep-viz/compare/v0.0.10...v0.1.0
[0.0.10]: https://github.com/usgs-makerspace/wbeep-viz/compare/v0.0.9...v0.0.10
[0.0.9]: https://github.com/usgs-makerspace/wbeep-viz/compare/v0.0.8...v0.0.9
[0.0.8]: https://github.com/usgs-makerspace/wbeep-viz/compare/v0.0.7...v0.0.8
[0.0.8]: https://github.com/usgs-makerspace/wbeep-viz/compare/v0.0.7...v0.0.8
[0.0.7]: https://github.com/usgs-makerspace/wbeep-viz/compare/v0.0.6...v0.0.7
[0.0.6]: https://github.com/usgs-makerspace/wbeep-viz/compare/v0.0.5...v0.0.6
[0.0.5]: https://github.com/usgs-makerspace/wbeep-viz/compare/v0.0.4...v0.0.5
[0.0.4]: https://github.com/usgs-makerspace/wbeep-viz/compare/v0.0.3...v0.0.4
[0.0.3]: https://github.com/usgs-makerspace/wbeep-viz/compare/v0.0.2...v0.0.3
[0.0.2]: https://github.com/usgs-makerspace/wbeep-viz/compare/v0.0.1...v0.0.2
