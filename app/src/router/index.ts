import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'

// ルート（道順）の定義
const routes = [
  {
    path: '/',          // トップページ (rikizap.com/)
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact',   // お問い合わせ (rikizap.com/contact)
    name: 'contact',
    component: ContactView
  }
]

const router = createRouter({
  history: createWebHistory(), // 綺麗なURL（#がつかない方式）にする設定
  routes
})

export default router