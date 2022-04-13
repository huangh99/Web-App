<template>
  <div class="security-box">
    <NavBar title="安全与密码"></NavBar>
    <van-cell title="密码管理" value="修改密码" is-link to="/user/security/changePwd" />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar'
export default {
  name: 'Security',
  components: {
    NavBar
  }

}
</script>

<style lang="less" scoped>

</style>
