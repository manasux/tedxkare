<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light font_nav">
        <a class="navbar-brand" href="#">
          <img
            src="https://i.ibb.co/x5V1dws/TEDx-Black.webp"
            alt="logo"
            class="header__logo__image"
          />
        </a>

      <button
        class="navbar-toggler bg-light"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse navbar_new" id="navbarSupportedContent">
        <div class="navbar-nav ml-auto">
          <router-link to="/" class="nav-item nav-link text-white"
            ><h6 class="nav_p">Home</h6></router-link
          >
          <router-link to="/About" class="nav-item nav-link text-white"
            ><h6 class="nav_p">About</h6></router-link
          >
          <router-link to="/Speakers" class="nav-link text-white"
            ><h6 class="nav_p">Speakers</h6></router-link
          >
          <router-link to="/Theme" class="nav-link text-white"
            ><h6 class="nav_p">Theme</h6></router-link
          >
          <router-link to="/Events" class="nav-link text-white"
            ><h6 class="nav_p">Events</h6></router-link
          >
          <router-link to="/Team" class="nav-link text-white"
            ><h6 class="nav_p">Team</h6></router-link
          >
          <router-link to="/Contact" class="nav-link text-white"
            ><h6 class="nav_p">Contact</h6></router-link
          >
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
#nav {
  width: 100vw;
  background-color: #000;
}
#nav {
  text-align: center;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav_p {
  font-family: 'Raleway', sans-serif !important;
  font-size: 15px;
}
.navbar__logo{
  margin-top: 1.3rem;
  width: 20%;
}
.header__logo__image {
  width: 80%;
}
.navbar_new{
  margin-top: 1.3rem;
}
</style>