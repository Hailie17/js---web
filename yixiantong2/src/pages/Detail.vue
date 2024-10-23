<template>
  <div class="container">
    <common-header :title="title"></common-header>
  </div>
</template>

<script>
import CommonHeader from '@/components/Header/Common.vue'
export default {
  components: {
    CommonHeader
  },
  data(){
    return {
      title: '详细信息'
    }
  }
}
</script>

<style lang="scss" scoped></style>