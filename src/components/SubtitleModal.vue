<template>
  <div id="subtitleInfoModal">
    <div id="infoContainer">
      <a id="exit" href="javascript:void(0);" aria-label="close more information box" class="icon" @click="handleClick">
        <font-awesome-icon icon="times" />
      </a>
      <h2>About This Map</h2>
      <p>
        This map shows the latest available daily estimates of natural water storage for approximately 110,000 regions across the conterminous U.S.
        Map shading indicates the current natural water storage relative to historical conditions for this time of year.
      </p>
      <router-link to="/questionsandanswers">
        <button
          @click="runGoogleAnalytics('subtitle', 'click', 'user went to about page')"
        >Learn More</button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
    name: "SubTitleModal",
    methods:{
        handleClick(){
            this.$emit('clickedExit');
        }
    }
};
</script>
<style scoped lang="scss">
#subtitleInfoModal{
    min-height: 30px;
    position: absolute;
    top: 65px;
    z-index: 1000;
    border-radius: 5px;
    border: 1px solid rgb(200,200,200);
    background: rgb(255,255,255);
    background: rgba(255,255,255,.8);
    
    #infoContainer{
      min-height: 20px;
      width: 270px;
      position: relative;
      padding: 25px 10px 0 10px;
      font-size: .9em;
      text-align: center;

      #exit{
        display: inline-block;
        width: 18px;
        height: 18px;
        position: absolute;
        right: 5px;
        top: 3px;
        text-align: center;
        color: #000;
        cursor: pointer;
        outline: none;

        svg{
            height: 100%;
            width: 100%;
            margin: 3px 0 0 0;
        }
      }

      p{
        text-align: left;
        margin: 0 0 10px 0;
      }
      
      h2{
        font-size: 1.2em;
        font-weight: bold;
        padding: 0;
        margin: 8px 0;
      }

      button{
        margin: 0 0 10px 0;
        background: #003366;
        color: #ffffff;
        border: none;
        outline: none;
        padding: 5px 10px;
        border-radius: 5px;
        font-size: .9em;
        font-weight: bold;
      }
    }
  }

  @media screen and (min-width: 600px){
      #subtitleInfoModal{
        #infoContainer{
            width: 320px;
        }
    }
  }
</style>