<template>
  <div class="main-content">
    <div class="usa-prose">
      <h1>Dear Internet Explorer user,</h1>
    </div>

    <p>
      As you may know, the internet browser you are using is quite antiquated. In order to bring you, and
      the rest of the internet audience, the best possible user experience, the {{ title }} application no longer offers support.
    </p>
    <p>
      We encourage you to return with one of the many other browsers available.
    </p>
  </div>
</template>

<script>
    export default {
        name: "InternetExplorerPageVue",
        props: {
            title: {
                type: String,
                default: process.env.VUE_APP_TITLE
            }
        }
    }
</script>

<style scoped>
  .main-content {
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
    padding: 2em;
  }
</style>