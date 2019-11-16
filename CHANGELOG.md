# Changelog
All notable changes to this project will be documented in this file.

## [Unreleased]
- Added hover effect to HRUs
- Changed to allow tiBefore making a pull request
                     ----------------------------
                     - [ ] Clean the code the way Vue likes it - run 'npm run lint --fix'
                     - [ ] Make sure all tests run
                     - [ ] Update the changelog appropriately
                     - [ ] Run WAVE plugin 508 compliance tool
                     
                     Title
                     -----------
                     Brief description of changes. Reference the JIRA ticket if appropriate
                     
                     Description
                     -----------
                     If no ticket is referenced, describe the changes made. Note anything that you want the reviewers to know while
                     reviewing your pull request
                     
                     After making a pull request
                     ---------------------------
                     - [ ] If appropriate, put the link to the PR in the ticket
                     - [ ] Assign someone to review unless the change is trivialle assets to be pulled from S3
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
