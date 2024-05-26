import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SortingGuideView from '../views/SortingGuideView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sorteringsguide',
      name: 'sortingguide',
      component: SortingGuideView
    }
  ]
})

export default router
