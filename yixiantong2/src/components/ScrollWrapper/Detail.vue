<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">

    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
export default {
  name: 'DetailScrollWrapper',
  mounted(){
    this.scroll = new BetterScroll(this.$refs.wrapper)
  }
}
</script>
