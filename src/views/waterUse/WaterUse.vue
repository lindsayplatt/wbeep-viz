<template>
  <div id="water-use-container" class="centeredContent waterUseFlex">
    <div id="water-use-content" class="waterUseFlex">
      <LoadingScreenInternal />
      <div id="buttonsContainer" class="centeredContent">
        <button class="waterUseButton">Thermoelectric</button>
        <button class="waterUseButton">Irrigation</button>
        <button class="waterUseButton">Public Supply</button>
      </div>
      <div id="waterUseMapContainer" class="bordered">Map</div>
      <div id="waterUseBarChartContainer" class="bordered">BarChart</div>
    </div>
  </div>
</template>

<script>
  import LoadingScreenInternal from "../../components/LoadingScreenInternal";

  export default {
    name: 'WaterUse',
    components: {
        LoadingScreenInternal
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
    mounted(){
      let self = this;
      setTimeout(function(){
        this.isLoading = false;
      }, 100)
    },
    methods: {
      runGoogleAnalytics(eventName, action, label) {
        this.$ga.set({ dimension2: Date.now() });
        this.$ga.event(eventName, action, label);
      }
    }
  }
</script>

<style lang="scss">
.loader {
  top: 107px;
  height: 100%;
}
.waterUseFlex{
  display: flex;
  flex-direction: column;
}
.centeredContent{
  align-items: center;
  justify-content: center;
}
.bordered{
  border: 1px solid #000;
  padding: 10px;
}
#water-use-container {
  flex: 1;
  margin: 20px 0;
  padding: 0 10px;
}
#water-use-content{
  width: 100%;
  max-width: 800px;
  flex: 1;
  display: flex;
}
#buttonsContainer{
  height: 40px;
  display: flex;
  .waterUseButton{
    flex: 1;
    background: #000;
    color: #fff;
    border-radius: 5px;
    margin-right: 10px;
    height: 40px;
    border: none;
    font-size: 11pt;
    &:last-child{
      margin-right: 0;
    }
  }
}
#waterUseMapContainer{
  flex: 2;
  margin: 20px 0;
}

#waterUseBarChartContainer{
  flex: 1;
}

@media screen and (min-width: 600px){
  #buttonsContainer{
    .waterUseButton{
      font-size: 16pt;
    }
  }
}


</style>