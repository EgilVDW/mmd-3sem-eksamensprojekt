import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SortingGuideView from '@/views/SortingGuideView.vue'
import GardenWasteView from '@/views/GardenWasteView.vue'

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
      name: 'sorting-guide',
      component: SortingGuideView
    },
    {
      path: '/sorteringsguide/haveaffald',
      name: 'garden-waste',
      component: GardenWasteView
    }
  ],
  scrollBehavior() {
    return { top: 0, left: 0, behavior: 'instant' }
  }
})

export default router
