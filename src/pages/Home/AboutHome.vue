// This vue file if for about section, which is being shown in the home page of the website.

<template>
  <div class="aboutHome">
    <!-- top about title -->
    <div class="about__title">
      <!-- About title span -->
      <span class="about__title__span">About</span>
      <!-- about title logo img -->
      <img
        src="https://i.ibb.co/RDKp156/TEDx-White-Transparent-003.png"
        alt="logo_about"
      />
      <!-- About year span -->
      <span class="about__year__span">2021</span>
    </div>
    <!-- About main text section -->
    <div class="aboutHome__mainSection">
      <!-- Main title -->
      <div class="mainsection__title">
        <span class="first_name">Ignite</span>
        <span class="second_name">Connect</span>
        <span class="third_name">Inspire</span>
      </div>

      <!-- Main title text -->
      <div class="mainsection__text">
        <span
          >Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </span>
      </div>
    </div>
    <!-- cards -->
    <div class="abouthome__Cards">
      <!-- card -->
      <div class="card first-card">
        <!-- Black overlay over card -->
        <div class="card__overlay">
          <!-- card text -->
          <div class="card_text">
            <div class="card_top_text"><span>Speakers</span></div>
            <div class="card_main_text"><span>Apply to Speak</span></div>
            <div class="card_btn">
              <button class="btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <!-- second card -->
      <div class="card second-card">
        <!-- Black overlay over card -->
        <div class="card__overlay">
          <!-- card text -->
          <div class="card_text">
            <div class="card_top_text"><span>Speakers</span></div>
            <div class="card_main_text"><span>Apply to Speak</span></div>
            <div class="card_btn">
              <button class="btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <!-- third card -->
      <div class="card third-card">
        <!-- Black overlay over card -->
        <div class="card__overlay">
          <!-- card text -->
          <div class="card_text">
            <div class="card_top_text"><span>Speakers</span></div>
            <div class="card_main_text"><span>Apply to Speak</span></div>
            <div class="card_btn">
              <button class="btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      first: "https://i.ibb.co/1LKx8TC/Rectangle-5.png",
      second: "https://i.ibb.co/8YS24Bd/Rectangle-7.png",
      third: "https://i.ibb.co/nsKXqWH/Rectangle-6.png",
    };
  },
};
</script>

<style scoped>
@import "./css/AboutHome/aboutHome.css";
@import "./css/AboutHome/aboutHomeCards.css"

</style>