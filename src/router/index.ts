import { createRouter, createWebHashHistory } from 'vue-router'
import AboutVue from '../components/About.vue'
import HelloWorldVue from '../components/HelloWorld.vue'

const routes = [
  { path: '/', component: HelloWorldVue },
  { path: '/about', component: AboutVue },
]
export const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
}) 