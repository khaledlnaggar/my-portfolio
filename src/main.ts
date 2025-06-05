import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { register } from 'swiper/element/bundle'
const app = createApp(App)

app.use(router)

app.mount('#app')
register()
