<template>
  <div class="recom-bd">
    <detail-title icon="icon-recom" title="推荐菜品"></detail-title>
  </div>
</template>

<script>
import DetailTitle from './Title.vue'
export default {
  name: 'DetailRecom',
  components: {
    DetailTitle
  },
  props: {
    recom: String
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/mixins';
@import '~@/assets/styles/variables';
</style>
