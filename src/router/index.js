import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from "../pages/Register/Register.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
