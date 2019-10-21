<template>
  <div />
</template>
<script>
import { icon } from "@fortawesome/fontawesome-svg-core";

export default {
  name: "MapLayers",
  inject: ["mapbox", "map", "actions"],
  data() {
    return {
      control: null
    };
  },
  mounted() {
    this.createCustomControl(this.runGoogleAnalytics);
  },
  methods: {
    runGoogleAnalytics(eventName, action, label) {
      this.$ga.event(eventName, action, label)
    },
    createCustomControl(googleAnalytics) {
      class customControl {
        onAdd(map) {
          this.map = map;
          this.control = document.createElement("div");
          this.control.className = "mapboxgl-ctrl mapboxgl-ctrl-group";
          this.button = document.createElement("button");
          this.button.id = "layersIcon";
          this.button.className = "mapboxgl-ctrl-icon maplayersIcon";
          this.button.onclick = function(e) {
              googleAnalytics('layers-icon', 'click', 'user opened layers menu');
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