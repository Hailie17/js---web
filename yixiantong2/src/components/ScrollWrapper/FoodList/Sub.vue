<template>
  <div class="food-item">
    <router-link :to="{path: '/detail', query: {field: 'food', id: data.id}}">
      <div class="img">
        <img :src="data.img" class="food-img" alt="data.name">
      </div>
      <div class="info">
        <h1 class="title">{{data.name}}</h1>
        <p class="stars">
          <stars></stars>
          <span class="price">￥ {{data.default_price}}/人</span>
        </p>
        <p class="keyword">
          <span class="badge" v-for="item of data.keyword">
            {{item}}
          </span>
        </p>
        <p class="other">
          <span class="item">{{data.field}}</span>
          <span class="item">{{data.area}}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import Stars from "@/components/ScrollWrapper/Sub/Stars.vue";
export default {
  name: 'FoodListSub',
  components: {
    Stars
  },
  props: {
    data: Object
  }
}
</script>

<style></style>
