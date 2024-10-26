<template>
  <div class="scroll-wrapper" ref="wrapper">
    <div class="sroll-content">
      <current-city></current-city>
      <city-list></city-list>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
import CurrentCity from "@/components/ScrollWrapper/CityList/CurrentCity.vue";
import CityList from "@/components/ScrollWrapper/CityList/index.vue";

export default {
  name: 'CityScrollWrapper',
  components: {
    CurrentCity,
    CityList
  },
  mounted(){
    // 初始化
    this.scroll = new BetterScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="scss" scoped></style>
