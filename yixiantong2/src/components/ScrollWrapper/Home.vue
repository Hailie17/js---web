<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="scroll-content">
      <category-icons></category-icons>
      <home-title :title="homeTitle.viewTitle"></home-title>
      <home-title :title="homeTitle.foodTitle"></home-title>
      <home-title :title="homeTitle.hotelTitle"></home-title>
      <home-title :title="homeTitle.massageTitle"></home-title>
      <home-title :title="homeTitle.ktvTitle"></home-title>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";
import CategoryIcons from './CategoryIcons/Index.vue'
import {mapState} from "vuex";
import {IndexModel} from "@/modules/index";
import HomeTitle from "@/components/ScrollWrapper/Sub/HomeTitle.vue";

export default {
  name: 'HomeScrollWrapper',
  components: {
    BetterScroll,
    CategoryIcons,
    HomeTitle
  },
  data(){
    return {
      homeDatas: {
        foodDatas: [],
        hotelDatas: [],
        ktvDatas: [],
        massageDatas: [],
        viewDatas: []
      },
      homeTitle: {
        foodTitle: '推荐美食',
        hotelTitle: '推荐酒店',
        ktvTitle: '推荐KTV',
        massageTitle: '推荐按摩',
        viewTitle: '推荐美景',
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
