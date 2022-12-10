import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: HomeView
  },
  {
    path: '/nosotros',
    name: 'nosotros',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/NosotrosView.vue')
  },
  {
    path:'/servicio',
    name:'servicio',
    component: () => import('@/views/ServicioView.vue')
  },
  {
    path: '/destinos',
    name: 'destinos',
    component: () => import('@/views/DestinosView.vue')
  },
  {
    path:'/contactos',
    name: 'contactos',
    component: () => import('@/views/ContactoView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
