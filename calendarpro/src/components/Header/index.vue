<template>
  <div class="header">
    <h1>
      <slot></slot>
    </h1>
  </div>
</template>

<script>
//888
export default {
  name: 'MyHeader'
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: .44rem;
  z-index: 1;
  background-color: #ed4040;
  text-align: center;
  line-height: .44rem;
  .h1 {
    font-size: .18rem;
    color: #fff;
  }
}
</style>