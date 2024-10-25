<template>
  <div class="city">
    <router-link to="City">
      <span class="city-name">{{ this.cityName }}</span>
      <span class="iconfont icon-header-arrow"></span>
    </router-link>
  </div>
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
@import '~@/assets/styles/mixins.scss';
@import '~@/assets/styles/variables.scss';
.city {
  width: .6rem;
  height: $headerHeight;
  a {
    @include flex-row;
    @include vh-center;
    width: 100%;
    height: $headerHeight;
    .city-name {
      font-size: .16rem;
      font-weight: bold;
    }
    .iconfont {
      font-size: .08rem;
      padding-left: .03rem;
    }
  }
}
</style>
