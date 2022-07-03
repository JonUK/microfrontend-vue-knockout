<template>
  <div ref="mount" />;
</template>

<script>
import { mount } from 'marketing/MarketingApp';
import router, { history } from '../router';

export default {
  name: "MarketingApp",
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
          console.log('onNavigate called from marketing app', nextPathname);
          history.push(nextPathname);
        }
      }
    });

    this.onParentNavigate = onParentNavigate;
  },
  unmounted() {
    console.log('The MarketingApp component has been unmounted');
  }
}
</script>

<style scoped>

</style>
