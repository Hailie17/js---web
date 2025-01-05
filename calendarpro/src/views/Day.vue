<template>
  <div class="container">
    <error-tip v-if="errorCode" />
    <div v-else>
      <day-card :data="dayData"></day-card>
      <day-list :data="dayData"></day-list>
    </div>
  </div>
</template>

<script>
import getDay from '@/services'
import {onMounted, computed} from 'vue'
import {useStore} from 'vuex'
import {getNowDate} from '@/libs/utils'

import DayCard from '@/components/DayPage/Card.vue'
import DayList from '@/components/DayPage/List'
import ErrorTip from '@/components/ErrorTip'

export default {
  name: 'DayPage',
  components: { DayCard, DayList, ErrorTip },
  setup() {
    const store = useStore(),
          state = store.state
    onMounted(()=> {
      getDay(store, 'day', getNowDate('day'))
    })

    return {
      dayData: computed(() => state.dayData),
      errorCode: computed(() => store.state.errorCode)
    }
  }
}
</script>

<style lang="scss" scoped></style>