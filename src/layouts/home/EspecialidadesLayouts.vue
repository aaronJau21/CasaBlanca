<template>
  <div class="container pb-5">
    <h2 class="d-flex justify-content-center py-4 text-primary2">Nuestros Servicios</h2>

    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div class="col">
        <div class="card">
          <img src="@/assets/transporte.jpg" class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title d-flex justify-content-center text-primary">Viaje Seguro</h5>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card">
          <img src="@/assets/encomiendas.jpg" class="card-img-top" alt="" />
          <div class="card-body">
            <h5 class="card-title d-flex justify-content-center text-primary">Entrega rápida</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h2{
  font-size: 50px;
}
h5{
  font-size: 30px;
}
</style>