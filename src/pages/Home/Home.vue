<template>
  <Header></Header>
  <!-- Homepage starts -->
  <div class="homepage flex">
    <!-- logo  -->
    <div class="homepage__logo">
      <img
        src="https://i.ibb.co/M8W8tt2/TEDx-Black-Transparent-004.png"
        alt="logo"
      />
    </div>
    <!-- Tagline -->
    <div class="homepage__tagline">
      <span>The artistic approach towards modern technology</span>
    </div>
    <button @click="$router.push('register')" class="btn btn_register">Register</button>
  </div>
</template>

<script>
import Header from "../../components/Header/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style scoped>
@import "./css/Home/home.css";


</style>