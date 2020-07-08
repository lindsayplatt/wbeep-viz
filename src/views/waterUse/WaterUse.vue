<template>
  <div id="water-use-container">
    <LoadingScreen />

    <div id="waterUseVisualArea">
      <div id="radialCharts">
        <RadialCharts />
        <button
          id="animate"
          @click="CreateAnimatingLocations()"
        >
          Animate Map
        </button>
      </div>
      <div id="waterUseMap">
        <div id="day" />
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
          @load="onMapLoaded"
        />
      </div>
    </div>
  </div>
</template>

<script>
    import LoadingScreen from "../../components/LoadingScreen";
    import {MglMap} from 'vue-mapbox';
    import mapStyles from "../../assets/mapStyles/waterUse/mapStyles";
    import RadialCharts from '../../components/waterUse/RadialChart';
    import * as d3 from 'd3';
    import mapboxgl from "mapbox-gl";

    export default {
        name: 'WaterUse',
        components: {
            LoadingScreen,
            RadialCharts,
            MglMap
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
                maxBounds: [[-168.534393,-4.371744], [-19.832382,71.687625]],
                circleArray: [],
                Locations: [],
                number: 0, // The coordinates needed to make a bounding box for the continental United States.
                isLoading: true
            }
        },
        mounted(){
          let self = this;

        },
        methods: {
            runGoogleAnalytics(eventName, action, label) {
                this.$ga.set({ dimension2: Date.now() });
                this.$ga.event(eventName, action, label);
            },
            onMapLoaded(event) {
                let self = this;
                this.$store.map = event.map; // The 'event' gives us access to the map as an object but only after the map has loaded. Once we have that, we add the map object to the Vuex store
                const map = this.$store.map;
                let googleAnalytics = this.runGoogleAnalytics; // We need to get the global Google Analytics (GA) plugin object 'this.$ga' into this scope, so let's make a local variable and assign our GA event tracking method to that.
                map.resize(); //This solves the mysterious whitespace by resizing the map to the correct size.
                map.touchZoomRotate.enable(); // Allow users to pinch to zoom on touch devices.
                map.touchZoomRotate.disableRotation(); // Disable the rotation functionality, but keep pinch to zoom.
                map.fitBounds([[-125.3321, 23.8991], [-65.7421, 49.4325]]); // Once map is loaded, zoom in a bit more so that the map neatly fills the screen.
                d3.json('https://maptiles-prod-website.s3-us-west-2.amazonaws.com/misc/WBEEPWaterUse/wu_te_wide.json').then(function(json){
                    self.Locations = json;
                    setTimeout(function(){
                      self.CreateIntialLocations();
                      this.isLoading = false;
                    }, 100)
                });// Set a timeout to make sure the fitbounds action is completely done before loading screen fades away.
            },
            CreateIntialLocations(){
                let map = this.$store.map;
                let self = this;
                let canvasContainer = map.getCanvasContainer();
                let canvas = d3.select(canvasContainer)
                    .append('canvas')
                    .attr('id', 'WaterUseCanvas')
                    .node();
                let ctx = canvas.getContext('2d');
                this.FixDPI(canvas, ctx);
                //Watch for resize and redraw canvas Locations
                window.addEventListener('resize', function(){
                  self.FixDPI(canvas, ctx);
                  self.init(canvas, ctx);
                });
                let day = document.getElementById('day');
                day.innerHTML = 'W2015-01-01';
                let width = canvas.width;
                let height = canvas.height;
                let Locations = this.Locations.features;
                //Create a Canvas Circle from the data and push to the circleArray
                for(let i = 0; i < Locations.length; i++){
                    self.circleArray.push(new this.Circle(canvas, ctx, self.ProjectPoint(Locations[i]).x, self.ProjectPoint(Locations[i]).y, Locations[i].properties['W2015-01-01']));
                }
                //Loop through circleArray and dtaw each individual circle
                for(let i = 0; i < this.circleArray.length; i++){
                    this.circleArray[i].draw();
                }
            },
            FixDPI(canvas, ctx){
              let dpi = window.devicePixelRatio;

              let rect = canvas.getBoundingClientRect();

              canvas.width = rect.width * dpi;
              canvas.height = rect.height * dpi;

              ctx.scale(dpi, dpi);

              canvas.style.width = rect.width + 'px';
              canvas.style.height = rect.height + 'px';
          },
          init(canvas, ctx){
            let self = this;
            this.circleArray = [];
            let Locations = this.Locations.features;
            //Create a Canvas Circle from the data and push to the circleArray
            for(let i = 0; i < Locations.length; i++){
                this.circleArray.push(new this.Circle(canvas, ctx, self.ProjectPoint(Locations[i]).x, self.ProjectPoint(Locations[i]).y, Locations[i].properties['W2015-01-01']));
            }
            ctx.clearRect(0,0,canvas.width, canvas.height);
            for(let i = 0; i < this.circleArray.length; i++){
                this.circleArray[i].draw();
            }
          },
          ProjectPoint(data){
            return this.$store.map.project(
                new mapboxgl.LngLat(
                    data.geometry.coordinates[0],
                    data.geometry.coordinates[1]
                )
            );
          },
          Circle(canvas, ctx, x,y,radius){
            this.x = x;
            this.y = y;
            this.radius = radius;

            this.draw = function(){
                ctx.save();
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                ctx.fillStyle = 'rgba(255,0,0,.5)';
                ctx.strokeStyle = 'rgba(0,0,0,.5)';
                ctx.fill();
                ctx.stroke();
                ctx.restore();
            }
          },
          GetRadius(Location, number){
            let location = Object.entries(Location.properties);
            location.shift();
            return Math.round(location[number][1]);
          },
          CreateAnimatingLocations(){
            //Restart the animation when the button is clicked again
            if(this.number === 365){
              this.number = 0;
            }
            let canvas = document.getElementById('WaterUseCanvas');
            let ctx = canvas.getContext('2d');
            let self = this;
            let number = this.number;
            let day = document.getElementById('day');
            let Locations = this.Locations.features;
            this.circleArray = [];

            let text = Object.entries(Locations[0].properties);
            text.shift();
            //Update day div
            day.innerHTML = text[number][0];
            //Create a Canvas Circle from the data and push to the circleArray
            for(let i = 0; i < Locations.length; i++){
              self.circleArray.push(new this.Circle(canvas, ctx, self.ProjectPoint(Locations[i]).x, self.ProjectPoint(Locations[i]).y, self.GetRadius(Locations[i], number)));
            }
            ctx.clearRect(0,0, canvas.width, canvas.height);
            for(let i = 0; i < this.circleArray.length; i++){
                self.circleArray[i].draw();
            }
            //Stop animation at the end of the year
            if(number < 364){
                console.log(number);
                requestAnimationFrame(self.CreateAnimatingLocations)
            }
            this.number++;
          },
        }
    }
</script>

<style lang="scss">
#water-use-container {
  border: solid black;
  border-width: 0 1px 1px 1px;
  display: flex;
  flex-direction: column;
}

#waterUseVisualArea{
  flex: 1;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  #radialCharts{
    flex: 1;
    display: flex;
    flex-direction: column;;
    justify-content: center;
    align-items: center;;
    border-bottom: 1px solid rgb(50,50,50);
    border-top: 1px solid rgb(50,50,50);
  }
  #waterUseMap{
    position: relative;
    flex: 3;
    display: flex;
    flex-direction: column;
    #mapgl-water-use-mapbox-map{
      flex: 1;

      #WaterUseCanvas{
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
  #day{
    width: 200px;
    height: 50px;
    position: absolute;;
    right: 10px;
    bottom: 10px;
    background: #fff;
    border: 1px solid rgb(190,190,190);
    font-size: 1.5em;
    z-index: 9000;
    text-align: center;
    line-height: 50px;
    border-radius: 5px;
  }
}
</style>
