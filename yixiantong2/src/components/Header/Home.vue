<template>
  <header class="header">
    <city-selector></city-selector>
    <false-input></false-input>
  </header>
</template>

<script>
import CitySelector from './Sub/CitySelector.vue'
import FalseInput from './Sub/FalseInput.vue'
export default {
  name: 'HomeHeader',
  components: {
    CitySelector,
    FalseInput
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/mixins.scss';
@import '~@/assets/styles/variables.scss';
.header {
  @include flex-row;
  height: $headerHeight;
  background-color: $defaultBgColor;
}
</style>
