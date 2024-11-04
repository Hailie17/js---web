<template>
  <div class="detail-wrapper">
    <detail-name :name="name"></detail-name>
    <detail-stars :starNum="starNum" :score="score"></detail-stars>
  </div>
</template>

<script>
import DetailName from './Sub/Name.vue'
import DetailStars from './Sub/Stars.vue'
export default {
  name: '',
  components: {
    DetailName,
    DetailStars
  },
  props: {
    name: String,
    starNum: Number,
    score: String
  }
}
</script>

<style lang="scss" scoped></style>
