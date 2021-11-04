<template>
  <div class="teamcard">
    <div class="flip_card_inner">
      <div class="flip_card_front">
        <img :src="imgsrc" alt="..." />
      </div>
      <div class="flip_card_back">
        <span class="team_person_name">{{ name }}</span>
        <span class="team_person_designation">{{ designation }}</span>
        <span class="team_person_detail">{{ detail }} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["imgsrc", "name", "designation", "detail", "key"],
};
</script>

<style scoped>
@import "./teamcard.css";

</style>