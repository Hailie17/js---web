<template>
  <div class="home-title">
    <p>{{title}}</p>
  </div>
</template>

<script>
export default {
  name: 'HomeTitle',
  props: {
    title: {
      type: String,
      default() {
        return '一线生活通'
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
