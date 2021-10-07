<template>
  <div class="register">
    <Header></Header>
    <!-- Register Main part -->
    <div class="register_div">
      <div class="register__form__div">
        <!-- register form -->
        <form class="register_form">
          <!-- Name -->
          <input type="text" placeholder="Name" />
          <!-- Email -->
          <input type="text" placeholder="Email" />
          <!-- Password -->
          <input type="text" placeholder="Password" />
          <!-- Confirm Password -->
          <input type="text" placeholder="Confirm Password" />
          <!-- Register Button -->
          <button class="btn">Register</button>
        </form>
      </div>
      <div class="register__img__div">
        <img src="https://i.ibb.co/jW9dk4M/Mobile-login-pana-1.png" alt="">
      </div>
    </div>
  </div>
</template>


<script>
import Header from "../../components/Header/Header.vue";
export default {
  name: "register",
  components: {
    Header,
  },
};
</script>

<style scoped>
@import "./register.css"
</style>