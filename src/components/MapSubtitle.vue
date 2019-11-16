<template>
  <div>
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
          @click="runGoogleAnalytics('subtitle', 'click', 'user opened about text box')"
        >
          <font-awesome-icon icon="info" />
        </a>
        <div id="subtitleInfoModal">
          <div id="infoContainer">
            <a
              id="exit"
              href="javascript:void(0);"
              aria-label="close more information box"
              class="icon"
            >
              <font-awesome-icon
                icon="times"
              />
            </a>

            <h2>About This Map</h2>
            <p>
              This map shows the latest available daily estimates of natural water storage for approximately 110,000 regions across the conterminous U.S.
              Map shading indicates the current natural water storage relative to historical conditions for this time of year.
            </p>
            <router-link to="/about">
              <button @click="runGoogleAnalytics('subtitle', 'click', 'user went to about page')">
                Learn More
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div id="data-date-div" />
  </div>
</template>

<script>
    export default {
        name: "MapSubtitle",
        methods: {
            runGoogleAnalytics(eventName, action, label) {
                this.$ga.event(eventName, action, label)
            }
        }
    };
</script>

<style scoped lang="scss">
  h2 {
    font-size: 1.1rem;
  }

  #subtitle {
    background: rgb(255, 255, 255);
    background: rgba(255, 255, 255, 0.7);
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
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
    #subtitleInfoModal{
      display: none;
      min-height: 30px;
      position: absolute;
      top: 65px;
      right: 0;
      border-radius: 5px;
      border: 1px solid rgb(200,200,200);
      background: rgb(255,255,255);
      background: rgba(255,255,255,.8);

      #infoContainer{
        min-height: 20px;
        width: 270px;
        position: relative;
        padding: 25px 10px 0 10px;

        #exit{
          width: 20px;
          height: 20px;
          position: absolute;
          right: 0;
          top: 0;
        }

        p{
          text-align: left;
          margin: 0 0 10px 0;
        }

        h3{
          font-size: 1.1em;
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
