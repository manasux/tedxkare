import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue';
import Home from '../views/Home.vue';
import Contact from "../views/Contact.vue";
import Events from "../views/Events.vue";
import Speakers from "../views/Speakers.vue";
import Team from "../views/Team.vue";
import Theme from "../views/Theme.vue";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/about',
    name: 'About',
    component:About
  },
  {
    path: '/contact',
    name: 'Contact',
    component:Contact
  },
  {
    path: '/events',
    name: 'Events',
    component:Events
  },

  {
    path: '/speakers',
    name: 'Speakers',
    component:Speakers
  },
  {
    path: '/team',
    name: 'Team',
    component:Team
  },
  {
    path: '/theme',
    name: 'Theme',
    component:Theme
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router