import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// REMOVED the duplicate HomeView import that was pointing to AboutView

const router = createRouter({
  // Use Hash History for GitHub Pages to prevent 404 errors on refresh
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // This is a "lazy load" import - it works great!
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router