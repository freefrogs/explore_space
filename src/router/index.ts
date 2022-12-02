import { createRouter, createWebHistory } from 'vue-router'
import Stars from '@/components/animated/Stars.vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: () => import('../views/HomeView.vue'),
        stars: Stars
      },
      props: { default: true, stars: true }
    },
    {
      path: '/about',
      name: 'about',
      components: {
        default: () => import('../views/AboutView.vue'),
        stars: Stars
      },
      props: { default: true, stars: true }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
