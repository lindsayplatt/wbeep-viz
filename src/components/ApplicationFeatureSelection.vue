<template>
  <div id="application-feature-selection">
    <router-link
      id="waterStorage"
      class="feature-link"
      :to="{name: 'WaterStorage'}"
    >
      water storage
    </router-link>
    <router-link
      id="waterUse"
      class="feature-link"
      :to="{name: 'WaterUse'}"
    >
      water use
    </router-link>
    <router-link
      id="waterTemperature"
      class="feature-link"
      :to="{name: 'WaterTemperature'}"
      @click="activeFeatureTab()"
    >
      water temperature
    </router-link>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'ApplicationFeatureSelection',
    computed: mapState(['activeFeatureTab']),
    watch: {
        activeFeatureTab(newValue, oldValue) {
            this.changeActiveFeatureTab(newValue);
        }
    },
    methods: {
        changeActiveFeatureTab(activeFeatureName) {
            const linkElements = document.querySelectorAll('.feature-link');
            linkElements.forEach(function (link) {
                link.style.backgroundColor = 'white';
                link.style.borderBottomColor = 'black';
            });
            const activeLink = document.getElementById(activeFeatureName);
            activeLink.style.backgroundColor = 'pink';
            activeLink.borderBottomColor = 'white';
        }
    }
  }
</script>

<style scoped lang="scss">
#application-feature-selection {
  border-bottom: 1px solid black;
  /*button {*/
  /*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*  color: white;*/
  /*  text-decoration: none;*/
  /*  background: #003366;*/
  /*  margin-bottom: 0;*/
  /*}*/
  .feature-link {
    display: inline-block;
    padding: 0.35em 1.2em;
    border: 1px solid black;
    margin-top: 2px;
    border-radius: 0.12em;
    box-sizing: border-box;
    text-decoration: none;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-weight: 400;
    text-align: center;
    color: black;
    transition: all 0.2s;
  }
  .feature-link:focus {
    outline: none;
  }
  .feature-link:hover {
    color: red;
    background-color: #00bf26;
  }
  .feature-link:active {
    background-color: #003366;
  }

  @media all and (max-width:30em) {
    .feature-link {
      display:block;
      margin: 0.4em auto;
    }
  }


  /*font-size: 0.8em;*/
  /*margin: 0;*/
  /*padding: 0.2em;*/
  /*max-width: 70em;*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*font-weight: 400;*/
  /*text-align: center;*/

  /*button {*/
  /*  margin: 3px 0 0 10px;*/
  /*  background: #003366;*/
  /*  color: #ffffff;*/
  /*  border: none;*/
  /*  outline: none;*/
  /*  padding: 2px 10px;*/
  /*  border-radius: 5px;*/
  /*  font-weight: bold;*/
  /*}*/
}
</style>
