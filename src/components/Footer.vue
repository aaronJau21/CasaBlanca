<template>
  <footer class="bg-primary">
    <div class="container">
      <div class="row py-3">
        <div class="col">
          <h2>Contacto</h2>

          <p>Siguenos</p>
          <ul class="row">
            <li class="col-1">
              <router-link to="https://www.facebook.com/TransporteCasablanca"
                ><i class="fa-brands fa-facebook"></i
              ></router-link>
            </li>
            <li class="col-1">
              <router-link :to="insta"
                ><i class="fa-brands fa-instagram"></i
              ></router-link>
            </li>
          </ul>
        </div>
        <div class="col">destinos</div>
        <div class="col">Servicios</div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponents",

    data(){
        return{
            face: '',
            insta: 'https://www.instagram.com/transportecasablancape/'
        }
    }
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
</style>