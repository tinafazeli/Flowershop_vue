import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EventsView from '../views/EventsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/about',
    name:'about',
    component:()=> import('../views/AboutView.vue')
  },
  {
    path: '/events',
    name: 'events',
    component: EventsView
  },
  {
    path: '/services',
    name: 'services',
    component:()=>('../views/ServicesView.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
