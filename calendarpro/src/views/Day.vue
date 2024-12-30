<template>
  <div class="container">day page</div>
</template>

<script>
import getDay from '@/services'
import {onMounted} from 'vue'
import {useStore} from 'vuex'

export default {
  name: 'DayPage',
  setup() {
    const store = useStore(),
          state = store.state
    onMounted(()=> {
      getDay(store, 'day', '2024-12-14')
  })
  }
}
</script>

<style lang="scss" scoped></style>