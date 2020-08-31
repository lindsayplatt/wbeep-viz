<template>
  <div id="app">
    <HeaderUSWDSBanner />
    <HeaderUSGS />
    <InternetExplorerPage v-if="isInternetExplorer" />
    <ApplicationFeatureSelection
      v-if="showNewFeatureTabs && !isInternetExplorer"
    />
    <router-view
      v-if="!isInternetExplorer"
      :show-new-feature-tabs="showNewFeatureTabs"
    />
    <FooterEmail v-if="!isInternetExplorer" />
    <ProvisionalStatement
      v-if="!isInternetExplorer"
    />
    <FooterUSGS />
  </div>
</template>

<script>
    import HeaderUSWDSBanner from './components/HeaderUSWDSBanner'
    import HeaderUSGS from './components/HeaderUSGS'
    import ApplicationFeatureSelection from "./components/ApplicationFeatureSelection";
    import FooterEmail from './components/FooterEmail'
    import FooterUSGS from './components/FooterUSGS'
    import ProvisionalStatement from "./components/ProvisionalStatement"
    import InternetExplorerPage from "./components/InternetExplorerPage";

    export default {
        name: 'App',
        components: {
            HeaderUSWDSBanner,
            HeaderUSGS,
            ApplicationFeatureSelection,
            FooterEmail,
            ProvisionalStatement,
            FooterUSGS,
            InternetExplorerPage
        },
        data() {
            return {
                isInternetExplorer: false,
                showNewFeatureTabs: JSON.parse(process.env.VUE_APP_SHOW_NEW_FEATURE_TABS) // remember all env variables are strings, so let's convert this true/false value to a boolean
            }
        },
        created() {
            // We are ending support for Internet Explorer, so let's test to see if the browser used is IE.
            this.$browserDetect.isIE ? this.isInternetExplorer = true : this.isInternetExplorer = false;
        }
    }
</script>

<style lang="scss">
  body{
    margin: 0;
    padding: 0;

    .icon-map-control-question {
      transition: transform 1s;
      transform: skew(0deg, 0deg);
    }

    .icon-map-control-question:hover {
      transition: transform 1s;
      transform: skew(-15deg, 10deg);
    }
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  /* Styles for Custom Map Controls (the button that are within the map) */
  .mapboxgl-ctrl .icon-map-control svg {
    width: 18px;
    height: 18px;
    margin-top: 4px;
  }

  .icon-map-control-question {
    transition: transform 1s;
    transform: skew(0deg, 0deg);
  }

  .icon-map-control-question:hover {
    transition: transform 1s;
    transform: skew(-15deg, 10deg);
  }

  .usa-banner__inner {
    margin-left: 10px;
    padding-left: 5px;
  }
</style>
