<template>
  <div class="view-item">
    <router-link :to="{path: '/detail', query: {field: 'view', id: data.id}}">
      <div class="img">
        <img :src="data.img" :alt="data.name" class="view-img">
      </div>
      <div class="info">
        <h1 class="title">{{data.name}}</h1>
        <p class="stars">
          <span class="score">{{data.score}}</span>
        </p>
        <p class="others">
          <span class="item">
            <span class="price">￥ {{data.default_price}}</span>
            <span class="item">{{data.city_name}}</span>
          </span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script></script>

<style lang="scss" scoped></style>
