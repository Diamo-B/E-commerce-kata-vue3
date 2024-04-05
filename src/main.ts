import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiCart3 , HiMenu, FcCancel  , FaStar } from "oh-vue-icons/icons";

addIcons(BiCart3 , HiMenu, FcCancel , FaStar );


createApp(App).use(router).component("v-icon", OhVueIcon).mount('#app')
