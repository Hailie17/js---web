<template>
  <div class="card-wraper">
    <div class="card">
      <div class="header">
        <span class="weekday">{{ data.weekday }}</span>
      </div>
      <h1 class="text lunar">{{ data.lunar }}</h1>
      <h2 class="text date">{{ data.date }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DayCard',
  props : {
    data: Object
  }
}
</script>

<style lang="scss" scoped>

</style>