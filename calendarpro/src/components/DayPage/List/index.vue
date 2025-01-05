<template>
  <div class="day-list">
    <list-item title="当前年月" :content="data['year-month']"></list-item>
    <list-item title="今年属性" :content="data.animalsYear"></list-item>
    <list-item title="农历年名" :content="data.lunaYear"></list-item>
    <list-item title="适宜事件" :content="data.suit"></list-item>
    <list-item title="避免事件" :content="data.avoid"></list-item>
  </div>
</template>

<script>
import ListItem from './Item.vue'

export default {
  name: 'DayList',
  props: {
    data: Object
  },
  components: {
    ListItem
  }
}
</script>

<style lang="scss" scoped>
.day-list {
  padding: .15rem;
  box-sizing: border-box;
}
</style>