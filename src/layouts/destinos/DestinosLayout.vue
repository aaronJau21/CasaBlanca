<template>
  <ul>
    <li v-for="destino in destinos" :key="destino.id">
      <p>{{ destino.lugar }}</p>
      
    </li>
  </ul>
  <img v-for="destino in destinos" :key="destino.id" :src="destino.url" :alt="destino.lugar" />
</template>

<script>
import { destinos } from "./data";

export default {
  data() {
    return {
      destinos,
    };
  },
};
</script>

<style>
</style>