import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/home/Home.vue'
// import Category from '../views/category/Category.vue'
// import ShopCart from '../views/shopcart/ShopCart.vue'
// import Profile from '../views/profile/Profile.vue'

const Home = () => import ('../views/home/Home.vue')
const Category = () => import ('../views/category/Category.vue')
const ShopCart = () => import ('../views/shopcart/ShopCart.vue')
const Profile = () => import ('../views/profile/Profile.vue')

Vue.use(VueRouter)

const routes = [{
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcart',
    component: ShopCart
  },
  {
    path: '/profile',
    component: Profile
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})


export default router

