<template>
  <div class="container">
    <day-card :data="dayData"></day-card>
    <day-list :data="dayData"></day-list>
  </div>
</template>

<script>
import getDay from '@/services'
import {onMounted, computed} from 'vue'
import {useStore} from 'vuex'
import {getNowDate} from '@/libs/utils'

import DayCard from '@/components/DayPage/Card.vue'
import DayList from '@/components/DayPage/List'

export default {
  name: 'DayPage',
  components: { DayCard, DayList },
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