import { createMemoryHistory, createRouter } from 'vue-router'
import Loading from "@/components/Loading.vue";
import About from "@/views/About.vue";

const routes = [
    // { path: '/', component: Loading },
    { path: '/', component: About },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})
export default router