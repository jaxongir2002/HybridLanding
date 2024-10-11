import {createRouter, createWebHashHistory} from 'vue-router'
import About from "@/views/About.vue";
import Home from "@/views/Home.vue";
import Reels from "@/views/Reels.vue";
import Community from "@/views/Community.vue";
import Blog from "@/views/Blog.vue";
import BlogCardView from "@/components/Blog/BlogCardView.vue";
import Brief from "@/views/Brief.vue";
import Experience from "@/views/Experience.vue";
import Studio from "@/views/Studio.vue";
import Lab from "@/views/Lab.vue";
import NotFound from "@/components/NotFound.vue";

const routes = [
    {path: '/', component: About},
    {path: '/about', component: Home},
    {path: '/reels', component: Reels},
    {path: '/community', component: Community},
    {path: '/blog', component: Blog},
    {path: '/blog/:id', name: 'blogView', component: BlogCardView},
    {path: '/brief', component: Brief},
    {path: '/installations', component: Experience},
    {path: '/studio', component: Studio},
    {path: '/lab', component: Lab},
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound},
]

const router = createRouter({
    scrollBehavior() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({left: 0, top: 0})
            }, 500)
        })
    },
    history: createWebHashHistory(),
    routes,
});
export default router