import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入需要的组件
import Login from '@/views/Login/Login'
import Logon from '@/views/Logon/Logon'
import Main from '@/views/Main/Main'
import Home from '@/views/Home/Home'
import Knowledge from '@/views/Knowledge/Knowledge'
import User from '@/views/User/User'
import Security from '@/views/User/Security/Security'
import ChangePassword from '@/views/User/Security/ChangePassword/ChangePassword'
import Information from '@/views/User/Information/Information'
import SearchResult from '@/views/SearchResult/SearchResult'
import ArticleDetail from '@/views/ArticleDetail/ArticleDetail'

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
  },
  // 定义安全与密码页面路由规则
  { path: '/user/security', component: Security },
  // 定义修改密码页面的路由规则
  { path: '/user/security/changePwd', component: ChangePassword },
  // 定义个人资料页面的路由规则
  { path: '/user/information', component: Information },
  // 定义搜索结果页面的路由规则
  { path: '/knowledge/searchResult/:kw', component: SearchResult, props: true },
  // 定义文章详情页面的路由规则
  { path: '/knowledge/article/:id', component: ArticleDetail, props: true }
]

const router = new VueRouter({
  routes
})

export default router
