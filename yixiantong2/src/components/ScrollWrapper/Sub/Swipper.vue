<template>
  <div class="swiper-wrap">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) of picDatas" :pic="item" :key="index">
        <img class="swiper-img" :src="item" alt="">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  name: 'DetailSwiper',
  components: {
    swiper, swiperSlide
  },
  props: {
    picDatas: Array
  },
  data(){
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/assets/styles/mixins';
@import '~@/assets/styles/variables';
.swiper-wrap >>> .swiper-pagination-bullet-active{
  background-color: $defaultGreen;
}
.swiper-slide {
  height: 2rem;
}
.swiper-img {
  width: 100%;
  height: 100%;
}
</style>
