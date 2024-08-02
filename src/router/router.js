import { createWebHashHistory, createRouter } from 'vue-router'
import Loading from "@/components/Loading.vue";
import About from "@/views/About.vue";

const routes = [
    { path: '/', component: Loading },
    { path: '/about', component: About },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router