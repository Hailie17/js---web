<template>
  <header class="header"></header>
</template>

<script>
export default {
  name: 'HomeHeader',
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