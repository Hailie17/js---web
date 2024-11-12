<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">

    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";

export default {
  name: 'SearchScrollWrapper',
  props:{
    data: Object
  },
  components:{

  },
  mounted() {
    this.betterscroll = new BetterScroll(this.$refs.wrapper)
  }

}
</script>
