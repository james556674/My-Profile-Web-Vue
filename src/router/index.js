import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projects',
    name: 'My-Project',
    component: () => import('../views/Projects.vue')

  },
  {
    path: '/about',
    name: 'About-Me',
    component: () => import('../views/About.vue')

  },

  {
    path: '*',
    name: 'Not-Found',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
