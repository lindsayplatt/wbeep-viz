<template>
  <div id="application-feature-selection">
    <div class="router-links">
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
    <hr>
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
              link.style.borderWidth = '1px 1px 1px 1px';
              link.style.color = 'black';
          });
          const activeLink = document.getElementById(activeFeatureName);
          activeLink.style.backgroundColor = '#003366';
          activeLink.style.borderBottomColor = '#003366';
          activeLink.style.borderWidth = '1px 1px 2px 1px';
          activeLink.style.color = 'white';
      }
    }
  }
</script>

<style scoped lang="scss">
#application-feature-selection {
  .router-links {
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
  }

  hr {
    position: relative;
    top: -2px;
    margin: 0;
    padding: 0;
  }
  @media only screen and (max-width: 480px ) {
    .router-links {
      display: flex;
      .feature-link {
        font-size: 0.75em;
        flex: 1;
      }
    }
  }
}
</style>
