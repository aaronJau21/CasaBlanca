<template>
  <div class="container d-flex justify-content-between mt-5">
    <ul v-for="item in caract" :key="item.id">
      <li>
        <i :class="item.img" class="d-flex justify-content-center text-primary mb-2"></i>
        <p>{{ item.text }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { caracteristicas } from "./data/caracteristicas";

export default {
  data() {
    return {
      caract: caracteristicas,
    };
  },
};
</script>

<style lang="scss" scoped>
ul{
    li{
        list-style: none;
        i{
            font-size: 55px;
        }
    }
}
</style>