<template>
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
</template>
<script>
import {MglMap} from 'vue-mapbox';
import mapStyles from "../../assets/mapStyles/waterUse/mapStyles";
import waterUseData from '../../assets/WaterUse/data/waterUse';
import mapboxgl from "mapbox-gl";
import * as d3 from 'd3';
export default {
    'name': 'WaterUseMap',
    components:{
        MglMap
    },
    data(){
        return{
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
            circleArray: [],
            Locations: waterUseData.locations.features,
            number: 0
        }
    },
    mounted(){
        this.$root.$on('AnimateMap', () => {
            this.CreateAnimatingDots();
        });
    },
    methods:{
        onMapLoaded(event) {
            this.$store.map = event.map; // The 'event' gives us access to the map as an object but only after the map has loaded. Once we have that, we add the map object to the Vuex store
            const map = this.$store.map;
            let googleAnalytics = this.runGoogleAnalytics; // We need to get the global Google Analytics (GA) plugin object 'this.$ga' into this scope, so let's make a local variable and assign our GA event tracking method to that.
            map.resize(); //This solves the mysterious whitespace by resizing the map to the correct size.
            map.touchZoomRotate.enable(); // Allow users to pinch to zoom on touch devices.
            map.touchZoomRotate.disableRotation(); // Disable the rotation functionality, but keep pinch to zoom.
            map.fitBounds([[-125.3321, 23.8991], [-65.7421, 49.4325]]); // Once map is loaded, zoom in a bit more so that the map neatly fills the screen.
            setTimeout(() => {this.CreateIntialDots()}, 400);// Set a timeout to make sure the fitbounds action is completely done before loading screen fades away.
        },
        CreateIntialDots(){
            let map = this.$store.map;
            let self = this;
            let canvasContainer = map.getCanvasContainer();
            let canvas = d3.select(canvasContainer)
                .append('canvas')
                .attr('id', 'WaterUseCanvas')
                .node();
            this.FixDPI(canvas);
            let width = canvas.width;
            let height = canvas.height;
            //Create a Canvas Circle from the data and push to the circleArray
            for(let i = 0; i < this.Locations.length; i++){
                self.circleArray.push(new this.Circle(canvas, self.ProjectPoint(this.Locations[i]).x, self.ProjectPoint(this.Locations[i]).y, this.Locations[i].properties['W2015-01-01'] * 2));
            }
            
            //Loop through circleArray and dtaw each individual circle
            for(let i = 0; i < this.circleArray.length; i++){
                this.circleArray[i].draw();
            }
        },
        Circle(canvas, x,y,radius){
            let ctx = canvas.getContext('2d');
            this.x = x;
            this.y = y;
            this.radius = radius;

            this.draw = function(){
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                ctx.fillStyle = 'rgba(255,0,0,.5)';
                ctx.strokeStyle = 'rgba(0,0,0,.5)';
                ctx.fill();
                ctx.stroke();
            }
        },
        GetRadius(Location, number){
            let location = Object.entries(Location.properties);
            location.shift();
            return location[number][1] * 2;
        },
        CreateAnimatingDots(){
            let canvas = document.getElementById('WaterUseCanvas');
            let ctx = canvas.getContext('2d');
            let self = this;
            let number = this.number;
            this.circleArray = [];
            //Create a Canvas Circle from the data and push to the circleArray
            for(let i = 0; i < this.Locations.length; i++){
                self.circleArray.push(new this.Circle(canvas, self.ProjectPoint(this.Locations[i]).x, self.ProjectPoint(this.Locations[i]).y, self.GetRadius(this.Locations[i], number)));
            }
            ctx.clearRect(0,0, canvas.width, canvas.height);
            for(let i = 0; i < this.circleArray.length; i++){
                self.circleArray[i].draw();
            }

            if(number < 366){
                console.log(number);
                requestAnimationFrame(self.CreateAnimatingDots)   
            }
            this.number++;
        },
        Animate(){
            let number = this.number;
            
        },
        FixDPI(canvas){
            let dpi = window.devicePixelRatio;
            //create a style object that returns width and height
            let style = {
                height() {
                    return +getComputedStyle(canvas).getPropertyValue('height').slice(0,-2);
                },
                width() {
                    return +getComputedStyle(canvas).getPropertyValue('width').slice(0,-2);
                }
            }
            //set the correct attributes for a crystal clear image!
            canvas.setAttribute('width', style.width() * dpi);
            canvas.setAttribute('height', style.height() * dpi);
        },
        ProjectPoint(data){
            return this.$store.map.project(
                new mapboxgl.LngLat(
                    data.geometry.coordinates[0],
                    data.geometry.coordinates[1]
                )
            );
        }
    }
}
</script>
<style lang="scss">
    #WaterUseCanvas{
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>