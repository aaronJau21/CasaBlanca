<template>
  <div class="container pt-5">
    <FormLayouts />
  </div>
  <CaracterLayouts />
  
  <div class="bg-danger">
    <Especialidades />
  </div>
</template>

<script>

import {defineAsyncComponent} from 'vue'

export default {
  name: "HomeView",
  components:{
    FormLayouts: defineAsyncComponent(() => import('@/layouts/home/FormLayouts.vue')),
    CaracterLayouts: defineAsyncComponent(() => import('@/layouts/home/CaracterLayouts.vue')),
    Especialidades: defineAsyncComponent(() => import('@/layouts/home/EspecialidadesLayouts.vue'))
  }
};
</script>
