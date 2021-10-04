<template>
  <div class="card">
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
.card {
  width: 80%;
  height: 100%;
  background-color: var(--card-bg);
  display: flex;
}
.card_img {
  background-color: pink;
  width: 35%;
  height: 100%;
}
.card_img > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card_text {
  width: 65%;
  display: block;
}
.card_text_top {
  width: 100%;
  height: 20%;
  background-color: var(--primary-red);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.card_text_name {
  font-family: var(--ff-viga);
  font-size: 25px;
  margin-left: 5%;
}
.card_text_name_detail {
  font-family: var(--ff-raleway);
  font-size: 15px;
  margin-left: 5%;
}
.card_text_bottom {
  width: 100%;
  height: 80%;
  display: flex;
  flex-wrap: wrap;
}
.card_text_bottom > span {
  color: var(--black);
  /* display: flex;
    flex-wrap: wrap; */
  font-family: var(--ff-roboto);
  font-size: 20px;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 2%;
}
</style>