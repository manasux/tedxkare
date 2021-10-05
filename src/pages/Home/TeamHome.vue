<template>
  <div class="teamhome">
    <div class="team__title">
      <!-- About title span -->
      <span class="team__title__span">Team</span>
      <!-- about title logo img -->
      <img
        src="https://i.ibb.co/RDKp156/TEDx-White-Transparent-003.png"
        alt="logo_about"
      />
      <!-- About year span -->
      <span class="team__year__span">2021</span>
    </div>
    <div class="team__card">
      <TeamCard></TeamCard>
    </div>
  </div>
</template>

<script>
import TeamCard from "../../UI/TeamCard.vue";
export default {
  components: { TeamCard },
};
</script>

<style scoped>
@import "./css/TeamHome/teamhome.css";
</style>