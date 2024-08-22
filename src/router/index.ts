import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/workers',
      name: 'workers',
      component: () => import('../views/WorkersView.vue')
    },
    {
      path: '/workers/new',
      name: 'create-worker',
      component: () => import('../views/CreateWorkerView.vue')
    },
    {
      path: '/workers/edit/:id',
      name: 'edit-worker',
      component: () => import('../views/EditWorkerView.vue')
    }
  ]
})

export default router
