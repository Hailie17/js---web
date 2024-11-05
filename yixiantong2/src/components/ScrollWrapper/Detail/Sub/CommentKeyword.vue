<template>
  <div class="comment-bd">
    <detial-title  icon="icon-haoping" title="评论关键词"></detial-title>
    <div class="comment-keyword">
      <span class="keyword" v-for="(item,index) of commentKeyword" :key="index">
        {{itme}}
      </span>
    </div>
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
