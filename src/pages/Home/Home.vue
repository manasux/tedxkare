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
    <button class="btn btn_register">Register</button>
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
/* @import "./home.css"; */

.homepage {
  width: 100%;
  height: 90%;
  background-image: url("https://i.ibb.co/MSN29Fz/background-image.png");
  background-size: 70% 100%;
  background-position: center;
  background-repeat: no-repeat;
  /* background */
}
.flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.homepage__logo {
  height: 8%;
  width: auto;
}
.homepage__logo > img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.homepage__tagline {
  width: 60%;
  font-size: 70px;
  text-align: center;
  font-family: var(--ff-roboto);
}
.homepage__tagline > span{
   text-transform: uppercase;
}
.btn {
  margin-top: 20px;
  width: 150px;
  height: 55px;
  font-size: 25px;
  font-family: var(--ff-raleway);
  font-weight: bold;
  border-radius: 3px;
  border: none;
  background-color: var(--primary-red);
  color: white;
  letter-spacing: 2px;
  cursor: pointer;
}
</style>