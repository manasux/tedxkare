<template>
  <Home></Home>
  <AboutHome></AboutHome>
  <SpeakersHome></SpeakersHome>
</template>

<script>
import Home from "./pages/Home/Home.vue";
import AboutHome from "./pages/Home/AboutHome.vue";
import SpeakersHome from './pages/Home/SpeakersHome.vue';

export default {
  components: { Home, AboutHome,SpeakersHome },
};
</script>

<style>
@import "./base.css";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  width: auto;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
}
</style>
