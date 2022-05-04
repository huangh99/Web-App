<template>
  <div class="setting-box">
    <van-nav-bar
      title="设置"
      left-text="返回"
      left-arrow
      fixed
      placeholder
      @click-left="$router.back()"
    />
    <van-cell-group>
      <van-cell title="绑定手机" is-link value="未绑定" />
      <van-cell title="绑定QQ" is-link value="未绑定" />
      <van-cell title="安全设置" is-link />
      <van-cell title="隐私设置" is-link />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'Help'
}
</script>

<style lang="less" scoped>
.setting-box{
  /deep/.van-nav-bar__text,/deep/.van-icon{
    color: #000;
  }
}
</style>
