<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">

    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import {DetailModel} from "@/modules/detail";
export default {
  name: 'DetailScrollWrapper',
  mounted(){
    this.scroll = new BetterScroll(this.$refs.wrapper)
  },
  methods: {
    getDetail(field, id) {
      const detailModel = new DetailModel()
      detailModel.getDetail(field,id).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
