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
      }
    },
    {
      path: '/about',
      name: 'about',
      components: {
        default: () => import('../views/AboutView.vue'),
        stars: Stars,
        info: () => import('../components/About/index.vue'),
      }
    },
    {
      path: '/history',
      name: 'history',
      components: {
        default: () => import('../views/HistoryView.vue'),
        stars: Stars,
        info: () => import('../components/History/index.vue'),
      }
    },
    {
      path: '/history/:id',
      name: 'event',
      components: {
        default: () => import('../views/HistoryView.vue'),
        stars: Stars,
        info: () => import('../components/Event.vue'),
      },
      props: true
    },
    {
      path: '/starlink',
      name: 'starlink',
      components: {
        default: () => import('../views/ExploreView.vue'),
        stars: Stars
      }
    },
    {
      path: '/capsules',
      name: 'capsules',
      components: {
        default: () => import('../views/ExploreView.vue'),
        stars: Stars
      }
    },
    {
      path: '/crew',
      name: 'crew',
      components: {
        default: () => import('../views/ExploreView.vue'),
        stars: Stars
      }
    },
    {
      path: '/dragons',
      name: 'dragons',
      components: {
        default: () => import('../views/ExploreView.vue'),
        stars: Stars
      }
    },
    {
      path: '/launches',
      name: 'launches',
      components: {
        default: () => import('../views/ExploreView.vue'),
        stars: Stars
      }
    },
    {
      path: '/rockets',
      name: 'rockets',
      components: {
        default: () => import('../views/ExploreView.vue'),
        stars: Stars
      }
    },
    {
      path: '/ships',
      name: 'ships',
      components: {
        default: () => import('../views/ExploreView.vue'),
        stars: Stars
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router
