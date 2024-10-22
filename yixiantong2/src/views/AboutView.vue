<template>
  <div class="about">
    <h1>{{title}}</h1>
    <span class="iconfont icon-smile"></span>
    <span class="iconfont icon-price"></span>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      title: '一线生活'
    }
  }
}
</script>
<style lang="scss" scoped>
.about {
  text-align: center;
  color: purple;
}
</style>
