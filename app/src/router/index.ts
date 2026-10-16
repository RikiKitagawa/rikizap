import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import FeatureDetail from '../views/FeatureDetail.vue'

const routes = [
    {
    path: '/',
    name: 'home',
    component: Home
    },
    {
    path: '/contact',
    name: 'contact',
    component: Contact
    },
    {
    path: '/feature',
    name: 'feature',
    component: FeatureDetail // 追加
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router