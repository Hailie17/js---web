<template>
  <div class="detail-wrapper">
    <detail-name :name="name"></detail-name>
    <detail-stars :starNum="starNum" :score="score"></detail-stars>
    <detail-address :address="address"></detail-address>
  </div>
</template>

<script>
import DetailName from './Sub/Name.vue'
import DetailStars from './Sub/Stars.vue'
import DetailAddress from './Sub/Address.vue'
export default {
  name: '',
  components: {
    DetailName,
    DetailStars,
    DetailAddress
  },
  props: {
    name: String,
    starNum: Number,
    score: String,
    address: String
  }
}
</script>

<style lang="scss" scoped></style>
