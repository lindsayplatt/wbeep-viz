<template>
  <div id="water-temperature-container">
    <LoadingScreen />
    <div class="header-container">
      <div class="usa-prose">
        <h1>
          {{ title }} {{ featureName }}{{ titleSuffix }} {{ developmentTier }}
        </h1>
      </div>
    </div>
    <div v-if="!showNewFeatureTabs">
      <p class="usa-prose">
        Hello User! While we are not sure how you got here, we are glad to see you. The page you are viewing will
        soon be home to the {{ title }} {{ featureName }} feature. Right now, this page is under construction
        and is not publicly available. Any information presented here is for placeholder purposes during construction.
        <strong>DO NOT</strong> use it for any purpose. If you have an interest in seeing a working product, check out
        our
        <a href="https://labs.waterdata.usgs.gov/estimated-availability/#/">Natural Water Storage</a>
        map.
      </p>
    </div>
    <div>
      <p class="usa-prose">
        Placeholder for {{ featureName }}
      </p>
    </div>
  </div>
</template>

<script>
  import LoadingScreen from "../../components/LoadingScreen";

  export default {
      name: 'WaterTemperature',
      components: {
        LoadingScreen
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
              featureName: 'Water Temperature',
              developmentTier: process.env.VUE_APP_TIER
          }
      }
  }
</script>

<style scoped lang="scss">
#water-temperature-container {
  border: solid black;
  border-width: 0 1px 1px 1px;
  margin-top: 0;
  position: relative;
  top: -2px;
  .usa-prose {
    margin-left: 10px;
    h1 {
      font-size: 1rem;
      padding-top: 0.2em;
    }
  }
}

</style>
