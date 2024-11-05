<template>
  <div class="comment-bd">
    <detial-title></detial-title>
  </div>
</template>

<script>
import DetailTitle from './Title.vue'
export default {
  name:'DetialCommentKeyword',
  components: {
    DetailTitle
  },
  props: {
    commentKeyword: Array
  }
}
</script>
