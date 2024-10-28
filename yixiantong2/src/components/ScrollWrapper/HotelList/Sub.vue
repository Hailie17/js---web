<template>
  <div class="hotel-item">
    <router-link :to="{path: '/detail',query: {field: 'hotel', id: data.id}}">
      <div class="img">
        <img class="hotel-img" :src="data.img" :alt="data.name">
      </div>
      <div class="info">
        <h1 class="title">{{data.name}}</h1>
        <p class="score">{{data.score}}</p>
        <p class="area">{{data.area}}</p>
        <p class="others">
          <span class="item">
            ￥<span class="price">{{data.default_price}}</span>
          </span>
          <span class="item">{{data.city_name}}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HotelListSub',
  props: {
    data: Object
  }
}
</script>

<style lang="scss" scoped></style>
