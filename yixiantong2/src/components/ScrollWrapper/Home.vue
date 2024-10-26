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
  data(){
    return {
      homeDatas: {
        foodDatas: [],
        hotelDatas: [],
        ktvDatas: [],
        massageDatas: [],
        x: []
      }
    }
  },
  computed: {
    ...mapState(['cityId'])
  },
  mounted() {
    this.getHomeDatas(this.cityId)
    this.scroll = new BetterScroll(this.$refs.wrapper) // 实例化
  },
  methods: {
    getHomeDatas(cityId){
      const indexModel = new IndexModel() // 实例化
      indexModel.getHomeDatas(cityId).then((res)=> {
        if(res && res.status === 0 ) {
          const data = res.data
          this.homeDatas.foodDatas = data.foodDatas
          this.homeDatas.hotelDatas = data.hotelDatas
          this.homeDatas.ktvDatas = data.ktvDatas
          this.homeDatas.massageDatas = data.massageDatas
          this.homeDatas.viewDatas = data.viewDatas
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
