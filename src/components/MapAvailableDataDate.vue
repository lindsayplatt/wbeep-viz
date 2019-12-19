<template>
  <div
    id="dataDateContainer"
    class="subtitle"
  >
    <div class="subtitleText">
      <p>Showing Latest Available Data: <span class="nowrap"><strong>{{ dataDate }}</strong></span></p>
    </div>
  </div>
</template>
<script>
    export default {
        name: "MapAvailableDataDate",
        data() {
            return {
                dataDate: "unavailable"
            };
        },
        mounted() {
            // If we can get a URL, try to get the date the model data was received and add it to the component data
            if (process.env.VUE_APP_DATA_DATE_URL) {
                fetch(process.env.VUE_APP_DATA_DATE_URL)
                        .then(response => {
                            if (!response.ok) { throw Error(response.statusText + ' The call to retrieve the model date has failed.') }
                            return response
                        })
                        .then(response => response.text())
                        .then(data => this.dataDate = data);
            }
        }
    }

</script>
<style scoped lang="scss">
  .subtitle {
    background: rgb(255, 255, 255);
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    top: 47px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    text-align: center;
    border: 1px solid rgb(200, 200, 200);
    width: 70%;
    max-width: 260px;


    p {
      margin: 0;
      user-select: none;
      font-size: .75em;
    }

    .nowrap{
      white-space: pre;
    }

    .subtitleText {
      flex: 1;
      line-height: 20px;
      padding: 2px;
    }
  }
  @media screen and (min-width: 600px) {
  .subtitle {
    p {
      font-size: 0.8em;
    }
  }
}
</style>
