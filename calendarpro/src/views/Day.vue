<template>
  <div class="container">day page</div>
</template>

<script>
import getDay from '@/services'
import {onMounted} from 'vue'

export default {
  name: 'DayPage',
  setup() {
    onMounted(()=> {
      getDay('day', '2024-12-14')
  })
  }
}
</script>

<style lang="scss" scoped></style>