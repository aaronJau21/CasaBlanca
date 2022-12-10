<template>
  <div class="container my-5">
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col" v-for="destino in destinos" :key="destino.id">
        <div class="card" >
          <img :src="destino.url" class="card-img-top" :alt="destino.lugar" />
          <div class="card-body">
            <h5 class="card-title">{{ destino.lugar }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
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