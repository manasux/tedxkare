<template>
<!--  @click="$router.push('/') -->
  <div class="responsive_header">
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Speakers</li>
      <li>Theme</li>
      <li>Events</li>
      <li>Team</li>
      <li>Contact</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.responsive_header {
  width: 100%;
  height: 50%;
  top: 60px;
  background: black;
  position: absolute;
}
.responsive_header > ul {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.responsive_header > ul > li {
  color: white;
  list-style: none;
  margin-top: 10px;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-size: 17px;
}
</style>