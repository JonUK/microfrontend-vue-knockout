<template>
  <Header />
  <div class="router-container">
    <router-view></router-view>
  </div>
</template>

<script>

import Header from './components/Header';

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style scoped>
  .router-container {
    padding-top: 56px; // Take into account the fixed header
  }
</style>
