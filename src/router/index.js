import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SortingGuideView from '@/views/SortingGuideView.vue'
import WasteCategoryView from '@/views/WasteCategoryView.vue'
import AdminView from '@/views/AdminView.vue'
import SiteConfigView from '@/views/SiteConfigView.vue'

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
      path: '/sorteringsguide/:id',
      name: 'waste-category',
      component: WasteCategoryView
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView
    },
    {
      path: '/admin/:id',
      name: 'site-config',
      component: SiteConfigView
    }
  ],
  scrollBehavior() {
    return { top: 0, left: 0, behavior: 'instant' }
  }
})

export default router
