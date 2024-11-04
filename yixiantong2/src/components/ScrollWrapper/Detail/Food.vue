<template>
  <div class="detail-wrapper">
    <detail-name :name="name"></detail-name>
  </div>
</template>

<script>
import DetailName from './Sub/Name.vue'
export default {
  name: '',
  components: {
    DetailName
  },
  props: {
    name: String
  }
}
</script>

<style lang="scss" scoped></style>
