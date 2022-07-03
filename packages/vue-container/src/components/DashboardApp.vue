<template>
  <div ref="mount" />;
</template>

<script>
import { mount } from 'dashboard/DashboardApp';
import router, { history } from '../router';

export default {
  name: "DashboardApp",
  data() {
    return {
      onParentNavigate: null
    }
  },
  watch:{
    $route(to) {
      this.onParentNavigate({ pathname: to.path })
    }
  },
  mounted() {
    const { onParentNavigate } = mount(this.$refs.mount, {
      initialPath: history.location,
      onNavigate: ({ pathname: nextPathname }) => {
        const currentLocation = history.location;

        if (currentLocation !== nextPathname) {
          console.log('onNavigate called from dashboard app', nextPathname);
          history.push(nextPathname);
        }
      }
    });

    this.onParentNavigate = onParentNavigate;
  }
}
</script>

<style scoped>

</style>
