<template>
  <div class="video-box">
    <NavBar title="视频"></NavBar>
    <!-- <van-sticky> -->
      <van-tabs>
        <van-tab v-for="item in tabList" :key="item.id" :title="item.name">
          <VideoList :cate-id="item.id"></VideoList>
        </van-tab>
      </van-tabs>
    <!-- </van-sticky> -->
  </div>
</template>

<script>
import { getArticleTabsAPI } from '@/api/articleAPI'
import NavBar from '@/components/NavBar/NavBar'
import VideoList from '@/components/VideoList/VideoList'
export default {
  name: 'VideoShow',
  components: {
    NavBar,
    VideoList
  },
  data() {
    return {
      tabList: []
    }
  },
  methods: {
    async getVideoTabs() {
      const { data: res } = await getArticleTabsAPI()
      if (res.status === 0) {
        this.tabList = res.data
      }
    }
  },
  created() {
    this.getVideoTabs()
  }

}
</script>

<style lang="less" scoped>
.video-box{

  /deep/.van-nav-bar{
    z-index: 999;
  }
}
</style>
