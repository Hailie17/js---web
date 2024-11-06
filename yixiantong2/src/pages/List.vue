<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <list-scroll-wrapper></list-scroll-wrapper>
  </div>
</template>

<script>
import CommonHeader from '@/components/Header/Common.vue'
import ListScrollWrapper from '@/components/ScrollWrapper/List.vue'
import {mapState} from "vuex";
import fieldDatas from '@/assets/data/fields'
export default {
  name: 'List',
  components: {
    CommonHeader,
    ListScrollWrapper
  },
  computed: {
    ...mapState(['field']),
    title(){
      if (this.field) {
        return fieldDatas.filter(item => item.field === this.field)[0].iconText + '列表'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
