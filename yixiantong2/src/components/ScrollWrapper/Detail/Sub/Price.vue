<template>
  <div class="price-bd">
    <span class="iconfont icon-price"></span>
    <span class="price">￥{{price}}元起</span>
  </div>
</template>

<script>
export default {
  name: 'DetailPrice',
  props: {
    price: {
      type: Number,
      default(){
        return 0
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
