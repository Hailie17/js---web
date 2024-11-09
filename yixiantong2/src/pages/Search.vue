<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <search-input></search-input>
  </div>
</template>

<script>
import CommonHeader from '@/components/Header/Common.vue'
import SearchInput from '@/components/SearchInput/Index.vue'
export default {
  name: 'Search',
  components: {
    CommonHeader, SearchInput
  },
  data(){
    return {
      title: '商家搜索'
    }
  }
}
</script>

<style lang="scss" scoped></style>
