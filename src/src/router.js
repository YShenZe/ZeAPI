import { createRouter, createWebHistory } from 'vue-router'
import ApiList from './views/ApiList.vue'
import ApiDetailView from './views/ApiDetailView.vue'
import About from './views/About.vue'

const routes = [
  { path: '/', component: ApiList },
  { path: '/api/:name', component: ApiDetailView },
  { path: '/about', component: About }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router