<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <list-scroll-wrapper></list-scroll-wrapper>
  </div>
</template>

<script>
import CommonHeader from '@/components/Header/Common.vue'
import ListScrollWrapper from '@/components/ScrollWrapper/List.vue'
export default {
  name: 'List',
  components: {
    CommonHeader,
    ListScrollWrapper
  },
  data(){
    return {
      title: '列表'
    }
  }
}
</script>

<style lang="scss" scoped></style>
