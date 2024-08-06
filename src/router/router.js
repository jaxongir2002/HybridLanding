import { createWebHistory, createRouter } from 'vue-router'
import Loading from "@/components/Loading.vue";
import About from "@/views/About.vue";

const routes = [
    { path: '/', component: Loading },
    { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router