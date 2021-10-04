<template>
  <div class="eventshome">
    <div class="event__title">
      <!-- About title span -->
      <span class="event__title__span">About</span>
      <!-- about title logo img -->
      <img
        src="https://i.ibb.co/RDKp156/TEDx-White-Transparent-003.png"
        alt="logo_about"
      />
      <!-- About year span -->
      <span class="event__year__span">2021</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.eventshome{
    height: 100%;
    width: 100%;
    background-color: var(--black);
}
.event__title {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    height: 20%;
    margin-left: 100px;
  }
  .event__title > span {
    color: var(--white);
    font-size: 20px;
    font-family: var(--ff-roboto);
    transform: translateY(-8px);
  }
</style>