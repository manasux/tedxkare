<template>
  <div class="header">
    <!-- image logo -->
    <div class="img_logo">
      <img
        src="https://i.ibb.co/M8W8tt2/TEDx-Black-Transparent-004.png"
        alt="logo"
      />
    </div>
    <!-- nav -->
    <nav>
      <!-- <h1>{{ windowWidth }}</h1> -->
      <ul v-if="windowWidth >=  900">
        <li>Home</li>
        <li>About</li>
        <li>Speakers</li>
        <li>Theme</li>
        <li>Events</li>
        <li>Team</li>
        <li>Contact</li>
      </ul>
    </nav>
    <!-- hamburger menu -->
    <div @click="toggleNavbar()" v-if="windowWidth < 900" class="responsive__logo">
      <i class="fas fa-bars"></i>
    </div>
    <ResponsiveHeader v-if="windowWidth < 900 && toggle"></ResponsiveHeader>
    
  </div>
</template>

<script>
import ResponsiveHeader from "./ResponsiveHeader.vue";
export default {
  name: "Header",
  components: { ResponsiveHeader },
  data() {
    return {
      isMobile: false,
      windowWidth: window.innerWidth,
      txt: "",
      toggle: false,
    };
  },


  // watch: {
  //   windowHeight(newWidth, oldWidth) {
  //     this.txt = `it changed to ${newWidth} from ${oldWidth}`;
  //   },
  // },

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },

  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
      this.enterMobileView();
    },
    enterMobileView() {
      if (this.windowWidth < 900) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
    toggleNavbar(){
      this.toggle = !this.toggle;
    }
  },
};
</script>

<style scoped>
@import "./Header.css";
@import "./responsiveness.css";
</style>