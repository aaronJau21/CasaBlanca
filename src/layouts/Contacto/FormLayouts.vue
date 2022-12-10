<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-6 align-self-center">
        <p class="h5">Comunicate con nosotros</p>
        <form action="" class="">
          <div class="row mb-4">
            <div class="col-6">
              <input type="text" class="form-control" placeholder="Nombre" />
            </div>
            <div class="col-6">
              <input type="text" class="form-control" placeholder="Número" />
            </div>
          </div>
          <div>
            <input type="text" placeholder="Dirección" class="form-control mb-4" />
            <select class="form-select">
              <option
                :value="destino.id"
                v-for="destino in destinos"
                :key="destino.id"
              >
                {{ destino.lugar }}
              </option>
            </select>
          </div>
          <select class="form-select my-4">
            <option value="1">Transporte</option>
            <option value="2">Translada tus encomiendas</option>
          </select>

          <div class="d-flex ">
            <button class="btn btn-primary">Enviar</button>
          </div>
        </form>
      </div>
      <div class="col-6">
        <h3>Ponte en <strong>Contacto</strong></h3>

        <p>
          Estamos dispuestos a atenderlos muy cordialmente, escríbanos un
          mensaje o comuníquese con nosotros en cualquiera de las formas que
          tenemos para estar en contacto.
        </p>

        <hr />

        <select>
          <option
            :value="destino.id"
            v-for="destino in destinos"
            :key="destino.id"
          >
            {{ destino.lugar }}
          </option>
        </select>

        <ul class="pt-4">
          <li class="">
            <i class="fa-solid fa-location-dot"></i
            ><strong>Sirección:</strong> Domicilio
          </li>
          <li class="">
            <i class="fa-solid fa-phone"></i><strong>Celular:</strong> +51 966
            389 211
          </li>
        </ul>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import { destinos } from "@/components/data";

export default {
  data() {
    return {
      destinos,
    };
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  padding: 0;

  li {
    padding-top: 10px;

    strong {
      padding-left: 10px;
    }

    i {
      color: #fff;
      padding: 5px;
      border: 2px solid;
      border-radius: 100%;
      border-color: #39ad32;
      background-color: #39ad32;
    }
  }
}
</style>