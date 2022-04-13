<template>
<div class="navBar-box">
  <van-nav-bar
    :title="title"
    left-text="返回"
    :right-text="rightText"
    left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight"
  />
</div>
</template>

<script>
export default {
  name: 'NavBar',
  props: ['title', 'rightText'],
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    onClickRight() {
      this.$parent.saveInformation()
    }
  }
}
</script>

<style lang="less" scoped>

</style>
