<template>
  <div id="water-use-container">
    <LoadingScreen />
    <div class="header-container">
      <div class="usa-prose">
        <h1>
          {{ title }} {{ featureName }}{{ titleSuffix }} {{ developmentTier }}
        </h1>
      </div>
    </div>
    <div id="waterUseVisualArea">
      <div id="radialCharts">
        <h2>Radial Charts</h2>
      </div>
      <div id="waterUseMap">
        <div class="mapContainer">
          <MglMap
            id="mapgl-water-use-mapbox-map"
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
            :max-bounds="maxBounds"
            :interactive="false"
            @load="onMapLoaded"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import LoadingScreen from "../../components/LoadingScreen";
    import {MglMap} from 'vue-mapbox';
    import mapStyles from "../../assets/mapStyles/waterUse/mapStyles";

    export default {
        name: 'WaterUse',
        components: {
            LoadingScreen,
            MglMap
        },
        props: {
            showNewFeatureTabs: {
                type: Boolean,
                required: true
            }
        },
        data() {
            return {
                title: process.env.VUE_APP_TITLE,
                titleSuffix: process.env.VUE_APP_TITLE_SUFFIX,
                featureName: 'Water Use',
                developmentTier: process.env.VUE_APP_TIER,
                mapStyle: mapStyles.style,
                container: 'map',
                zoom: 2,
                minZoom: 2,
                maxZoom: 5.99,
                center: [-95.7129, 37.0902],
                pitch: 0, // tips the map from 0 to 60 degrees
                bearing: 0, // starting rotation of the map from 0 to 360
                hoveredHRUId: null,
                maxBounds: [[-168.534393,-4.371744], [-19.832382,71.687625]], // The coordinates needed to make a bounding box for the continental United States.
                isLoading: true,
            }
        },
        methods: {
            runGoogleAnalytics(eventName, action, label) {
                this.$ga.set({ dimension2: Date.now() });
                this.$ga.event(eventName, action, label);
            },
            onMapLoaded(event) {
                this.$store.map = event.map; // The 'event' gives us access to the map as an object but only after the map has loaded. Once we have that, we add the map object to the Vuex store
                const map = this.$store.map;
                let googleAnalytics = this.runGoogleAnalytics; // We need to get the global Google Analytics (GA) plugin object 'this.$ga' into this scope, so let's make a local variable and assign our GA event tracking method to that.
                map.resize(); //This solves the mysterious whitespace by resizing the map to the correct size.
                map.touchZoomRotate.enable(); // Allow users to pinch to zoom on touch devices.
                map.touchZoomRotate.disableRotation(); // Disable the rotation functionality, but keep pinch to zoom.
                map.fitBounds([[-125.3321, 23.8991], [-65.7421, 49.4325]]); // Once map is loaded, zoom in a bit more so that the map neatly fills the screen.
                setTimeout(() => { this.isLoading = false; }, 200);// Set a timeout to make sure the fitbounds action is completely done before loading screen fades away.
                map.on('zoomend', this.addZoomLevelIndicator); // Add the current zoom level display. The zoom level should only show in 'development' versions of the application.
            }
        }
    }
</script>

<style scoped lang="scss">
#water-use-container {
  display: flex;
  flex-direction: column;
  .usa-prose {
    margin-left: 10px;
    h1 {
      font-size: 1rem;
      padding-top: 0.2em;
    }
  }
}
#waterUseVisualArea{
  flex: 1;
  height: 80vh;
  display: flex;
  flex-direction: column;
  #radialCharts{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;;
    border-bottom: 1px solid rgb(50,50,50);
    border-top: 1px solid rgb(50,50,50);
  }
  #waterUseMap{
    flex: 3;
    display: flex;;
    background: aqua;
    .mapContainer{
      flex: 1;
      min-height: 550px;
    }
  }
}
</style>
