import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import MealList from '../views/MealList.vue';
import MealsByLetter from '../views/MealsByLetter.vue';
import MealsByName from '../views/MealsByName.vue';
import MealsByIngredient from '../views/MealsByIngredient.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import GuestLayout from'../components/GuestLayout.vue';

// ? to make it optional in route
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component: DefaultLayout,
      children:[
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: '/letter/:letter',
          name: 'byLetter',
          component: MealList
        },
        {
          path: "/by-name/:name?",
          name: "byName",
          component: MealsByName,
        },
        {
          path: "/by-letter/:letter?",
          name: "byLetter",
          component: MealsByLetter,
        },
        {
          path: "/by-ingredient/:ingredient?",
          name: "byIngredient",
          component: MealsByIngredient,
        },

      ]
    },
    {
      path:'/auth',
      name:"GuestLayout",
      component:GuestLayout
    }
    
  ]
})

export default router
