<template>
    <section class="w-100 p-4 d-flex justify-content-center pb-4">
        <div class="custom-width">
            <h1 v-if="title">{{ title }}</h1>
            <p v-if="body">{{ body }}</p>
        </div>
  </section>
</template>

<script>
export default {
    name: 'PostView',
    data() {
        return {
            title: '',
            body: ''
        };
    },
    methods: {
        async getPost(id){
            if(this.$store.state.posts.length == 0)
                await this.$store.dispatch('fetchPosts');
            let post = this.$store.state.posts.find(o => o.id == id);
            if(post){
                this.title = post.title;
                this.body = post.body;
            }
        }
    },
    created(){
        this.getPost(this.$route.params.id)
    },
};
</script>
<style scoped>
    
    .custom-width {
        width: 52rem;
    }

</style>