<template>
  <span class="badge badge-success">container | Vue.js</span>
  <p>
    <!-- use the router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will render an `<a>` tag with the correct `href` attribute -->
    <router-link to="/dashboard">Go to Home</router-link>
    &nbsp;
    <router-link to="/dashboard/about">Go to About</router-link>
  </p>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>

</style>
