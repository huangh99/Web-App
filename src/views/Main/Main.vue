<template>
  <div class="mainBox">
    <!-- 路由占位符 -->
    <router-view></router-view>
    <!-- TabBar导航栏 -->
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/knowledge" icon="send-gift-o">智库</van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style lang="less" scoped>
</style>
