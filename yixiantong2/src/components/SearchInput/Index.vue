<template>
  <div class="search-input">
    <div class="input-wrapper">
      <span class="iconfont icon-header-search"></span>
      <input type="text" class="input" :placeholder="placeholder" v-model="keyword" @input="onSearch">
    </div>
  </div>
</template>

<script>
import tools from "@/utils/tools";
import {SearchModel} from "@/modules/search";
import {mapState} from "vuex";

export default {
  name: 'SearchInput',
  data(){
    return {
      placeholder: '美食 / 景点 / 美食 / 景点 / 美食 / 景点',
      keyword: ''
    }
  },
  computed(){
    ...mapState(['cityId'])
  },
  methods: {
    onSearch(){
      const keyword = tools.trimSpace(this.keyword) // 去掉空格
      if (keyword.length <= 0){
        return
      }
      const searchModule = new SearchModel()
      searchModule.searchAction(keyword, this.cityId).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
