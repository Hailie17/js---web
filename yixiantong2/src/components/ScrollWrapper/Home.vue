<template>
  <div class="container">
    <common-header :title="title"></common-header>
    <city-scroll-wrapper></city-scroll-wrapper>
  </div>
</template>

<script>
import CommonHeader from '@/components/Header/Common.vue'
import CityScrollWrapper from '@/components/ScrollWrapper/City.vue'

export default {
  name: 'Home',
  components: {
    CommonHeader,
    CityScrollWrapper
  }
}
</script>

<style lang="scss" scoped></style>