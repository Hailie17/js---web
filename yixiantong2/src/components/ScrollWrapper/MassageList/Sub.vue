<template>
  <div class="massage-list">
    <router-link :to="{path: '/detail', query: {field: 'massage', id: data.id}}">
      <div class="img">
        <img :src="data.img" :alt="data.name" class="massage-img">
      </div>
      <div class="info">
        <h1 class="title">{{data.name}}</h1>
        <p class="stars">
          <span class="score">{{data.score}}分</span>
        </p>
        <p class="others">
          <span class="item">
            ￥<span class="price">{{data.default_price}}</span>元
          </span>
          <span class="item">{{data.city_name}}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import Stars from "@/components/ScrollWrapper/Sub/Stars.vue";
export default {
  name: 'MassageListSub',
  components: {
    Stars
  },
  props: {
    data: Object
  }
}
</script>

<style lang="scss" scoped></style>
