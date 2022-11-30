import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './router'
// const router = createRouter({
//   history: createWebHashHistory(),
//   routes: [{
//     path:'/',
//     name: 'home',
//     component: HelloWorldVue
//   }]
// })
// const app = createApp(App)
// app.use(router)
// app.mount('#app')
createApp(App).use(router).mount('#app')
