<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <search-input @onSearch="onSearch"></search-input>
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
      title: '商家搜索',
      data:{}
    }
  },
  methods: {
    // 11
    onSearch(res){
      if (res && res.status === 0) {
        const data = res.data()
        data.foodDatas = tools.formatJson(data.foodDatas, 'keyword')
        this.data = data
      } else {
        this.data = res // 返回错误信息
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
