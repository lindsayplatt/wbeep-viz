<template>
  <div id="subtitleInfoModal">
    <div id="infoContainer">
      <div id="subtitleModalExit">
        <a
          id="exit"
          href="javascript:void(0);"
          aria-label="close more information box"
          class="icon"
          @click="$emit('clickedExit')"
        >
          <font-awesome-icon icon="times" />
        </a>
      </div>
      <h2>About This Map</h2>
      <p>
        This map shows the latest available daily estimates of natural water storage for approximately 110,000 regions across the lower forty-eight states.
        Map shading indicates the current natural water storage relative to historical conditions for this time of year.
      </p>
      <router-link to="/questionsandanswers">
        <button
          v-ga="$ga.commands.trackName.bind(this, 'button-subtitle', 'click', 'user went to questions and answers page')"
        >
          Learn More
        </button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "SubTitleModal"
};
</script>
<style scoped lang="scss">
#subtitleInfoModal {
  min-height: 30px;
  position: absolute;
  top: 85px;
  z-index: 1000;
  border-radius: 5px;
  border: 1px solid rgb(200, 200, 200);
  background: rgb(255, 255, 255);
  background: rgba(255, 255, 255, 0.8);

  #infoContainer {
    min-height: 20px;
    position: relative;
    padding: 20px 5x 0 5px;
    font-size: 0.9em;
    text-align: center;
    max-width: 260px;

    #subtitleModalExit{
      text-align: right;
    }

    #exit {
      display: inline-block;
      width: 25px;
      height: 100%;
      color: #000;
      cursor: pointer;
      outline: none;
      text-align: center;

      svg {
        height: 18px;
        width: 18px;
        margin: 3px 0 0 0;
      }
    }

    p {
      text-align: left;
      margin: 0 0 10px 0;
      padding: 0 10px;
    }

    h2 {
      font-size: 1.2em;
      font-weight: bold;
      padding: 0;
      margin: 8px 0;
    }

    button {
      margin: 0 0 10px 0;
      background: #003366;
      color: #ffffff;
      border: none;
      outline: none;
      padding: 5px 10px;
      border-radius: 5px;
      font-size: 0.9em;
      font-weight: bold;
    }
  }
}

@media screen and (min-width: 360px){
    #subtitleInfoModal{
      top: 70px;
    }
  }
</style>