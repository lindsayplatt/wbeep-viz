<template>
  <div id="app">
    <HeaderUSWDSBanner />
    <HeaderUSGS />
    <router-view></router-view>
    <FooterEmail />
    <FooterUSGS />
  </div>
</template>

<script>
    import HeaderUSWDSBanner from './components/HeaderUSWDSBanner'
    import HeaderUSGS from './components/HeaderUSGS'
//    import MapBox from './components/MapBox'
//    import About from './components/About'
    import FooterEmail from './components/FooterEmail'
    import FooterUSGS from './components/FooterUSGS'

//            MapBox,
//            About,
    export default {
        name: 'App',
        components: {
            HeaderUSWDSBanner,
            HeaderUSGS,
            FooterEmail,
            FooterUSGS
        },
        methods: {
            // Set up the track method for Google Analytics
            track () {
                this.$ga.page('/')
            },
        }
    }
</script>

<style lang="scss">
  body{
    margin: 0;
    padding: 0;
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
</style>
