<template>
<!-- 搜索输入框 -->
  <div class="home-content">
    <div class="header van-hairline--top" >{{text}}</div>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <!-- <img v-lazy="image" /> -->
        <van-image height="200" width="100%" :src=image />
      </van-swipe-item>
    </van-swipe>
    <!-- grid宫格导航 -->
    <van-grid border>
      <van-grid-item icon="photo-o" text="签到" to="/" square/>
      <van-grid-item icon="photo-o" text="课程" to="/" square/>
      <van-grid-item icon="records" text="答题" to="/home/questions" square/>
      <van-grid-item icon="photo-o" text="视频" to="/" square/>
      <van-grid-item icon="photo-o" text="社区交流" to="/" square/>
      <van-grid-item icon="photo-o" text="积分兑换" to="/" square/>
      <van-grid-item icon="photo-o" text="我的计划" to="/" square/>
      <van-grid-item icon="photo-o" text="活动推荐" to="/" square/>
    </van-grid>
    <!-- 滚动通知栏 -->
    <van-notice-bar left-icon="volume-o" mode="closeable" scrollable color="#1989fa" background="#ecf9ff">技111111111111111111111111111术是开发它的人的共同灵魂。</van-notice-bar>
    <!-- 推荐导航栏 -->
    <van-sticky>
    <van-nav-bar ref="navBar" title="为你推荐"/>
    </van-sticky>
    <ArtList :article-id="classId"></ArtList>
  </div>
</template>

<script>
import ArtList from '@/components/ArtList/ArtList'
import { randomNum } from '@/utils/functions'
export default {
  name: 'Home',
  components: {
    ArtList
  },
  data() {
    return {
      classId: 1,
      images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg'
      ],
      textList: ['正在努力的你很可爱', '你是上帝最眷顾的小孩', '我想，慢慢来是一种诚意', '向海风许愿，在山海相见', '身处泥泞遥，看满山花开', '不发动态就是在认真生活', '有幸被照亮，也想成为光', '陪你看日落的人比日落浪漫', '不辜负对的人，不辜负自己', '就把我偷走吧浪漫的收藏家', '无人问津的港口总是开满鲜花', '不能因为没有掌声就丢掉自信', '所有事情只要你觉得值得就好', '保持心脏震荡，有人等你共鸣', '做你自己，爱你的人自然爱你', '路还长，温柔的事一定会发生', '今天温柔的风归功于昨天的雨', '过分期待是所有烂结果的开始', '所有的运气都藏在你的自律里', '成为更好的人，这是新的约定', '要成为别人的遥不可望不可及', '慢慢理解世界，慢慢更新自己', '永远相信美好的事情即将发生', '深夜和清晨，都请用力去生活', '销声匿迹是所有告别里最勇敢的', '你一定一定，要奔向更好的生活', '兜兜转转的重逢才是浪漫的开始', '隔过星辰大海，无畏世俗和尘埃', '最大的安心是自律温柔和爱自己', '不同的列车都在开往更好的方向', '你所期盼的都会稳稳妥妥的到来', '慢慢走，沿途有风景 背后有阳光', '不要总沉迷过去，你要有新的生活', '世界充满分歧所以要学会尊重别人', '希望你每个昨天今天明天都很快乐', '我走过的路要繁花盛开，人声鼎沸']
    }
  },
  methods: {

  },
  computed: {
    text() {
      const index = randomNum(0, this.textList.length)
      return this.textList[index]
    }
  },
  mounted() {

  }
}
</script>

<style lang="less" scoped>
.home-content{
  .header{
    padding-left: 10px;
    height: 54px;
    line-height: 54px;
    font-family: "Lucida Calligraphy", cursive, serif, sans-serif;
    font-size: 16px;
    color: #425274;
    background: linear-gradient(to right,#8e9eab, #eef2f3)
  }
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
