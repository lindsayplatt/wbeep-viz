<template>
  <div><a href="#" @click="runtest">test</a></div>
</template>
<script>
import { icon } from "@fortawesome/fontawesome-svg-core";

export default {
  name: "MapLayers",
  inject: ["mapbox", "map", "actions"],
  data() {
    return {
      control: null,
      googleAnalyticsTracker: this.$ga
    };
  },
  created: function() {
      this.recordForGoogleAnalytics();
  },
  mounted() {
    this.createCustomControl();
  },
  methods: {
    recordForGoogleAnalytics: function(nameOfTrackedElement, actionTypeRecorded, moreDetailedActionType, clickCount)  {
        return this.$ga.event(nameOfTrackedElement, actionTypeRecorded, moreDetailedActionType, clickCount);
    },
    runtest() {console.log('test dun run')},
    getTracker() {
        return this.$ga
    },

    createCustomControl() {
      class customControl {
        onAdd(map) {
            console.log('maybe ', this.googleAnalyticsTracker)
          let control = this.control;
          this.map = map;
          this.control = document.createElement("div");
          this.control.className = "mapboxgl-ctrl mapboxgl-ctrl-group";
          this.button = document.createElement("button");
          this.button.id = "layersIcon";
          this.button.className = "mapboxgl-ctrl-icon maplayersIcon";
          this.button.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            let toggleDiv = document.getElementById("mapLayersToggleContainer");
            if (toggleDiv.style.display === "none") {
              toggleDiv.style.display = "block";
            } else {
              toggleDiv.style.display = "none";
            }
          };
          this.icon = document.createElement("span");
          this.icon.innerHTML = icon({
            prefix: "fas",
            iconName: "layer-group"
          }).html;
          this.button.appendChild(this.icon);
          this.control.appendChild(this.button);
          return this.control;
        }
        onRemove() {
          this.control.parentNode.removeChild(this.control);
          this.map = undefined;
        }
      }
      const myCustomControl = new customControl();
      this.map.addControl(myCustomControl, "top-left");
    }
  }
};
</script>
<style scoped lang="scss">
.mapboxgl-ctrl .maplayersIcon svg {
  width: 18px;
  height: 18px;
  margin-top: 4px;
}
</style>