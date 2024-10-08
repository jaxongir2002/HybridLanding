import {createApp} from 'vue'
import './assets/style/style.scss'
import router from "@/router/router.js";
import {createPinia} from 'pinia'
import App from './App.vue'
import 'primeicons/primeicons.css'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(pinia)
app.mount('#app')


