<template>
  <div id="water-use-container">
    <LoadingScreen />
    <div class="header-container">
      <div class="usa-prose">
        <h1>
          {{ title }} {{ featureName }}{{ titleSuffix }} {{ developmentTier }}
        </h1>
      </div>
    </div>
    <div v-if="!showNewFeatureTabs">
      <NotPubliclyAvailable
        :feature-name="featureName"
        :title="title"
      />
    </div>
    <div v-if="showNewFeatureTabs">
      <div>
        <p class="usa-prose">
          Placeholder for {{ featureName }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
    import LoadingScreen from "../../components/LoadingScreen";
    import NotPubliclyAvailable from "../../components/NotPubliclyAvailable";

    export default {
        name: 'WaterUse',
        components: {
            LoadingScreen,
            NotPubliclyAvailable
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
                featureName: 'Water Use',
                developmentTier: process.env.VUE_APP_TIER
            }
        }
    }
</script>

<style scoped lang="scss">
#water-use-container {
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
