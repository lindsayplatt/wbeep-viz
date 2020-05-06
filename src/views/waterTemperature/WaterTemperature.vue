<template>
  <div id="water-temperature-container">
    <LoadingScreen
      v-if="!isInternetExplorer"
    />
    <div class="header-container">
      <div class="usa-prose">
        <h1>
          {{ title }} {{ featureName }}{{ titleSuffix }} {{ developmentTier }}
        </h1>
      </div>
    </div>

    <InternetExplorerPage v-if="isInternetExplorer" />
    <div v-if="!isInternetExplorer">
      <div>
        <p class="usa-prose">
          placeholder element for {{ featureName }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import LoadingScreen from "../../components/LoadingScreen";
  import InternetExplorerPage from "../../components/InternetExplorerPage";

  export default {
      name: 'WaterTemperature',
      components: {
        LoadingScreen,
        InternetExplorerPage
      },
      data() {
          return {
              title: process.env.VUE_APP_TITLE,
              titleSuffix: process.env.VUE_APP_TITLE_SUFFIX,
              featureName: 'Water Temperature',
              developmentTier: process.env.VUE_APP_TIER,
              isInternetExplorer: false
          }
      },
      created() {
          this.$store.dispatch('changeActiveFeatureTab',  'waterTemperature')
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
