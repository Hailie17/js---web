<template>
  <div class="container">month page</div>
</template>

<script>
import getDay from '@/services'
import { onMounted } from 'vue'

export default {
  name: 'MonthPage',
  setup() {
    onMounted(() => {
      getDay('month', '2020-12')
    })
  }
}
</script>

<style lang="scss" scoped></style>