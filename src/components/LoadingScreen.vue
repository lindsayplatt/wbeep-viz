<template>
  <div :class="{ loader: true, fadeout: !isLoading }">
    <div id="loadingMessage">
      <USGSLOGO />
      <p>National Integrated Water Availability Assessments</p>
      <div id="spinner" />
    </div>
  </div>
</template>
<script>
import USGSLOGO from "../images/usgssvg/usgsScienceLogo.svg";
export default {
  name: "LoadingScreen",
  components: {
    USGSLOGO
  },
  props: {isLoading: Boolean}
};
</script>
<style lang="scss">
.loader {
  background-color: #000;
  bottom: 0;
  color: white;
  display: block;
  font-size: 32px;
  left: 0;
  overflow: hidden;
  padding-top: 10vh;
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
  z-index: 9000;
  height: 100%;
}

#loadingMessage {
  width: 90%;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  svg {
    fill: #fff;
  }

  p {
    font-size: 5vw;
    margin: 5px 0 20px 0;
  }
}

#spinner{
  border: 10px solid #fff;
  border-top: 10px solid #00bf26;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 2s linear infinite;
  margin: 0 auto;
}

.fadeout {
  animation: fadeout 1s forwards;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}

@keyframes spin{
  0%{transform: rotate(0deg);}
  100%{transform: rotate(360deg);}
}

@media screen and (min-width: 600px){
  #loadingMessage p {
    font-size: .9em;
  }
}
</style>