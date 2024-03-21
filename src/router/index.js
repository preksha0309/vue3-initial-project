import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import MealList from '../views/MealList.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/letter/:letter',
        name: 'byLetter',
        component: MealList
      }
  ]
})

export default router
