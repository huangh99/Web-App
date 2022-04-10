<template>
<!-- 搜索输入框 -->
  <div class="home-content">
    <van-search
      v-model="value"
      shape="round"
      background="#425274"
      placeholder="请输入搜索关键词"
    />
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <!-- <img v-lazy="image" /> -->
        <van-image height="200" width="100%" :src=image />
      </van-swipe-item>
    </van-swipe>
    <!-- grid宫格导航 -->
    <van-grid border>
      <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" to="/" square/>
    </van-grid>
    <!-- 滚动通知栏 -->
    <van-notice-bar left-icon="volume-o" mode="closeable" scrollable color="#1989fa" background="#ecf9ff">技111111111111111111111111111术是开发它的人的共同灵魂。</van-notice-bar>
    <!-- 推荐导航栏 -->
    <van-sticky>
    <van-nav-bar ref="navBar" title="为你推荐"/>
    </van-sticky>
    <!-- 列表内容 -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item" :title="item" />
    </van-list>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg'
      ],
      value: '',
      list: [],
      loading: false,
      finished: false,
      isFixed: false
    }
  },
  methods: {
    onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }

        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 1000)
    }

  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
.home-content{
  .van-grid{
    margin: 0px 10px 10px;
    border-radius: 10px;
    box-shadow: 0 2px 20px -10px #425274;
    .van-grid-item/deep/ .van-grid-item__content{
      border-radius: 10px;
    }
  }

}

</style>
