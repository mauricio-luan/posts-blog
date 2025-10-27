<template>
  <p v-if="!postExists">Post não encontrado.</p>
  <div v-else>
    <h3>{{ post.title }}</h3>
    <p>{{ post.category }}</p>
    <p>{{ post.content }}</p>
  </div>
  <button @click="$router.back()">Voltar</button>
</template>

<script>
export default {
  inject: ['posts'],

  created() {
    this.slug = this.$route.params.slug
  },

  data() {
    return {
      slug: '',
    }
  },

  computed: {
    post() {
      return this.posts.find((p) => p.slug === this.slug)
    },
    postExists() {
      return this.posts.find((p) => p.slug === this.slug) ? true : false
    },
  },
}
</script>
