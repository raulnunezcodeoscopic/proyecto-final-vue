<template>
  <div>
    <h1 v-if="title">{{ title }}</h1>
    <p v-if="body">{{ body }}</p>
  </div>
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
