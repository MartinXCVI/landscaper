// Vue router imports
import { createWebHistory, createRouter } from 'vue-router'

// AOS imports
import AOS from 'aos'
import 'aos/dist/aos.css'

// Router with imports
const routes = [
  { path: "/", component: ()=> import('../views/HomeView.vue') },
  { path: "/about", component: ()=> import ('../views/AboutView.vue') },
  { path: "/projects", component: ()=> import ('../views/ProjectsView.vue') },
  { path: "/services", component: ()=> import ('../views/ServicesView.vue') },
  { path: "/contact", component: ()=> import ('../views/ContactView.vue') },
]

// Router function
const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  AOS.init(); // Initialize AOS
  next();
});

export default router