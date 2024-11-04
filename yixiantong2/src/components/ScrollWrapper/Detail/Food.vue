<template>
  <div class="detail-wrapper">
    <detail-name :name="name"></detail-name>
    <detail-stars :starNum="starNum" :score="score"></detail-stars>
    <detail-address :address="address"></detail-address>
    <detail-price :price="price"></detail-price>
  </div>
</template>

<script>
import DetailName from './Sub/Name.vue'
import DetailStars from './Sub/Stars.vue'
import DetailAddress from './Sub/Address.vue'
import DetailPrice from './Sub/Price.vue'
export default {
  name: '',
  components: {
    DetailName,
    DetailStars,
    DetailAddress,
    DetailPrice
  },
  props: {
    name: String,
    starNum: Number,
    score: String,
    address: String,
    price: Number
  }
}
</script>

<style lang="scss" scoped></style>
