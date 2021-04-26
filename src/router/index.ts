import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import Introductory from "@/views/Introductory.vue";
import Calculator from "@/views/Calculator.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/calculator'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: Calculator
  },
  {
    path: '/introductory',
    name: 'Introductory',
    component: Introductory
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
