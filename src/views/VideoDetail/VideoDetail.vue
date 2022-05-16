<template>
  <div>
    <!-- Header 区域 -->
    <van-nav-bar fixed title="视频详情" left-arrow @click-left="$router.back()" />

    <!-- 视频信息区域 -->
    <div class="article-container" v-if="video">
      <!-- 视频标题 -->
      <h1 class="art-title">{{video.title}}</h1>

      <!-- 用户信息 -->
      <van-cell center :title="video.author" :label="video.pubdate">
        <template #icon>
          <!-- 头像 -->
          <img :src="video.author_icon" alt="" class="avatar">
        </template>
        <template #default>
          <div>
            <!-- 是否关注了作者 -->
            <van-button v-if="video.is_follow" type="info" size="mini" @click="cancelFollow">已关注</van-button>
            <van-button v-else icon="plus" type="info" size="mini" plain @click="setFollow">关注</van-button>
          </div>
        </template>
      </van-cell>

      <!-- 分割线 -->
      <van-divider></van-divider>

      <!-- 视频内容 -->
      <div class="art-content" v-if="video.content" >
        <!-- <video :src="video.content" controls></video> -->
        <video :src="require('@/assets/videos/video'+video.content+'.mp4')" controls></video>
      </div>

      <!-- 分割线 -->
      <van-divider>End</van-divider>

      <!-- 点赞 -->
      <div class="like-box">
        <van-button icon="good-job" type="danger" size="small" v-if="video.is_star" @click="cancelStar">已点赞</van-button>
        <van-button icon="good-job-o" type="danger" plain size="small" v-else @click="setStar">点赞</van-button>
      </div>
    </div>
    <VideoComment :videoId="id"></VideoComment>
  </div>
</template>

<script>
import { getVideoDetailAPI, setStarVideoAPI, cancelStarVideoAPI } from '@/api/videoAPI'
import { setFollowAuthorAPI, cancelFollowAuthorAPI } from '@/api/articleAPI'
import VideoComment from '@/components/VideoComment/VideoComment'
export default {
  name: 'VideoDetail',
  components: {
    VideoComment
  },
  // 路由传递的参数 视频id
  props: ['id'],
  data() {
    return {
      video: {}
    }
  },
  methods: {
    setFollow() {
      this.setFollowAuthor()
    },
    cancelFollow() {
      this.cancelFollowAuthor()
    },
    setStar() {
      this.setStarVideo()
    },
    cancelStar() {
      this.cancelStarVideo()
    },
    async getVideoDetail() {
      const { data: res } = await getVideoDetailAPI(this.id)
      if (res.status === 0) {
        this.video = res.data
      }
    },
    async setFollowAuthor() {
      const { data: res } = await setFollowAuthorAPI(this.video.author_id)
      if (res.status === 0) {
        this.$toast.success('关注成功！')
        this.video.is_follow = 1
      }
    },
    async cancelFollowAuthor() {
      const { data: res } = await cancelFollowAuthorAPI(this.video.author_id)
      if (res.status === 0) {
        this.$toast.success('取关成功！')
        this.video.is_follow = 0
      }
    },
    async setStarVideo() {
      const { data: res } = await setStarVideoAPI(this.id)
      if (res.status === 0) {
        this.$toast.success('点赞成功！')
        this.video.is_star = 1
      }
    },
    async cancelStarVideo() {
      const { data: res } = await cancelStarVideoAPI(this.id)
      if (res.status === 0) {
        this.$toast.success('取消点赞成功！')
        this.video.is_star = 0
      }
    }
  },
  created() {
    this.getVideoDetail()
  }
}
</script>

<style lang="less" scoped>
.article-container {
  padding: 10px;
  margin-top: 46px;
}
.art-title {
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0;
}

.art-content {
  font-size: 12px;
  line-height: 24px;
  width: 100%;
  overflow-x: scroll;
  word-break: break-all;
  video{
    width: 100%;
  }
}

.van-cell {
  padding: 5px 0;
  &::after {
    display: none;
  }
}

.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #f8f8f8;
  margin-right: 5px;
  border: none;
}

.like-box {
  display: flex;
  justify-content: center;
}
</style>
