<template>
  <ListaLayout />
</template>

<script>

import {defineAsyncComponent} from 'vue'

export default {
  components:{
    ListaLayout: defineAsyncComponent(()=> import('@/layouts/servicios/ListaLayout.vue'))
  }
}
</script>

<style>

</style>