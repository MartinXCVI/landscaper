// Vue router imports
import { createWebHistory, createRouter } from 'vue-router'

// Router with imports
const routes = [
  { path: "/", component: ()=> import('../views/HomeView.vue') },
  { path: "/about", component: ()=> import ('../views/AboutView.vue') },
  { path: "/contact", component: ()=> import ('../views/ContactView.vue') }
]

// Router function
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router