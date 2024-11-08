<template>
  <div class="search-input">
    <div class="input-wrapper">
      <span class="iconfont icon-header-search"></span>
      <input type="text" class="input" :placeholder="placeholder">
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchInput',
  data(){
    return {
      placeholder: '美食 / 景点 / 美食 / 景点 / 美食 / 景点'
    }
  }
}
</script>
