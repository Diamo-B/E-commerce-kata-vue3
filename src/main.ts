import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiCart3 , HiMenu, FcCancel  , FaStar, FaSlackHash, BiTrash, FaPlus, FaMinus   } from "oh-vue-icons/icons";

addIcons(BiCart3 , HiMenu, FcCancel , FaStar, FaSlackHash, BiTrash, FaPlus, FaMinus   );


createApp(App).use(router).component("v-icon", OhVueIcon).mount('#app')
