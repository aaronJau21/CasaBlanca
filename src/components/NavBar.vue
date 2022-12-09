<template>
  <nav class="navbar navbar-expand-lg bg-primary">
    <div class="container">
      <router-link class="navbar-brand text-secondary" to="/"
        ><img src="@/assets/logo.jpg" alt=""
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link
              class="nav-link active text-dark"
              aria-current="page"
              to="/"
              >Inicio</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-dark" to="/nosotros"
              >Nosotros</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link text-dark" to="/flota"
              >Servicio</router-link
            >
          </li>
          <li>
            <router-link class="nav-link text-dark" to="/destinos"
              >Destinos</router-link
            >
          </li>
          <li>
            <RouterLink class="nav-link text-dark" to="/contactos">Contactos</RouterLink>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <button class="btn btn-warning login" type="submit">
            <i class="fa-solid fa-user"></i>
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
img {
  height: 90px;
}

.login:hover {
  background-color: #adb5bd;
  color: #fff;
  border: none;
}

li {
  a:hover {
    background-color: #adb5bd;
  }
}
</style>