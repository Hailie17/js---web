<template>
  <header class="city">
    <span class="city-name">{{ this.cityName }}</span>
    <span class="iconfont icon-header-arrow"></span>
  </header>
</template>

<script>
export default {
  name: 'CitySelector',
  data() {
    return {
      cityName: '北京'
    }
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