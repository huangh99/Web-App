import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入需要的组件
import Login from '@/views/Login/Login'
import Logon from '@/views/Logon/Logon'
import Main from '@/views/Main/Main'
import Home from '@/views/Home/Home'
import Knowledge from '@/views/Knowledge/Knowledge'
import User from '@/views/User/User'

Vue.use(VueRouter)

const routes = [
  // 定义登录页面路由规则
  { path: '/login', component: Login },
  // 定义注册页面路由规则
  { path: '/logon', component: Logon },
  // 定义主页的路由规则
  {
    path: '/',
    redirect: '/home',
    component: Main,
    // 主页下的子路由
    children: [
      // 定义首页的路由规则
      { path: '/home', component: Home },
      // 定义智库的路由规则
      { path: '/knowledge', component: Knowledge },
      // 定义我的路由规则
      { path: '/user', component: User }
    ]
  }

]

const router = new VueRouter({
  routes
})

export default router
