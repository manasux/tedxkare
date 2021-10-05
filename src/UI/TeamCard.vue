<template>
  <div class="teamcard">
    <img src="https://i.ibb.co/yQgh3VN/Rectangle-25.png" alt="face" />
    <div class="overlay">Organiser</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.teamcard {
  position: relative;
  width: 30%;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.6);
}
.teamcard > img {
  display: block;
  width: 100%;
  height: auto;
}
.overlay {
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.7); /* Black see-through */
  color: #f1f1f1;
  width: 100%;
  transition: 0.5s ease;
  opacity: 1;
  color: white;
  font-size: 20px;
  padding: 10px;
  text-align: center;
  font-size: 40px;
  font-family: var(--ff-viga);
}

</style>