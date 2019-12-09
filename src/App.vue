<template>
  <div id="app">
    <HeaderUSWDSBanner />
    <HeaderUSGS />
    <router-view />
    <FooterEmail />
    <ProvisionalStatement />
    <FooterUSGS />
  </div>
</template>

<script>
    import HeaderUSWDSBanner from './components/HeaderUSWDSBanner'
    import HeaderUSGS from './components/HeaderUSGS'
    import FooterEmail from './components/FooterEmail'
    import FooterUSGS from './components/FooterUSGS'
    import ProvisionalStatement from "./components/ProvisionalStatement"

    export default {
        name: 'App',
        components: {
            HeaderUSWDSBanner,
            HeaderUSGS,
            FooterEmail,
            ProvisionalStatement,
            FooterUSGS
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
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 100%;
  }

  @media screen and (min-width: 601px){
    body{
      height: 100vh;
    }
    #app{
      height: 100vh;
      display: flex;
      flex-direction: column;
    }
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

</style>
