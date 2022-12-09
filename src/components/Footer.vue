<template>
  <footer class="bg-primary">
    <div class="container">
      <div class="row pt-4">
        <div class="col">
          <h2 class="text-secondary">Contacto</h2>

          <p class="text-secondary">Siguenos</p>
          <ul class="row">
            <li class="col-1">
              <a href="https://www.facebook.com/TransporteCasablanca"
                ><i class="fa-brands fa-facebook"></i
              ></a>
            </li>
            <li class="col-1">
              <a href="https://www.instagram.com/transportecasablancape/"
                ><i class="fa-brands fa-instagram"></i
              ></a>
            </li>
          </ul>
        </div>
        <div class="col">
          <h2 class="text-secondary">Destinos</h2>

          <ul v-for="destino in destinos" :key="destino.id">
            <li class="text-secondary">{{ destino.lugar }}</li>
          </ul>
        </div>
        <div class="col">
          <h2 class="text-secondary">Servicios</h2>
          <ul v-for="servicio in servicios" :key="servicio.id">
            <li class="text-secondary">{{ servicio.servi }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bg-secondary">
      <p class="text-center copy m-0 py-3">© 2022 Transporte Casa Blanca</p>
    </div>
  </footer>
</template>

<script>
import { destinos, servicios } from "./data";
export default {
  name: "FooterComponents",
  data() {
    return {
      destinos,
      servicios,
    };
  },
};
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
  li {
    list-style: none;
    a {
      text-decoration: none;
      color: #fff;
    }
  }
}

.copy{
  font-size: 20px;
}
</style>