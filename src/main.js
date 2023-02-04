import { createApp } from 'vue';
import App from './App.vue';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import './index.css';
import router from './router/index.js';


createApp(App).use(router).use(Toast).mount('#app')
