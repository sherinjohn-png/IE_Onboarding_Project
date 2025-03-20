// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Main from '../components/Main.vue'
import WeatherApp from '../components/WeatherApp.vue'


const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/home',
    name: 'Home',
    component: WeatherApp
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router