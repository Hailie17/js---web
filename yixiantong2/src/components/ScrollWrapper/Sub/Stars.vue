<template>
  <span class="stars-wrapper">
    <span :class="['iconfont icon-star', {active: starNum >= 1}]"></span>
    <span :class="['iconfont icon-star', {active: starNum >= 2}]"></span>
    <span :class="['iconfont icon-star', {active: starNum >= 3}]"></span>
    <span :class="['iconfont icon-star', {active: starNum >= 4}]"></span>
    <span :class="['iconfont icon-star', {active: starNum >= 5}]"></span>
  </span>
</template>

<script>
export default {
  name: 'Stars',
  props: {
    starNum: Number
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/mixins.scss';
@import '~@/assets/styles/variables.scss';
.stars-wrapper {
  color: #ccc;
  .active {
    color: $starColor;
  }
}
</style>
