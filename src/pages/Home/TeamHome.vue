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
      <img
        src="https://i.ibb.co/QbyC4kS/37-376889-right-arrow-arrow-icon-white-png-2.png"
        alt="..."
        class="team_left"
        @click="moveLeft()"
      />
      <TeamCard
        key="0"
        v-if="isIndex==0"
        :imgsrc="cardDetails[0].person_image"
        :name="cardDetails[0].person_name"
        :designation="cardDetails[0].person_designation"
        :detail="cardDetails[0].person_detail"
      ></TeamCard>
      <TeamCard
        key="1"
        v-if="isIndex == 1"
        :imgsrc="cardDetails[1].person_image"
        :name="cardDetails[1].person_name"
        :designation="cardDetails[1].person_designation"
        :detail="cardDetails[1].person_detail"
      ></TeamCard>
      <img
        src="https://i.ibb.co/7JR1rqg/37-376889-right-arrow-arrow-icon-white-png-1.png"
        alt="..."
        class="team_right"
        @click="moveRight()"
      />
    </div>
  </div>
</template>

<script>
import TeamCard from "../../UI/TeamCard.vue";
export default {
  components: { TeamCard },
  data() {
    return {
      teamMembers: 2,
      isIndex: 0,
      cardDetails: [
        {
          person_image: "https://i.ibb.co/yQgh3VN/Rectangle-25.png",
          person_name: "Manas Mishra",
          person_designation: "Web Dev Head",
          person_detail:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
          person_image: "https://i.ibb.co/yQgh3VN/Rectangle-25.png",
          person_name: "Manas",
          person_designation: "Web Dev Head",
          person_detail:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
      ],
    };
  },
  methods: {
    moveLeft(){
      if(this.isIndex >= 0){
        this.isIndex--;
      }
      if(this.isIndex < 0){
        this.isIndex = this.teamMembers-1;
      }
    },
    moveRight(){
      if(this.isIndex <= this.teamMembers-1){
        this.isIndex++;
      }
      if(this.isIndex >= this.teamMembers){
        this.isIndex = 0;
      }
    }
  },
};
</script>

<style scoped>
@import "./css/TeamHome/teamhome.css";
</style>