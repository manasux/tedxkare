<template>
  <div class="card_speaker">
    <!-- Card Image  -->
    <div class="card_img">
      <img :src="imgsrc" alt="..." />
    </div>
    <!-- Card Right Side for text -->
    <div class="card_text">
      <!-- Card Speaker info -->
      <div class="card_text_top">
        <span class="card_text_name">{{ name }}</span>
        <span class="card_text_name_detail">{{nameinfo}} </span>
      </div>
      <!-- Card Speaker details -->
      <div class="card_text_bottom">
        <span>
          {{ namedetail }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["imgsrc", "name", "nameinfo", "namedetail"],
};
</script>

<style scoped>
@import "card.css";

</style>