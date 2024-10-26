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
import {IndexModel} from "@/modules/index";

export default {
  name: 'HomeScrollWrapper',
  components: {
    BetterScroll,
    CategoryIcons
  },
  computed: {
    ...mapState(['cityId'])
  },
  mounted() {
    this.getHomeDatas(this.cityId)
  },
  methods: {
    getHomeDatas(cityId){
      const indexModel = new IndexModel() // 实例化
      indexModel.getHomeDatas(cityId).then((res)=> {
        console.log(res)
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
