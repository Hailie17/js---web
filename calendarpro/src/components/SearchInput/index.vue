<template>
  <div class="search-wrap">
    <input type="text" :placeholder="placeholder" :maxlength="maxlength" :value="inputValue" @input="searchData($event)">
  </div>
</template>

<script>
import {ref, computed} from 'vue'
import { useStore } from 'vuex'
import { formatUserDate, getNowDate } from '@/libs/utils'
import getData from '@/services'

export default {
  name: 'SearchInput',
  props: {
    placeholder: String,
    maxlength: Number
  },
  setup(props){
    const inputValue = ref(''),
          store = useStore(),
          state = store.state

    const searchData = (e) => {
      inputValue.value = e.target.value
      const field = computed(() => state.field).value
      if( inputValue.value.length === props.maxlength ) {
        getData( store, field, formatUserDate(inputValue.value))
      } else if ( inputValue.value === 0 ) { // 搜索词删除后返回原始数据
        getData( store, field, getNowDate(field))
      }
    } 
    return {
      inputValue,
      searchData
    }
  }
}
</script>

<style lang="scss" scoped>
.search-wrap {
  position: fixed;
  top: .44rem;
  left: 0;
  z-index: 1;
  width: 100%;
  height: .38rem;
  padding: .03rem .1rem;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  background-color: #fff;
  input {
    width: 100%;
    height: 100%;
    font-size: .14rem;
    border: 1px solid #ddd;
    text-indent: .1rem;
    border-radius: .03rem;
    &:focus {
      border-color: #ed4040;
      box-shadow: 0 0 .02rem #ed4040;
      transition: all .3s;
    }
  }
}

</style>
