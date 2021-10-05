<template>
  <div class="teamcard">
    <div class="flip_card_inner">
      <div class="flip_card_front">
        <img src="https://i.ibb.co/yQgh3VN/Rectangle-25.png" alt="..." />
      </div>
      <div class="flip_card_back">
        <h1>John Doe</h1>
        <p>Architect and Engineer</p>
        <p>We love that guy</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.teamcard {
  width: 30%;
  height: 100%;
  background-color: transparent;
  perspective: 1000px;
}

.flip_card_inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}
.teamcard:hover .flip_card_inner {
  transform: rotateY(180deg);
}
.flip_card_front, .flip_card_back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.flip_card_front > img{
    width: 100%;
    height: 100%;
}
.flip_card_front {
  /* background-color: #bbb; */
  color: black;
}
.flip_card_back {
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
}
</style>