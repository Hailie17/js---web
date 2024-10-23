<template>
  <header class="header">
    <city-selector></city-selector>
  </header>
</template>

<script>
import CitySelector from './Sub/CitySelector.vue'
export default {
  name: 'HomeHeader',
  components: {
    CitySelector
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins.scss';
@import '@/assets/styles/variables.scss';
.header {
  @include flex-row;
  height: $headerHeight;
  background-color: $defaultBgColor;
}
</style>