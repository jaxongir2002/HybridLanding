import { createWebHashHistory, createRouter } from 'vue-router'
import Loading from "@/components/Loading.vue";
import About from "@/views/About.vue";
import Home from "@/views/Home.vue";
import Reels from "@/views/Reels.vue";
import Community from "@/views/Community.vue";

const routes = [
    { path: '/', component: Loading },
    { path: '/landing', component: About },
    { path: '/about', component: Home },
    { path: '/reels', component: Reels },
    { path: '/community', component: Community },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router