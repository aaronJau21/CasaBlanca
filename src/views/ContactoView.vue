<template>
  <FormLayouts />
</template>

<script>
import {defineAsyncComponent} from 'vue'
export default {
  components:{
    FormLayouts: defineAsyncComponent(() => import('@/layouts/Contacto/FormLayouts.vue'))
  }
}
</script>

<style>

</style>