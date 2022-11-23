<template>
  <div>
    <h1>Posts Publicados</h1>    
    
    <p v-if="showLoadingMessage">Cargando...</p>
   
    <div v-for="post in posts" :key="post.id">
      <router-link :to="`/post/${post.id}`">
        <h2>{{ post.title }}</h2>
      </router-link>
      <p>{{ post.body }}</p> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    showLoadingMessage() {
      return this.$store.state.posts.length == 0;
    }
  },
  methods: {},
  async mounted() {
    await this.$store.dispatch('fetchPosts');
  },
};
</script>