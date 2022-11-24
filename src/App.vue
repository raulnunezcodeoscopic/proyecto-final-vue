<template>
  <div id="app">
    <custom-navbar />
    <div class="p-5 text-center bg-light">
      <router-view />
    </div>
    <custom-footer />
  </div>
</template>

<script>
import CustomNavbar from '@/components/CustomNavbar.vue'
import CustomFooter from '@/components/CustomFooter.vue'
export default {
  components: {CustomNavbar, CustomFooter},
  setup() {
  }
}
</script>

<style>
nav {
  padding: 30px;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
