import { createWebHashHistory, createRouter } from 'vue-router'
import Loading from "@/components/Loading.vue";
import About from "@/views/About.vue";
import Home from "@/views/Home.vue";

const routes = [
    { path: '/', component: Loading },
    { path: '/landing', component: About },
    { path: '/about', component: Home },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router