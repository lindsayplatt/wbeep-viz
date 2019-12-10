<template>
  <div class="usa-prose provisional-statement">
    <hr>
    <h5
      v-show="!isFullProvisionalStatementShowing"
      aria-label="learn more about provisional statement"
    >
      Attention! This information is PRELIMINARY and/or PROVISIONAL.
      <button
        @click="toggleProvisionalStatement"
      >
        Learn More
      </button>
    </h5>
    <h5
      v-show="isFullProvisionalStatementShowing"
      aria-label="close provisional statement"
    >
      This information is preliminary or provisional and is subject to revision. It is being provided to meet the need
      for timely best science. The information has not received final approval by the U.S. Geological Survey (USGS) and
      is provided on the condition that neither the USGS nor the U.S. Government shall be held liable for any damages
      resulting from the authorized or unauthorized use of the information.
      <button @click="toggleProvisionalStatement">
        I understand
      </button>
    </h5>
  </div>
</template>

<script>
    export default {
        name: "ProvisionalStatement",
        data() {
            return {
               isFullProvisionalStatementShowing: false
            }
        },
        methods: {
            toggleProvisionalStatement() {
                this.isFullProvisionalStatementShowing = !this.isFullProvisionalStatementShowing;
            },
        }
    }
</script>

<style scoped lang="scss">
  .provisional-statement {
    text-align: center;
    background-color: #e7f6f8;
    hr {
      margin: 0
    }

    h5 {
      margin: auto;
      padding: 0.2em;
      margin-top: 0;
      max-width: 70em;

      button {
        margin: 3px 0 0 10px;
        background: #003366;
        color: #ffffff;
        border: none;
        outline: none;
        padding: 2px 10px;
        border-radius: 5px;
        font-weight: bold;
      }
    }
  }
</style>
