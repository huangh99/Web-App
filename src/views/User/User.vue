<template>
  <div class="user-content">
    <div class="user-top">
      <van-row type="flex">
        <van-col span="8">
          <van-image
            round
            width="100px"
            height="100px"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
        </van-col>
        <van-col span="16" class="userName">用户名</van-col>
      </van-row>
    </div>
    <van-cell-group inset class="user-card1">
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
    <van-cell-group inset class="user-card2">
      <van-cell title="URL 跳转" is-link to="/user" icon="location-o" />
      <van-cell title="路由跳转" is-link to="/user" icon="location-o" />
      <van-cell title="路由跳转" is-link to="/user" icon="location-o" />
      <van-cell title="路由跳转" is-link to="/user" icon="location-o" />
      <van-cell title="路由跳转" is-link to="/user" icon="location-o" />
      <van-cell title="路由跳转" is-link to="/user" icon="location-o" />
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'User'

}
</script>

<style lang="less" scoped>
.user-content{
  .user-top{
    height: 200px;
    background-color: #425274;
    border-radius: 0 0 10% 10%;
    box-sizing: border-box;
    padding: 50px 0 0 20px;
    .userName{
      line-height: 100px;
      color: #fff;
    }
  }
  .user-card1{
    margin-top: -35px;
    box-shadow: 0px 0px 10px #576B95;
  }
  .user-card2{
    margin-top: 20px;
    box-shadow: 0px 10px 10px -8px #576B95;
  }
}
</style>
