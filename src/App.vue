<template>
  <NavBar />
  <router-view />
  <FooterComponent />
  <FabComponent />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  components: {
    NavBar: defineAsyncComponent(() => import("@/components/NavBar.vue")),
    FooterComponent: defineAsyncComponent(() =>
      import("@/components/Footer.vue")
    ),
    FabComponent: defineAsyncComponent(() => import('@/components/Fab.vue'))
  },
};
</script>

<style lang="scss">
</style>
