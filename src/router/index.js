import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Inclub from '../views/Inclub.vue'
import Create from '../views/Create.vue'
import ClubForm from '../views/ClubForm'
import Formcreate from '../views/Formcreate'
import Login from '../views/Login'
import Loginaddmin from '../views/Loginaddmin'
import Requestclub from '../views/Requestclub'
import club1 from '../views/club1'
import registers from '../views/register'
import profile from '../views/profile'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/inclub',
    name: 'Inclub',
    component: Inclub
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/clubform',
    name: 'ClubForm',
    component: ClubForm
  },
  {
    path: '/formcreate',
    name: 'Formcreate',
    component: Formcreate
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/loginaddmin',
    name: 'Loginaddmin',
    component: Loginaddmin
  },
  {
    path: '/requestclub',
    name: 'Requestclub',
    component: Requestclub
  },
  {
    path: '/club1/:id',
    name: 'club1',
    component: club1
  },
  {
    path: '/register',
    name: 'register',
    component: registers
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
