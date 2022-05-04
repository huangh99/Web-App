<template>
  <div class="about-box">
    <van-nav-bar
      title="关于"
      left-text="返回"
      left-arrow
      fixed
      placeholder
      @click-left="$router.back()"
    />
    <van-cell-group>
      <van-cell title="应用名称" value="移动智库APP" />
      <van-cell title="开发者" value="HH" />
      <van-cell title="开发时间" value="2022.03.03-2022.05" />
      <van-cell title="版本" value="1.0.0" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="less" scoped>
.about-box{
  /deep/.van-nav-bar__text,/deep/.van-icon{
    color: #000;
  }
}
</style>
