import {createRouter, createWebHistory} from 'vue-router'
import Loading from "@/components/Loading.vue";
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

const routes = [
    {path: '/', component: Loading,},
    {path: '/landing', component: About},
    {path: '/about', component: Home},
    {path: '/reels', component: Reels},
    {path: '/community', component: Community},
    {path: '/blog', component: Blog},
    {path: '/blog/:id', name: 'blogView', component: BlogCardView},
    {path: '/brief', component: Brief},
    {path: '/experience', component: Experience},
    {path: '/studio', component: Studio},
    {path: '/lab', component: Lab},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router