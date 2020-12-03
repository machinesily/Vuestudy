import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'
const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')
const User = () => import('../components/User.vue')
const HomeNews = () => import('../components/HomeNews.vue')
const HomeMessage = () => import('../components/HomeMessage.vue')
const Profile = () => import('../components/Profile.vue')

Vue.use(VueRouter)

const routes = [{
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta:{
      title:'首页'
    },
    children: [{
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }, 
      // {
      //   path: '',
      //   redirect: "news"
      // }
    ]
  },
  {
    path: '/about',
    component: About,
    meta:{
      title:'关于'
    }
  },
  {
    path: '/user/:userId',
    component: User,
    meta:{
      title:'用户'
    }
  }, {
    path: '/Profile',
    component: Profile,
    meta:{
      title:'档案'
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

//前置守卫(guard)
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
  // console.log(to)
})

//后置钩子(hook)
router.afterEach( route => {
//  console.log('-----')
})

const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router