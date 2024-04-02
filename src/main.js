import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import AppLoader from './components/AppLoader.vue'
import AppAlert from './components/AppAlert.vue'
import router from './router'

const app = createApp(App)
app.component('AppLoader', AppLoader)
app.component('AppAlert', AppAlert)
app.use(router)
app.mount('#app')
