<template>
  <div class="help-box">
    <van-nav-bar
      title="帮助与反馈"
      left-text="返回"
      left-arrow
      fixed
      placeholder
      @click-left="$router.back()"
    />
    <van-cell-group>
      <van-cell title="反馈邮箱" value="2228488125@qq.com" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'Help'
}
</script>

<style lang="less" scoped>
.help-box{
  /deep/.van-nav-bar__text,/deep/.van-icon{
    color: #000;
  }
}
</style>
