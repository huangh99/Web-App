import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'
import { Dialog } from 'vant'

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
import Questions from '@/views/Questions/Questions'
import AnswerResults from '@/views/Questions/AnswerResults/AnswerResults'

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
  { path: '/knowledge/article/:id', component: ArticleDetail, props: true },
  // 定义答题页面的路由规则
  { path: '/home/questions', component: Questions },
  // 定义答题结果页面的路由规则
  { path: '/home/questions/results', component: AnswerResults }
]

const pagePathArr = ['/user', '/home', '/knowledge']

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (pagePathArr.indexOf(to.path) !== -1) {
    // 从store中获取token的值
    const tokenStr = store.state.tokenInfo.token
    if (tokenStr) {
      next()
    } else {
      Dialog.alert({
        message: '请先登录'
      }).then(() => {
        next('/login')
      })
    }
  } else {
    next()
  }
})

export default router
