<template>
  <div id="water-use-container">
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
    <div v-if="!isInternetExplorer" />
    <h3>placeholder element for water use</h3>
  </div>
</template>

<script>
    import LoadingScreen from "../../components/LoadingScreen";
    import InternetExplorerPage from "../../components/InternetExplorerPage";

    export default {
        name: 'WaterUse',
        components: {
            LoadingScreen,
            InternetExplorerPage
        },
        data() {
            return {
                title: process.env.VUE_APP_TITLE,
                titleSuffix: process.env.VUE_APP_TITLE_SUFFIX,
                featureName: 'Water Use',
                developmentTier: process.env.VUE_APP_TIER,
                isInternetExplorer: false
            }
        },
        created() {
            this.$store.dispatch('changeActiveFeatureTab',  'waterUse')
        }
    }
</script>

<style scoped lang="scss">
  #water-use-container {
    .usa-prose {
      h1 {
        font-size: 1rem;
        margin-left: 10px;
      }
    }
  }

</style>
