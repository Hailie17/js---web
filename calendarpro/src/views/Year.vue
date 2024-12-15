<template>
  <div class="container">year page</div>
</template>

<script>
import getDay from '@/services'
import { onMounted } from 'vue'

export default {
  name: 'YearPage',
  setup(){
    onMounted(()=> {
      getDay('year', '2024')
    })
  }
}
</script>

<style lang="scss" scoped></style>