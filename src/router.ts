import { createMemoryHistory, createRouter } from 'vue-router'

import Home from "./components/Home.vue";
import Cart from './components/cart/Cart.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/cart', component: Cart },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;