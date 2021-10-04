<template>
  <div class="eventshome">
    <!-- Events Title -->
    <div class="event__title">
      <!-- About title span -->
      <span class="event__title__span">Events</span>
      <!-- about title logo img -->
      <img
        src="https://i.ibb.co/RDKp156/TEDx-White-Transparent-003.png"
        alt="logo_about"
      />
      <!-- About year span -->
      <span class="event__year__span">2021</span>
    </div>
    <!-- Events program -->
    <div class="event__program">
      <!-- First Event (Speakers Speech) -->
      <div class="first_event">
        <div class="black_overlay">
          <div class="event_name first">
            <span>Speakers Speech</span>
          </div>
          <button>Learn More</button>
        </div>
      </div>
      <div class="second_event">
        <div class="black_overlay">
          <div class="event_name second">
            <span>Research Paper</span>
          </div>
          <button>Learn More</button>
        </div>
      </div>
      <div class="third_event">
        <div class="black_overlay">
          <div class="event_name third">
            <span>Workshop</span>
          </div>
          <button>Learn More</button>
        </div>
      </div>
      <div class="fourth_event">
        <div class="black_overlay">
          <div class="event_name fourth">
            <span>Hackathon</span>
          </div>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import "./css/EventsHome/eventshome.css"
</style>