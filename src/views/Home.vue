<template>
  <div class="home">
    <HomePage></HomePage>
    <AboutHome></AboutHome>
    <SpeakersHome></SpeakersHome>
    <ThemeHome></ThemeHome>
    <EventsHome></EventsHome>
    <TeamHome></TeamHome>
    <ContactHome></ContactHome>
  </div>
</template>

<script>
import AboutHome from '../pages/Home/AboutHome.vue';
import ContactHome from '../pages/Home/ContactHome.vue';
import EventsHome from '../pages/Home/EventsHome.vue';
import HomePage from '../pages/Home/Home.vue';
import SpeakersHome from '../pages/Home/SpeakersHome.vue';
import TeamHome from '../pages/Home/TeamHome.vue';
import ThemeHome from '../pages/Home/ThemeHome.vue';
export default {
  name: "Home",
  components: {
    HomePage,
    AboutHome,
    SpeakersHome,
    ThemeHome,
    EventsHome,
    TeamHome,
    ContactHome,
  },
};
</script>

<style scoped>
.home{
  width: 100%;
  height: 100%;
}
</style>
