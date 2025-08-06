import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/views/HomePage.vue'
import BlogPage from '../components/views/BlogPage.vue'
import SomniProgress from '../components/blog-posts/SomniProgress.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/blog/:post',
    name: 'Blog',
    component: BlogPage,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 