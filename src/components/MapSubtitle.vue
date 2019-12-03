<template>
  <div id="subTitleContainer">
    <div id="subtitle">
      <div id="subtitleText">
        <p>An Indicator of Natural Water Storage</p>
      </div>
      <div id="subtitleInfoButton">
        <a
          id="subtitleIcon"
          href="javascript:void(0);"
          aria-label="more information link"
          class="icon"
          @click="runGoogleAnalytics('subtitle', 'click', 'user opened about text box'), subtitleModalToggle()"
        >
          <font-awesome-icon icon="info" />
        </a>
      </div>
    </div>
    <div id="data-date-div" />
    <SubtitleModal @clickedExit="subtitleModalToggle()" v-if="modalShowing"/>
  </div>
</template>

<script>
import SubtitleModal from "./SubtitleModal"
  export default {
    name: "MapSubtitle",
    components:{
      SubtitleModal
    },
    data(){
      return{
        modalShowing: false
      }
    },
    methods: {
        runGoogleAnalytics(eventName, action, label) {
            this.$ga.event(eventName, action, label)
        },
        subtitleModalToggle(){
          this.modalShowing = !this.modalShowing;
        }
    }
  };
</script>

<style scoped lang="scss">
h2 {
  font-size: 1.1rem;
}

#subTitleContainer{
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

#subtitle {
  background: rgb(255, 255, 255);
  background: rgba(255, 255, 255, 0.7);
  position: relative;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  text-align: center;
  border: 1px solid rgb(200, 200, 200);
  width:270px;

  p {
    margin: 0;
    user-select: none;
    font-size:.8em;
  }

  #subtitleText {
    flex: 1;
    line-height: 30px;
    padding: 0 0 0 10px;
  }

  #subtitleInfoButton {
    margin: 0 0 0 10px;
    width: 30px;
    height: 30px;
    position: relative;
    border-left: 1px solid rgb(200,200,200);

    a{
      color: #000;
      outline: none;
    }

    #subtitleIcon{
      display: block;
      height: 100%;
      border-radius: 0 5px 5px 0;

      &:active{
        background: #003366;
        color: #ffffff;
      }
      

      svg{
        width: 18px;
        height: 18px;
        margin: 5px 0 0 0;
      }
    }
  }
  
}

@media screen and (min-width: 600px){
  #subtitle{
    width: 320px;

    p{
      font-size: .9em;
    }
    #subtitleInfoModal{
      #infoContainer{
        width: 320px;
      }
    }
  }
  
  
}
</style>
