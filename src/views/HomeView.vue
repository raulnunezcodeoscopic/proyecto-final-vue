<template>
  <div>
    <h1>Posts Publicados</h1>    
    <transition name="slide-fade">
      <p v-if="showLoadingMessage">Cargando...</p>
    </transition>
    <section class="w-100 p-4 d-flex justify-content-center pb-4">
      <div class="list-group custom-width">
        <a :href="'/post/' + post.id" class="list-group-item list-group-item-action flex-column align-items-start" v-for="post in posts" :key="post.id">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">{{ post.title }}</h5>
          </div>
          <p class="mb-1">{{ post.body }}</p>
        </a>
      </div>
    </section>
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
<style scoped>
    
    .custom-width {
        width: 52rem;
    }
    .slide-fade-enter-active {
      transition: all 0.3s ease-out;
    }

    .slide-fade-leave-active {
      transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
      transform: translateX(20px);
      opacity: 0;
    }

</style>