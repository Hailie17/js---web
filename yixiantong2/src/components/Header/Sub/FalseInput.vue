<template>
  <header class="false-input">
    <router-link to="Search">
      <div class="input">
        <p class="placeholder">
          <span class="iconfont icon-header-search"></span>
          <span class="placeholser-text">{{ placeholderText }}</span>
        </p>
      </div>
    </router-link>
  </header>
</template>

<script>
export default {
  name: 'FalseInput',
  data() {
    return {
      placeholderText: '美食 / 酒店/ 景点 / 按摩 / KTV'
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