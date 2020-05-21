<template>
  <div
    id="temperature_viz_container"
    @click.once="clickAnywhereToCloseMapInfoBox"
  >
    <LoadingScreen
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
    <div class="color-ramp-controls">
      <button @click="colorRampChoiceOne">
        color ramp one
      </button>
      <button @click="colorRampChoiceTwo">
        color ramp two
      </button>
      <button @click="colorRampChoiceThree">
        color ramp three
      </button>
    </div>
    <div class="color-ramp-controls">
      <button @click="changeLightDarkBackground">
        light/dark
      </button>
    </div>
    <div class="color-step-adjustments">
      <div>
        <input
          v-model="stop1colorHex"
          :placeholder="stop1colorHex"
        >
        <span>stop 1 <span
          id="box1"
          class="color-box"
          :style="stop1color"
        >{{ stop1 }}</span></span>
      </div>
      <div>
        <input
          v-model="stop2colorHex"
          :placeholder="stop2colorHex"
        >
        <span>stop 2 <span
          id="box2"
          class="color-box"
          :style="stop2color"
        >{{ stop2 }}</span></span>
      </div>
      <div>
        <input
          v-model="stop3colorHex"
          :placeholder="stop3colorHex"
        >
        <span>stop 3 <span
          id="box3"
          class="color-box"
          :style="stop3color"
        >{{ stop3 }}</span></span>
      </div>
      <div>
        <input
          v-model="stop4colorHex"
          :placeholder="stop4colorHex"
        >
        <span>stop 4 <span
          id="box4"
          class="color-box"
          :style="stop4color"
        >{{ stop4 }}</span></span>
      </div>
      <div>
        <input
          v-model="stop5colorHex"
          :placeholder="stop5colorHex"
        >
        <span>stop 5 <span
          id="box5"
          class="color-box"
          :style="stop5color"
        >{{ stop5 }}</span></span>
      </div>
      <div>
        <input
          v-model="stop6colorHex"
          :placeholder="stop6colorHex"
        >
        <span>stop 6 <span
          id="box6"
          class="color-box"
          :style="stop6color"
        >{{ stop6 }}</span></span>
      </div>
      <div>
        <input
          v-model="stop7colorHex"
          :placeholder="stop7colorHex"
        >
        <span>stop 7 <span
          id="box7"
          class="color-box"
          :style="stop7color"
        >{{ stop7 }}</span></span>
      </div>
    </div>
    <div>
      <input
        v-model="stop8colorHex"
        :placeholder="stop8colorHex"
      >
      <span>stop 8 <span
        id="box8"
        class="color-box"
        :style="stop8color"
      >{{ stop8 }}</span></span>
    </div>
    <div>
      <input
        v-model="stop9colorHex"
        :placeholder="stop9colorHex"
      >
      <span>stop 9 <span
        id="box9"
        class="color-box"
        :style="stop9color"
      >{{ stop9 }}</span></span>
    </div>
    <div>
      <input
        v-model="stop10colorHex"
        :placeholder="stop10colorHex"
      >
      <span>stop 10 <span
        id="box10"
        class="color-box"
        :style="stop10color"
      >{{ stop10 }}</span></span>
    </div>
    <div>
      <input
        v-model="stop11colorHex"
        :placeholder="stop11colorHex"
      >
      <span>stop 11 <span
        id="box11"
        class="color-box"
        :style="stop11color"
      >{{ stop11 }}</span></span>
    </div>
    <div>
      <input
        v-model="stop12colorHex"
        :placeholder="stop12colorHex"
      >
      <span>stop 12 <span
        id="box12"
        class="color-box"
        :style="stop12color"
      >{{ stop12 }}</span></span>
    </div>
    <div>
      <input
        v-model="stop13colorHex"
        :placeholder="stop13colorHex"
      >
      <span>stop 13 <span
        id="box13"
        class="color-box"
        :style="stop13color"
      >{{ stop13 }}</span></span>
    </div>
    <div>
      <input
        v-model="stop14colorHex"
        :placeholder="stop14colorHex"
      >
      <span>stop 14 <span
        id="box14"
        class="color-box"
        :style="stop14color"
      >{{ stop14 }}</span></span>
    </div>
    <div>
      <input
        v-model="stop15colorHex"
        :placeholder="stop15colorHex"
      >
      <span>stop 15 <span
        id="box15"
        class="color-box"
        :style="stop15color"
      >{{ stop15 }}</span></span>
    </div>
    <div>
      <input
        v-model="stop16colorHex"
        :placeholder="stop16colorHex"
      >
      <span>stop 16 <span
        id="box16"
        class="color-box"
        :style="stop16color"
      >{{ stop16 }}</span></span>
    </div>
    <div>
      <input
        v-model="stop17colorHex"
        :placeholder="stop17colorHex"
      >
      <span>stop 17 <span
        id="box17"
        class="color-box"
        :style="stop17color"
      >{{ stop17 }}</span></span>
    </div>
    <div>
      <input
        v-model="stop18colorHex"
        :placeholder="stop18colorHex"
      >
      <span>stop 18 <span
        id="box18"
        class="color-box"
        :style="stop18color"
      >{{ stop18 }}</span></span>
    </div>
    <div>
      <input
        v-model="stop19colorHex"
        :placeholder="stop19colorHex"
      >
      <span>stop 19 <span
        id="box19"
        class="color-box"
        :style="stop19color"
      >{{ stop19 }}</span></span>
    </div>
    <div>
      <input
        v-model="stop20colorHex"
        :placeholder="stop20colorHex"
      >
      <span>stop 20 <span
        id="box20"
        class="color-box"
        :style="stop20color"
      >{{ stop20 }}</span></span>
    </div>
  </div>
</template>

<script>
    import LoadingScreen from "../../components/LoadingScreen";
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
            LoadingScreen,
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
                maxZoom: 15,
                center: [-95.7129, 37.0902],
                pitch: 0, // tips the map from 0 to 60 degrees
                bearing: 0, // starting rotation of the map from 0 to 360
                maxBounds: [[-168.534393,-4.371744], [-19.832382,71.687625]], // The coordinates needed to make a bounding box for the continental United States.
                isInteractive: true,
                isLoading: true,
                currentZoom: null,
                isAboutMapInfoBoxOpen: true,
                isFirstClick: true,
                isBackgroundDark: false,
                activeHighlightAreaButton: 'center',
                isReturnToCenterButtonShowing: false,
                stop1: 0,
                stop1colorHex: '#00AAE5',
                stop1color: {backgroundColor: '#00AAE5'},
                stop2: 2,
                stop2colorHex: '#0AA1DA',
                stop2color: {backgroundColor: '#0AA1DA'},
                stop3: 4,
                stop3colorHex: '#1498CF',
                stop3color: {backgroundColor: '#1498CF'},
                stop4: 6,
                stop4colorHex: '#1E8FC5',
                stop4color: {backgroundColor: '#1E8FC5'},
                stop5: 8,
                stop5colorHex: '#2886BA',
                stop5color: {backgroundColor: '#2886BA'},
                stop6: 10,
                stop6colorHex: '#327DB0',
                stop6color: {backgroundColor: '#327DB0'},
                stop7: 12,
                stop7colorHex: '#3C74A5',
                stop7color: {backgroundColor: '#3C74A5'},
                stop8: 14,
                stop8colorHex: '#466B9A',
                stop8color: {backgroundColor: '#466B9A'},
                stop9: 16,
                stop9colorHex: '#506290',
                stop9color: {backgroundColor: '#506290'},
                stop10: 18,
                stop10colorHex: '#5A5985',
                stop10color: {backgroundColor: '#5A5985'},
                stop11: 20,
                stop11colorHex: '#64507B',
                stop11color: {backgroundColor: '#64507B'},
                stop12: 22,
                stop12colorHex: '#6E4770',
                stop12color: {backgroundColor: '#6E4770'},
                stop13: 24,
                stop13colorHex: '#783E66',
                stop13color: {backgroundColor: '#783E66'},
                stop14: 26,
                stop14colorHex: '#82355B',
                stop14color: {backgroundColor: '#82355B'},
                stop15: 28,
                stop15colorHex: '#8C2C50',
                stop15color: {backgroundColor: '#8C2C50'},
                stop16: 30,
                stop16colorHex: '#962346',
                stop16color: {backgroundColor: '#962346'},
                stop17: 32,
                stop17colorHex: '#A01A3B',
                stop17color: {backgroundColor: '#A01A3B'},
                stop18: 34,
                stop18colorHex: '#AA1131',
                stop18color: {backgroundColor: '#AA1131'},
                stop19: 36,
                stop19colorHex: '#B40826',
                stop19color: {backgroundColor: '#B40826'},
                stop20: 100,
                stop20colorHex: '#BF001C',
                stop20color: {backgroundColor: '#BF001C'},
            }
        },
        watch: {
            stop1colorHex: function() {this.stop1color.backgroundColor = this.stop1colorHex; this.$store.temperaturePredictionMap.setPaintProperty('streams', 'line-color', this.changeLineColor());},
            stop2colorHex: function() {this.stop2color.backgroundColor = this.stop2colorHex; this.$store.temperaturePredictionMap.setPaintProperty('streams', 'line-color', this.changeLineColor());},
            stop3colorHex: function() {this.stop3color.backgroundColor = this.stop3colorHex; this.$store.temperaturePredictionMap.setPaintProperty('streams', 'line-color', this.changeLineColor());},
            stop4colorHex: function() {this.stop4color.backgroundColor = this.stop4colorHex; this.$store.temperaturePredictionMap.setPaintProperty('streams', 'line-color', this.changeLineColor());},
            stop5colorHex: function() {this.stop5color.backgroundColor = this.stop5colorHex; this.$store.temperaturePredictionMap.setPaintProperty('streams', 'line-color', this.changeLineColor());},
            stop6colorHex: function() {this.stop6color.backgroundColor = this.stop6colorHex; this.$store.temperaturePredictionMap.setPaintProperty('streams', 'line-color', this.changeLineColor());},
            stop7colorHex: function() {this.stop7color.backgroundColor = this.stop7colorHex; this.$store.temperaturePredictionMap.setPaintProperty('streams', 'line-color', this.changeLineColor());},
            stop8colorHex: function() {this.stop8color.backgroundColor = this.stop8colorHex; this.$store.temperaturePredictionMap.setPaintProperty('streams', 'line-color', this.changeLineColor());},
            stop9colorHex: function() {this.stop9color.backgroundColor = this.stop9colorHex; this.$store.temperaturePredictionMap.setPaintProperty('streams', 'line-color', this.changeLineColor());},
            stop10colorHex: function() {this.stop10color.backgroundColor = this.stop10colorHex; this.$store.temperaturePredictionMap.setPaintProperty('streams', 'line-color', this.changeLineColor());},
            stop11colorHex: function() {this.stop11color.backgroundColor = this.stop11colorHex; this.$store.temperaturePredictionMap.setPaintProperty('streams', 'line-color', this.changeLineColor());},
            stop12colorHex: function() {this.stop12color.backgroundColor = this.stop12colorHex; this.$store.temperaturePredictionMap.setPaintProperty('streams', 'line-color', this.changeLineColor());},
            stop13colorHex: function() {this.stop13color.backgroundColor = this.stop13colorHex; this.$store.temperaturePredictionMap.setPaintProperty('streams', 'line-color', this.changeLineColor());},
            stop14colorHex: function() {this.stop14color.backgroundColor = this.stop14colorHex; this.$store.temperaturePredictionMap.setPaintProperty('streams', 'line-color', this.changeLineColor());},
            stop15colorHex: function() {this.stop15color.backgroundColor = this.stop15colorHex; this.$store.temperaturePredictionMap.setPaintProperty('streams', 'line-color', this.changeLineColor());},
            stop16colorHex: function() {this.stop16color.backgroundColor = this.stop16colorHex; this.$store.temperaturePredictionMap.setPaintProperty('streams', 'line-color', this.changeLineColor());},
            stop17colorHex: function() {this.stop17color.backgroundColor = this.stop17colorHex; this.$store.temperaturePredictionMap.setPaintProperty('streams', 'line-color', this.changeLineColor());},
            stop18colorHex: function() {this.stop18color.backgroundColor = this.stop18colorHex; this.$store.temperaturePredictionMap.setPaintProperty('streams', 'line-color', this.changeLineColor());},
            stop19colorHex: function() {this.stop19color.backgroundColor = this.stop19colorHex; this.$store.temperaturePredictionMap.setPaintProperty('streams', 'line-color', this.changeLineColor());},
            stop20colorHex: function() {this.stop20color.backgroundColor = this.stop20colorHex; this.$store.temperaturePredictionMap.setPaintProperty('streams', 'line-color', this.changeLineColor());},

        },
        methods: {
            jumpToSelectMapArea(highlightType) {
                const map = this.$store.temperaturePredictionMap;
                // Check if we have created a highlight layer previously, if so remove it
                if (map.getLayer("region-highlight")) {
                    map.removeLayer("region-highlight");
                }

                const mapCoordinates = {
                    center: {coordinates: [-95.7129, 37.0902], zoomLevel: 2},
                    salmon: {coordinates: [-124, 47], zoomLevel: 7},
                    trout: {coordinates: [-75.76, 39.72], zoomLevel: 8},
                    mussels: {coordinates: [-75.76, 39.72], zoomLevel: 8},
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
            changeLightDarkBackground: function() {
                this.isBackgroundDark? this.$store.temperaturePredictionMap.setPaintProperty('background', 'background-color', 'hsl(47, 26%, 88%)') : this.$store.temperaturePredictionMap.setPaintProperty('background', 'background-color', 'hsl(44°, 8%, 40%)');
                this.isBackgroundDark = !this.isBackgroundDark;
            },
            changeLineColor: function() {
                return [
                    "step",
                    ["number", ["get", "temp"]],
                    this.stop1colorHex, -100,
                    this.stop2colorHex, 2,
                    this.stop3colorHex, 4,
                    this.stop4colorHex, 6,
                    this.stop5colorHex, 8,
                    this.stop6colorHex, 10,
                    this.stop7colorHex, 12,
                    this.stop8colorHex, 14,
                    this.stop9colorHex, 16,
                    this.stop10colorHex, 18,
                    this.stop11colorHex, 20,
                    this.stop12colorHex, 22,
                    this.stop13colorHex, 24,
                    this.stop14colorHex, 26,
                    this.stop15colorHex, 28,
                    this.stop16colorHex, 30,
                    this.stop17colorHex, 32,
                    this.stop18colorHex, 34,
                    this.stop19colorHex, 36,
                    this.stop20colorHex
                ]
            },
            colorRampChoiceOne: function() {
                this.stop1colorHex = '#00AAE5';
                this.stop2colorHex = '#0AA1DA';
                this.stop3colorHex = '#1498CF';
                this.stop4colorHex = '#1E8FC5';
                this.stop5colorHex = '#2886BA';
                this.stop6colorHex = '#327DB0';
                this.stop7colorHex = '#3C74A5';
                this.stop8colorHex = '#466B9A';
                this.stop9colorHex = '#506290';
                this.stop10colorHex = '#5A5985';
                this.stop11colorHex = '#64507B';
                this.stop12colorHex = '#6E4770';
                this.stop13colorHex = '#783E66';
                this.stop14colorHex = '#82355B';
                this.stop15colorHex = '#8C2C50';
                this.stop16colorHex = '#962346';
                this.stop17colorHex = '#A01A3B';
                this.stop18colorHex = '#AA1131';
                this.stop19colorHex = '#B40826';
                this.stop20colorHex = '#BF001C';
            },
            colorRampChoiceTwo: function() {
                this.stop1colorHex = '#00A9E5';
                this.stop2colorHex = '#0089E3';
                this.stop3colorHex = '#0069E1';
                this.stop4colorHex = '#004ADF';
                this.stop5colorHex = '#002BDD';
                this.stop6colorHex = '#000CDB';
                this.stop7colorHex = '#1000D9';
                this.stop8colorHex = '#2E00D7';
                this.stop9colorHex = '#4A00D5';
                this.stop10colorHex = '#6600D3';
                this.stop11colorHex = '#8200D1';
                this.stop12colorHex = '#9D00CF';
                this.stop13colorHex = '#B700CD';
                this.stop14colorHex = '#CB00C4';
                this.stop15colorHex = '#C900A6';
                this.stop16colorHex = '#C70089';
                this.stop17colorHex = '#C5006D';
                this.stop18colorHex = '#C30051';
                this.stop19colorHex = '#C10036';
                this.stop20colorHex = '#BF001C';
            },
            colorRampChoiceThree: function() {
                this.stop1colorHex = '#00A9E5';
                this.stop2colorHex = '#00D1E3';
                this.stop3colorHex = '#00E1CA';
                this.stop4colorHex = '#00DFA0';
                this.stop5colorHex = '#00DD77';
                this.stop6colorHex = '#00DB4F';
                this.stop7colorHex = '#00D927';
                this.stop8colorHex = '#00D700';
                this.stop9colorHex = '#25D500';
                this.stop10colorHex = '#4AD300';
                this.stop11colorHex = '#6FD100';
                this.stop12colorHex = '#93CF00';
                this.stop13colorHex = '#B6CD00';
                this.stop14colorHex = '#CBBC00';
                this.stop15colorHex = '#C99600';
                this.stop16colorHex = '#C99600';
                this.stop17colorHex = '#C54D00';
                this.stop18colorHex = '#C32900';
                this.stop19colorHex = '#C32900';
                this.stop20colorHex = '#C10600';
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
