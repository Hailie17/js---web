<template>
  <div class="title-bd">
    <h1>
      <span :class="['iconfont', icon]"></span>
      <span class="title">{{title}}</span>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'DetailTitle',
  props: {
    icon: String,
    title: String
  }
}
</script>

<style lang="scss" scoped>

</style>
