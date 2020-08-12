<template>
  <div
    id="temperature_viz_container"
    @click.once="clickAnywhereToCloseMapInfoBox"
  >
    <LoadingScreenInternal
      :is-loading="isLoading"
    />
    <div id="mapContainer">
      <MapSubtitle
        :is-about-map-info-box-open="isAboutMapInfoBoxOpen"
        @clickedInfoIcon="toggleMapInfoBox()"
        @clickedExit="toggleMapInfoBox()"
      />
      <MglMap
        id="mapgl-water-temperature-mapbox-map"
        :container="container"
        :map-style="mapStyle"
        :zoom="zoom"
        :min-zoom="minZoom"
        :max-zoom="maxZoom"
        :center="center"
        :pitch="pitch"
        :bearing="bearing"
        :pitch-with-rotate="false"
        :drag-rotate="false"
        :touch-zoom-rotate="false"
        :interactive="isInteractive"
        :max-bounds="maxBounds"
        @load="onMapLoaded"
      >
        <MglAttributionControl
          position="bottom-right"
          :compact="false"
          custom-attribution="© <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        <MglNavigationControl
          position="top-right"
          :show-compass="false"
        />
        <QuestionControl :feature-name="featureName" />
        <MglScaleControl
          position="bottom-right"
          unit="imperial"
        />
        <MglFullscreenControl position="bottom-right" />
        <MglGeolocateControl position="bottom-right" />
        <MapLayers />
      </MglMap>
    </div>
    <div class="zoom-in-selection-controls">
      <div class="zoom-in-selection-title">
        Highlight Areas |
      </div>
      <div class="zoom-in-region-subset">
        <span>Pacific Northwest</span>
        <button
          v-if="!isReturnToCenterButtonShowing && activeHighlightAreaButton!=='salmon'"
          @click="jumpToSelectMapArea('salmon')"
        >
          salmon habitat
        </button>
        <button
          v-if="isReturnToCenterButtonShowing && activeHighlightAreaButton!=='salmon'"
          @click="jumpToSelectMapArea('salmon')"
        >
          salmon habitat
        </button>
        <button
          v-if="isReturnToCenterButtonShowing && activeHighlightAreaButton==='center'"
          @click="jumpToSelectMapArea('salmon')"
        >
          salmon habitat
        </button>
        <button
          v-if="isReturnToCenterButtonShowing && activeHighlightAreaButton==='salmon'"
          @click="jumpToSelectMapArea('center')"
        >
          recenter map
        </button>
      </div>
      <div class="zoom-in-region-subset">
        <span>Delaware Basin</span>
        <button
          v-if="!isReturnToCenterButtonShowing && activeHighlightAreaButton!=='trout'"
          @click="jumpToSelectMapArea('trout')"
        >
          trout
        </button>
        <button
          v-if="isReturnToCenterButtonShowing && activeHighlightAreaButton!=='trout'"
          @click="jumpToSelectMapArea('trout')"
        >
          trout
        </button>
        <button
          v-if="isReturnToCenterButtonShowing && activeHighlightAreaButton==='trout'"
          @click="jumpToSelectMapArea('center')"
        >
          recenter map
        </button>
        <button
          v-if="!isReturnToCenterButtonShowing && activeHighlightAreaButton!=='mussels'"
          @click="jumpToSelectMapArea('mussels')"
        >
          mussels
        </button>
        <button
          v-if="isReturnToCenterButtonShowing && activeHighlightAreaButton!=='mussels'"
          @click="jumpToSelectMapArea('mussels')"
        >
          mussels
        </button>
        <button
          v-if="isReturnToCenterButtonShowing && activeHighlightAreaButton==='mussels'"
          @click="jumpToSelectMapArea('center')"
        >
          recenter map
        </button>
      </div>
    </div>
    <!--The next div contains information to show the current zoom level of the map. This will only show on the
          development version of the application. To find the code controlling this, search for 'zoom level display' -->
    <div id="zoom-level-div" />
  </div>
</template>

<script>
    import LoadingScreenInternal from "../../components/LoadingScreenInternal";
    import MapSubtitle from "../../components/MapSubtitle";
    import MapLayers from "../../components/MapLayers";
    import QuestionControl from "../../components/QuestionControl";
    import {
        MglMap,
        MglNavigationControl,
        MglGeolocateControl,
        MglFullscreenControl,
        MglScaleControl,
        MglAttributionControl
    } from 'vue-mapbox';
    import mapStyles from "../../assets/mapStyles/waterTemperature/mapStyles";

    export default {
        name: 'WaterStorage',
        components: {
            LoadingScreenInternal,
            MapSubtitle,
            MglMap,
            MglNavigationControl,
            MglGeolocateControl,
            MglFullscreenControl,
            MglScaleControl,
            MglAttributionControl,
            MapLayers,
            QuestionControl
        },
        data() {
            return {
                featureName: 'Water Temperature',
                mapStyle: mapStyles.style,
                container: 'map',
                zoom: 2,
                minZoom: 2,
                maxZoom: 5.99,
                center: [-95.7129, 37.0902],
                pitch: 0, // tips the map from 0 to 60 degrees
                bearing: 0, // starting rotation of the map from 0 to 360
                maxBounds: [[-168.534393,-4.371744], [-19.832382,71.687625]], // The coordinates needed to make a bounding box for the continental United States.
                isInteractive: true,
                isLoading: true,
                currentZoom: null,
                isAboutMapInfoBoxOpen: true,
                isFirstClick: true,
                activeHighlightAreaButton: 'center',
                isReturnToCenterButtonShowing: false
            }
        },
        methods: {
            jumpToSelectMapArea(highlightType) {
                const map = this.$store.temperaturePredictionMap;
                // Check if we have created a highlight layer previously, if so remove it
                if (map.getLayer("region-highlight")) {
                    map.removeLayer("region-highlight");
                }
                // Check if interp streams is on, and if so disable it and turn back on the step streams
                if (map.getLayer("streams_interpolated") && highlightType=='center') {
                    map.setLayoutProperty('streams_interpolated','visibility','none');
                    map.setLayoutProperty('streams','visibility','visible')
                }

                const mapCoordinates = {
                    center: {coordinates: [-95.7129, 37.0902], zoomLevel: 2},
                    salmon: {coordinates: [-124, 47], zoomLevel: 7},
                    trout: {coordinates: [-75.76, 39.72], zoomLevel: 8},
                    mussels: {coordinates: [-75.76, 39.72], zoomLevel: 8},
                    interp: {coordinates: [-95.7129, 37.0902], zoomLevel: 2},
                };

                map.jumpTo({
                    zoom: mapCoordinates[highlightType].zoomLevel,
                    center: mapCoordinates[highlightType].coordinates
                });

                this.activeHighlightAreaButton = highlightType;
                this.isReturnToCenterButtonShowing = true;

                if (this.activeHighlightAreaButton === 'center') {
                    this.activeHighlightAreaButton = 'center';
                    this.isReturnToCenterButtonShowing = false;
                }
                // Add highlights to show stream reaches of interest
                if (this.activeHighlightAreaButton === 'salmon') {
                    map.addLayer(
                            {
                                'id': 'region-highlight',
                                'type': 'line',
                                'source': 'streams',
                                'source-layer': 'segsAllConus',
                                'layout': { 'visibility': 'visible' },
                                'paint': {
                                    'line-width': [
                                        'step',
                                        ['get', 'temp'],
                                        0, // line width in pixels
                                        4.999, // upper stop, so all temps below this value will have the above width
                                        10, // line width in pixels
                                        10, // upper stop
                                        0 // all remaining lines will have this width
                                    ],
                                    'line-color': 'rgba(255, 221, 0, 0.2)'
                                }
                            },
                            'streams'
                    );
                }

                if (this.activeHighlightAreaButton === 'trout') {
                    map.addLayer(
                            {
                                'id': 'region-highlight',
                                'type': 'line',
                                'source': 'streams',
                                'source-layer': 'segsAllConus',
                                'layout': { 'visibility': 'visible' },
                                'paint': {
                                    'line-width': [
                                        'step',
                                        ['get', 'temp'],
                                        0, // line width in pixels
                                        4.999, // upper stop, so all temps below this value will have the above width
                                        10, // line width in pixels
                                        10, // upper stop
                                        0 // all remaining lines will have this width
                                    ],
                                    'line-color': 'rgba(255, 0, 255, 0.2)'
                                }
                            },
                            'streams'
                    );
                }

                if (this.activeHighlightAreaButton === 'mussels') {
                    map.addLayer(
                            {
                                'id': 'region-highlight',
                                'type': 'line',
                                'source': 'streams',
                                'source-layer': 'segsAllConus',
                                'layout': { 'visibility': 'visible' },
                                'paint': {
                                    'line-width': [
                                        'step',
                                        ['get', 'temp'],
                                        0, // line width in pixels
                                        15, // upper stop, so all temps below this value will have the above width
                                        10, // line width in pixels
                                        20, // upper stop
                                        0 // all remaining lines will have this width
                                    ],
                                    'line-color': 'rgba(255, 221, 0, 0.2)'
                                }
                            },
                            'streams'
                    );
                }

            },
            addZoomLevelIndicator() {
                const map = this.$store.temperaturePredictionMap;
                this.currentZoom = map.getZoom();
                process.env.VUE_APP_ADD_ZOOM_LEVEL_DISPLAY === 'true' ?
                        document.getElementById('zoom-level-div').innerHTML = 'Current Zoom Level (listed for development purposes): ' + this.currentZoom : null;
            },
            runGoogleAnalytics(eventName, action, label) {
                this.$ga.set({ dimension2: Date.now() });
                this.$ga.event(eventName, action, label);
            },
            toggleMapInfoBox() {
                !this.isFirstClick ? this.isAboutMapInfoBoxOpen = !this.isAboutMapInfoBoxOpen : null;
            },
            clickAnywhereToCloseMapInfoBox() {
                this.isAboutMapInfoBoxOpen = !this.isAboutMapInfoBoxOpen;
                this.isFirstClick = false;
            },
            onMapLoaded(event) {
                this.$store.temperaturePredictionMap = event.map; // The 'event' gives us access to the map as an object but only after the map has loaded. Once we have that, we add the map object to the Vuex store
                const map = this.$store.temperaturePredictionMap;
                let googleAnalytics = this.runGoogleAnalytics; // We need to get the global Google Analytics (GA) plugin object 'this.$ga' into this scope, so let's make a local variable and assign our GA event tracking method to that.
                map.resize(); //This solves the mysterious whitespace by resizing the map to the correct size.
                map.touchZoomRotate.enable(); // Allow users to pinch to zoom on touch devices.
                map.touchZoomRotate.disableRotation(); // Disable the rotation functionality, but keep pinch to zoom.
                map.fitBounds([[-125.3321, 23.8991], [-65.7421, 49.4325]]); // Once map is loaded, zoom in a bit more so that the map neatly fills the screen.
                setTimeout(() => { this.isLoading = false; }, 200);// Set a timeout to make sure the fitbounds action is completely done before loading screen fades away.
                map.on('zoomend', this.addZoomLevelIndicator); // Add the current zoom level display. The zoom level should only show in 'development' versions of the application.
                document.body.classList.remove("stop-scrolling");
            }
        }
    };
</script>

<style scoped lang='scss'>
  @import '~mapbox-gl/dist/mapbox-gl.css';
  $color: #fff;
  $blue: #4574a3;
  $border: 1px solid #fff;
  $borderGray: 1px solid rgb(100, 100, 100);

#temperature_viz_container {
  #overlay {
    position: fixed; /* Sit on top of the page content */
    display: none; /* Hidden by default */
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5); /* Black background with opacity */
    z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
    cursor: pointer; /* Add a pointer on hover */
  }
  .header-container {
    background-color: #fff;
    .usa-prose {
      border-bottom: $borderGray;
      display: flex;
      h1 {
        font-size: 1rem;
        margin-left: 10px;
        flex: 1;
      }
    }
  }
  #mapContainer {
    position: relative;
    height: 80vh;
    min-height: 550px;
    display: flex;
    flex-direction: column;
  }

  .zoom-in-selection-controls {
    display: flex;
    color: white;
    background-color: #003366;
    padding-right: 0.25em;
    .zoom-in-selection-title {
      flex: 1;
      font-weight: bold;
      text-align: left;
      padding: 0.5em;
    }
    .zoom-in-region-subset {
      flex: 4;
      align-content: center;
      display: flex;
      span {
        padding: 0.5em;
        text-align: center;
      }
      button {
        margin: 2px 0 2px 0;
        flex: 1;
      }
    }
  }

/*  added for testing */
  .color-box {
    padding: 0 1em 0 1em;
    border: 1px solid black;
  }
  .color-ramp-controls {
    display: flex;
    button {
      text-align: center;
      flex: 1;
    }
  }
}
  @media screen and (min-width: 600px) and (min-height: 850px) {
    #temperature_viz_container {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    #mapContainer {
      flex: 1;
      height: auto;
    }
  }
</style>
<style lang="scss">
.loader {
  top: 107px;
  height: 100%;
}
</style>