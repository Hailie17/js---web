<template>
  <div class="view-item">
    <router-link :to="{path: '/detail', query: {field: 'view', id: data.id}}"></router-link>
  </div>
</template>
