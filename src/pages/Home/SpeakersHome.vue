<template>
  <div class="speakersHome">
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
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.speakersHome {
  width: 100%;
  height: 100%;
}
img {
  width: 8%;
}
.speaker__title {
  display: flex;
  /* justify-content: center; */
  align-items: center;
  height: 20%;
  margin-left: 100px;
}
.speaker__title > span {
  color: var(--black);
  font-size: 20px;
  font-family: var(--ff-roboto);
  transform: translateY(-8px);
}
</style>