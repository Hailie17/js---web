<template>
  <header class="header">
    <back-ward></back-ward>
    <h1>{{ title }}</h1>
  </header>
</template>

<!-- 11 -->
<script>
import BackWard from './Sub/BackWard.vue'
export default {
  name: 'CommonHeader',
  components: {
    BackWard
  },
  props: {
    title: {
      type: String,
      default(){
        return '一线生活通'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/mixins.scss';
@import '~@/assets/styles/variables.scss';

.header {
  position: relative;
  @include flex-row;
  @include vh-center;
  height: $headerHeight;
  background-color: $defaultBgColor;
  h1 {
    font-size: .18rem;
  }
}

</style>
