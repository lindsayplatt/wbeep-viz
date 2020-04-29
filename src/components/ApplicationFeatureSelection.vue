<template>
  <div>
    <router-link :to="{name: 'WaterStorage'}">
      water storage
    </router-link>
    <router-link :to="{name: 'WaterUse'}">
      water use
    </router-link>
    <router-link :to="{name: 'WaterTemperature'}">
      water temperature
    </router-link>
  </div>
</template>

<script>
  export default {
      name: 'ApplicationFeatureSelection'
  }
</script>

<style scoped lang="scss">

</style>
