<template>
  <Home></Home>
</template>

<script>

import Home from "./pages/Home/Home.vue";

export default {
  components: { Home },
  
}
</script>

<style>
@import "./base.css";

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  width: 100vw;
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
}


</style>
