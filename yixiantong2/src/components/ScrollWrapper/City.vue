<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="sroll-content">

    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'

export default {
  name: 'CityScrollWrapper',
  mounted(){
    this.scroll = new BetterScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="scss" scoped></style>