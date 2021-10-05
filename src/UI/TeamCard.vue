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
  props: ["imgsrc", "name", "designation", "detail"],
};
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.teamcard:hover .flip_card_inner {
  transform: rotateY(180deg);
}
.flip_card_front,
.flip_card_back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.flip_card_front > img {
  width: 100%;
  height: 100%;
}
.flip_card_front {
  /* background-color: #bbb; */
  color: black;
}
.flip_card_back {
  background-color: var(--black);
  border: 1px solid var(--white);
  border-radius: 10px;
  color: white;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
}
.team_person_name {
  font-family: var(--ff-viga);
  font-size: 50px;
}
.team_person_designation {
  font-size: 20px;
  font-family: var(--ff-raleway);
}
.team_person_detail {
  font-size: 18px;
  font-family: var(--ff-raleway);
  margin-right: 5%;
  margin-left: 5%;
  margin-top: 10%;
}
</style>