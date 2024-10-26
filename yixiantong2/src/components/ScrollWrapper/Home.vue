<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <category-icons></category-icons>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import CategoryIcons from './CategoryIcons/Index.vue'
import {mapState} from "vuex";
import {IndexModel} from "@/modules";

export default {
  name: 'HomeScrollWrapper',
  components: {
    BetterScroll,
    CategoryIcons
  }
}
</script>

<style lang="scss" scoped></style>
