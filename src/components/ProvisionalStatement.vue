<template>
  <div class="usa-prose provisional-statement">
    <hr>
    <h5>Provisional Statement</h5>
    <h6>This information is preliminary or provisional and is subject to revision. It is being provided to meet the need
      for timely best science. The information has not received final approval by the U.S. Geological Survey (USGS) and
      is provided on the condition that neither the USGS nor the U.S. Government shall be held liable for any damages
      resulting from the authorized or unauthorized use of the information.</h6>
  </div>
</template>

<script>
    export default {
        name: "ProvisionalStatement"
    }
</script>

<style scoped lang="scss">
  .provisional-statement {
    background-color: #e7f6f8;
    hr {
      margin: 0
    }

    h5 {
      margin: 0;
      padding: 0.2em 0.2em 0.25em 0.2em;
      background-color: #449dac;
    }

    h6 {
      padding: 0.2em;
      margin-top: 0;
    }
  }

</style>