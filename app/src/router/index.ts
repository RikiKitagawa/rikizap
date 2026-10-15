import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";

// ルート（道順）の定義
const routes = [
    {
        path: "/", // トップページ (rikizap.com/)
        name: "home",
        component: Home,
    },
    {
        path: "/contact", // お問い合わせ (rikizap.com/contact)
        name: "contact",
        component: Contact,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
