import { createRouter, createWebHistory } from 'vue-router'

import BlogHome from '@/components/BlogHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BlogHome,
    },
    {
      path: '/category/:categoryName',
      name: 'category-view',
      component: () => import('@/components/CategoryView.vue'),
    },
    {
      path: '/post/:slug',
      name: 'post-detail',
      component: () => import('@/components/PostDetail.vue'),
    },
  ],
})

export default router
