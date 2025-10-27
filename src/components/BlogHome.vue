<template>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <p>
        <router-link :to="postDetail(post.slug)">
          {{ post.title }}
        </router-link>
        <br />
        <router-link :to="categoryView(post.category)">
          {{ post.category }}
        </router-link>
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  inject: ['posts'],
  methods: {
    postDetail(postSlug) {
      return {
        name: 'post-detail',
        params: { slug: postSlug },
      }
    },
    categoryView(postCategory) {
      return {
        name: 'category-view',
        params: { categoryName: postCategory },
      }
    },
  },
}
</script>

<style scoped>
ul {
  list-style: none;
}
</style>
