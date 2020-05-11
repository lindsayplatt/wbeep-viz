<template>
  <p class="usa-prose">
    Hello User!
    <br>
    <br>
    While we are not sure how you got here, we are glad to see you. The page you are viewing will
    soon be home to the {{ title }} {{ featureName }} feature. Right now, this page is under construction
    and is not publicly available. Any information presented here is for placeholder purposes during construction.
    <strong>DO NOT</strong> use it for any purpose.
    <br>
    <br>
    If you have an interest in seeing a working product, check out
    our
    <a href="https://labs.waterdata.usgs.gov/estimated-availability/#/">Natural Water Storage</a>
    map.
  </p>
</template>

<script>
  export default {
      name: 'NotPubliclyAvailable',
      props: {
          title: {
              type: String,
              required: true
          },
          featureName: {
              type: String,
              required: true
          }
      }
  }
</script>

<style scoped lang="scss">
  p {
    background-color: #a0aec4;
    padding: 1em;
  }
</style>
