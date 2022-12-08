<template>
  <NavBar />
  <router-view />
  <FooterComponent />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    NavBar: defineAsyncComponent(() => import("@/components/NavBar.vue")),
    FooterComponent: defineAsyncComponent(() =>
      import("@/components/Footer.vue")
    ),
  },
};
</script>

<style lang="scss">
</style>
