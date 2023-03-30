import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from "@/components/MainPage";
import EnterComponent from "@/components/EnterComponent";
import LoginUser from "@/components/LoginUser";
import UserProfilePage from "@/components/UserProfilePage";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/enter',
    name: 'EnterComponent',
    component: EnterComponent
  },
  {
    path: '/login',
    name: 'LoginUser',
    component: LoginUser
  },
  {
    path: '/profile',
    name: 'UserProfilePage',
    component: UserProfilePage
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
