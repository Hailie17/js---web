<template>
  <div class="container">
    <day-card :data="dayData"></day-card>
  </div>
</template>

<script>
import getDay from '@/services'
import {onMounted, computed} from 'vue'
import {useStore} from 'vuex'
import {getNowDate} from '@/libs/utils'

import DayCard from '@/components/DayPage/Card.vue'

export default {
  name: 'DayPage',
  components: { DayCard },
  setup() {
    const store = useStore(),
          state = store.state
    onMounted(()=> {
      getDay(store, 'day', getNowDate('day'))
    })

    return {
      dayData: computed(() => state.dayData)
    }
  }
}
</script>

<style lang="scss" scoped></style>