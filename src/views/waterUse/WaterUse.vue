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
    <div id="waterUseVisualArea">
      <div id="radialCharts">
        <h2>Radial Charts</h2>
        <button
          id="animate"
          @click="RunMapAnimation()"
        >
          Animate Map
        </button>
      </div>
      <div id="waterUseMap">
        <WaterUseMap />
      </div>
    </div>
  </div>
</template>

<script>
    import LoadingScreen from "../../components/LoadingScreen";
    import WaterUseMap from '../../components/WaterUse/WaterUseMap';

    export default {
        name: 'WaterUse',
        components: {
            LoadingScreen,
            WaterUseMap
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
                developmentTier: process.env.VUE_APP_TIER,
                isLoading: true
            }
        },
        methods: {
            runGoogleAnalytics(eventName, action, label) {
                this.$ga.set({ dimension2: Date.now() });
                this.$ga.event(eventName, action, label);
            },
            RunMapAnimation(){
              this.$root.$emit('AnimateMap')
            }
        }
    }
</script>

<style scoped lang="scss">
#water-use-container {
  border: solid black;
  border-width: 0 1px 1px 1px;
  display: flex;
  flex-direction: column;
  .usa-prose {
    margin-left: 10px;
    h1 {
      font-size: 1rem;
      padding-top: 0.2em;
    }
  }
}
#waterUseVisualArea{
  flex: 1;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  #radialCharts{
    flex: 1;
    display: flex;
    flex-direction: column;;
    justify-content: center;
    align-items: center;;
    border-bottom: 1px solid rgb(50,50,50);
    border-top: 1px solid rgb(50,50,50);
  }
  #waterUseMap{
    flex: 3;
    display: flex;
    flex-direction: column;
    .mapContainer{
      flex: 1;
    }
  }
}
</style>
