<template>
  <h2>Posts sobre {{ category }}</h2>
  <ul>
    <li v-for="post in filteredPosts" :key="post.id">sla:{{ post.title }}</li>
  </ul>
</template>

<script>
export default {
  inject: ['posts'],
  created() {
    this.category = this.$route.params.categoryName
    this.filterPosts(this.category)
    console.log(this.filteredPosts)
  },
  data() {
    return {
      category: '',
      filteredPosts: [],
    }
  },
  methods: {
    filterPosts(category) {
      // corrigir aqui. ta salvando um array dentro de outro array
      //o filteredPosts é um array que tem 1 el, que dentro tem 4
      this.filteredPosts.push(this.posts.filter((post) => post.category === category))
    },
  },
}
</script>
