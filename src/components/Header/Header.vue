<template>
  <div class="header flex">
    <!-- logo div -->
    <div class="header__logo">
      <!-- logo img -->
      <img src="https://i.ibb.co/x5V1dws/TEDx-Black.webp" alt="logo" class="header__logo__image">
    </div>
    <!-- navigation -->
    <nav class="header__nav">
      <ul class="header__nav__ul">
        <li><button>Home</button></li>
        <li><button>About</button></li>
        <li><button>Speakers</button></li>
        <li><button>Theme</button></li>
        <li><button>Events</button></li>
        <li><button>Team</button></li>
        <li><button>Contact</button></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  width: 100%;
  height: 10%;
  background-color: var(--black);
}
.header__logo{
  width: 20%;
  margin-left: 10em;
}
.header__logo > .header__logo__image {
  width: 50%;
  object-fit: contain;
}
.header__nav {
  width: 50%;
  height: 100%;
}
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
} 
.header__nav__ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header__nav__ul > li {
  margin-left: 1em;
  list-style-type: none;
  cursor: pointer;
  color: var(--white);
  font-family: var(--ff-raleway);
  font-size: 15px;
  transition: all 0.3s ease;
}
.header__nav__ul > li > button {
  border: none;
  background: none;
  color: var(--white);
  padding: 0 10px;
}
.header__nav__ul > li:hover {
  background-color: var(--primary_red);
  height: 100%;
  display: flex;
  justify-content: center;
  border-radius: 0px 0px 50px 50px;
}
</style>