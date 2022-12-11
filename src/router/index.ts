import { createRouter, createWebHistory } from 'vue-router'
import Stars from '@/components/animated/Stars.vue'

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
      path: '/history',
      name: 'history',
      components: {
        default: () => import('../views/HistoryView.vue'),
        stars: Stars
      },
      props: { default: true, stars: true }
    },
    {
      path: '/starlink',
      name: 'starlink',
      components: {
        default: () => import('../views/ExploreView.vue'),
        stars: Stars
      },
      props: { default: true, stars: true }
    },
    {
      path: '/capsules',
      name: 'capsules',
      components: {
        default: () => import('../views/ExploreView.vue'),
        stars: Stars
      },
      props: { default: true, stars: true }
    },
    {
      path: '/crew',
      name: 'crew',
      components: {
        default: () => import('../views/ExploreView.vue'),
        stars: Stars
      },
      props: { default: true, stars: true }
    },
    {
      path: '/dragons',
      name: 'dragons',
      components: {
        default: () => import('../views/ExploreView.vue'),
        stars: Stars
      },
      props: { default: true, stars: true }
    },
    {
      path: '/launches',
      name: 'launches',
      components: {
        default: () => import('../views/ExploreView.vue'),
        stars: Stars
      },
      props: { default: true, stars: true }
    },
    {
      path: '/rockets',
      name: 'rockets',
      components: {
        default: () => import('../views/ExploreView.vue'),
        stars: Stars
      },
      props: { default: true, stars: true }
    },
    {
      path: '/ships',
      name: 'ships',
      components: {
        default: () => import('../views/ExploreView.vue'),
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
