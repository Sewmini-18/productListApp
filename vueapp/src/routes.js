import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter);

import AddProduct from './components/AddProduct.vue'
import ProductList from './components/ProductList.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [
    {path: '/home',component: Home},
      {
        path: '/add',
        component: AddProduct
      },
      {
        path: '/list',
        component: ProductList
      },
      {path: '/about',component: About},
      {path: '/contact',component: Contact}
    ]
  });
export default router