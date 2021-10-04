<template>
  <div class="speakersHome">
    <!-- Speakers title -->
    <div class="speaker__title">
      <!-- About title span -->
      <span class="speaker__title__span">Speaker</span>
      <!-- about title logo img -->
      <img
        src="https://i.ibb.co/M8W8tt2/TEDx-Black-Transparent-004.png"
        alt="logo_about"
      />
      <!-- About year span -->
      <span class="about__year__span">2021</span>
    </div>
    <!-- Speakers Image Carousel -->
    <div class="speaker_carousel">
      <img
        src="https://i.ibb.co/BzpLjS9/next-arrow-2340944-1956282-2.png"
        alt="..."
        class="carousel_left"
        @click="leftMove()"
      />
      <Card
        :imgsrc="imgsrc1"
        :name="name1"
        :nameinfo="nameinfo1"
        :namedetail="namedetail1"
        v-if="shownext == 1"
      ></Card>
      <Card
        :imgsrc="imgsrc2"
        :name="name2"
        :nameinfo="nameinfo2"
        :namedetail="namedetail2"
        v-if="shownext == 2"
      ></Card>
      <img
        src="https://i.ibb.co/BzpLjS9/next-arrow-2340944-1956282-2.png"
        alt="..."
        class="carousel_right"
        @click="rightMove()"
      />
    </div>
  </div>
</template>

<script>
import Card from "../../UI/Card.vue";
export default {
  components: { Card },
  data() {
    return {
      shownext: 1,
      numberOfSpeakers: 2,

      imgsrc1: "https://i.ibb.co/FzHWkzQ/Rectangle-31.png",
      name1: "Sunny Kabrawala",
      nameinfo1: "Founder of StarLabSurat",
      namedetail1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",

      imgsrc2: "https://i.ibb.co/FzHWkzQ/Rectangle-31.png",
      name2: "Denna",
      nameinfo2: "Founder of DanceClub",
      namedetail2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    };
  },
  methods: {
    rightMove() { 
      if (this.shownext <= this.numberOfSpeakers) {
        this.shownext++;
      }
      if (this.shownext > this.numberOfSpeakers) {
        this.shownext = 1;
      }
    },
    leftMove() {
      if (this.shownext >= 1) {
        this.shownext--;
      }
      if(this.shownext == 0){
        this.shownext = this.numberOfSpeakers;
      }
    },
  },
};
</script>

<style scoped>
@import "./css/SpeakerHome/speakerhome.css";
</style>
