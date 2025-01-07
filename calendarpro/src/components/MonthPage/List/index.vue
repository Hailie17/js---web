<template>
  <div class="">
    <ul class="holiday-list">
      <list-item v-for="(item, index) of data" :key="index" :item="item"></list-item>
    </ul>
  </div>
</template>

<script>
import ListItem from './Item.vue'
export default {
  name: 'CardList',
  components: {
    ListItem
  },
  // 111
  props: {
    data: Array
  }
}

</script>

<style lang="scss" scoped></style>