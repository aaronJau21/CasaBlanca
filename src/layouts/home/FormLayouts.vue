<template>
  <div class="row">
    <div class="col-5">
      <img src="@/assets/perfil.jpg" alt="" class="img-fluid" />
    </div>
    <div class="col align-self-center">
      <p class="h5">Comunicate con nosotros</p>
      <form action="" class="">
        <div class="row mb-4">
          <div class="col-6">
            <input type="text" class="form-control" placeholder="Nombre" />
          </div>
          <div class="col-6">
            <input type="text" class="form-control" placeholder="Apellido" />
          </div>
        </div>

        <div class="row row mb-4">
          <div class="col-6">
            <input type="text" class="form-control" placeholder="Correo" />
          </div>
          <div class="col-6">
            <input type="text" class="form-control" placeholder="Celular" />
          </div>
        </div>

        <select class="form-select mb-4">
          <option value="1">Transporte</option>
          <option value="2">Translada tus encomiendas</option>
        </select>

        <div class="d-flex justify-content-center">
          <button class="btn btn-primary">Enviar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>