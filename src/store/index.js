import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import contactModule from './contact'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },
  getters: {
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    }
  },
  actions: {
    async fetchPosts({ commit }) {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      commit('setPosts', response.data);
    }
  },
  modules: {
    contactModule
  }
})
