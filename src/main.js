import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/styles/styles.scss'
import '../node_modules/bootstrap/dist/js/bootstrap'

createApp(App).use(router).mount('#app')
