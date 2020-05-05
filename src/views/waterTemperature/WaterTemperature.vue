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
      <h3>place holder for water temperature</h3>
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
  .usa-prose {
    h1 {
      font-size: 1rem;
      margin-left: 10px;
    }
  }
}

</style>
