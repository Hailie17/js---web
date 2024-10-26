<template>
  <div class="city-item">
    <span class="city">{{ cityInfo.cityName }}</span>
  </div>
</template>

<script>
export default {
  name: 'CityListSub',
  props: {
    cityInfo: Object,
  }
}
</script>

<style lang="scss" scoped></style>
