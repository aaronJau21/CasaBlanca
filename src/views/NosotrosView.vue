<template>
  <PortadaLayout />
  <CaracteristicasLeyaut />
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "NosotrosView",
  components: {
    PortadaLayout: defineAsyncComponent(() =>
      import("@/layouts/nosotros/PortadaLayout.vue")
    ),
    CaracteristicasLeyaut: defineAsyncComponent(() => import('@/layouts/nosotros/CaracteristicasLeyaut.vue'))
  },
};
</script>

<style>
</style>