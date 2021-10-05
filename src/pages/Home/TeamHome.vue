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
      <TeamCard
        :imgsrc="person_image"
        :name="person_name"
        :designation="person_designation"
        :detail="person_detail"
      ></TeamCard>
    </div>
  </div>
</template>

<script>
import TeamCard from "../../UI/TeamCard.vue";
export default {
  components: { TeamCard },
  data() {
    return {
      person_image: "https://i.ibb.co/yQgh3VN/Rectangle-25.png",
      person_name: "Manas Mishra",
      person_designation: "Web Dev Head",
      person_detail:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    };
  },
};
</script>

<style scoped>
@import "./css/TeamHome/teamhome.css";
</style>