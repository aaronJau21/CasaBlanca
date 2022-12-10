<template>
  <DestinosLayout />
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    DestinosLayout: defineAsyncComponent(() =>
      import('@/layouts/destinos/DestinosLayout.vue')
    ),
  },
};
</script>

<style>
</style>