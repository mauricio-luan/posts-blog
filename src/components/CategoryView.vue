<template>
  <p v-if="categoryExists">Nenhum post encontrado nesta categoria.</p>

  <template v-else>
    <h2>Posts sobre: {{ category }}</h2>
    <ul>
      <li v-for="post in filteredPosts" :key="post.id">
        <router-link :to="postDetail(post.slug)">{{ post.title }}</router-link>
      </li>
    </ul>
  </template>
</template>

<script>
export default {
  inject: ['posts'],

  created() {
    this.category = this.$route.params.categoryName
    this.filterPosts(this.category)
  },

  data() {
    return {
      category: '',
      filteredPosts: null,
    }
  },

  methods: {
    filterPosts(category) {
      const filteredPosts = this.posts.filter((post) => post.category === category)
      this.filteredPosts = filteredPosts
    },
    postDetail(postSlug) {
      return { name: 'post-detail', params: { slug: postSlug } }
    },
  },

  computed: {
    categoryExists() {
      return this.posts.find((c) => c.category === this.category) ? false : true
    },
  },

  watch: {
    $route(newParam) {
      this.filterPosts(newParam.params.categoryName)
    },
  },
}
</script>
