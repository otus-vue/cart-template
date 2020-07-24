<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view />
  </div>
</template>

<script>
import Navigation from "./views/Navigation";
export default {
  components: {
    Navigation
  }
};
</script>
