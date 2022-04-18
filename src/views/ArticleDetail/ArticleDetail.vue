<template>
  <div class="articleDetail-box">
    <!-- Header 区域 -->
    <van-nav-bar fixed title="文章详情" left-arrow @click-left="$router.back()" />

    <!-- 文章信息区域 -->
    <div class="article-container" v-if="article">
      <!-- 文章标题 -->
      <h1 class="art-title">{{article.title}}-----{{article.id}}</h1>

      <!-- 用户信息 -->
      <van-cell center :title="article.author" :label="article.pubdate">
        <template #icon>
          <!-- 头像 -->
          <img :src="article.author_pic" alt="" class="avatar">
        </template>
        <template #default>
          <div>
            <!-- 是否关注了作者 -->
            <van-button v-if="article.is_follow" type="info" size="mini"  @click="cancelFollow">已关注</van-button>
            <van-button v-else icon="plus" type="info" size="mini" plain @click="setFollow">关注</van-button>
          </div>
        </template>
      </van-cell>

      <!-- 分割线 -->
      <van-divider></van-divider>

      <!-- 文章内容 -->
      <div class="art-content" v-html="article.content"></div>

      <!-- 分割线 -->
      <van-divider>End</van-divider>

      <!-- 点赞 -->
      <div class="like-box">
        <van-button icon="good-job" type="danger" size="small" v-if="article.is_star" @click="cancelStar">已点赞</van-button>
        <van-button icon="good-job-o" type="danger" plain size="small" v-else @click="setStar">点赞</van-button>
      </div>
    </div>
    <ArtComment :articleId="id"></ArtComment>
  </div>
</template>

<script>
import { getArticleDetailAPI, setFollowAuthorAPI, cancelFollowAuthorAPI, setStarArticleAPI, cancelStarArticleAPI } from '@/api/articleAPI'
import ArtComment from '@/components/ArtComment/ArtComment'
export default {
  name: 'ArticleDetail',
  components: {
    ArtComment
  },
  // 路由传递的参数 文章id
  props: ['id'],
  data() {
    return {
      article: {}
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
      this.setStarArticle()
    },
    cancelStar() {
      this.cancelStarArticle()
    },
    async getArticleDetail() {
      const { data: res } = await getArticleDetailAPI(this.id)
      if (res.status === 0) {
        this.article = res.data
      }
    },
    async setFollowAuthor() {
      const { data: res } = await setFollowAuthorAPI(this.article.author_id)
      if (res.status === 0) {
        this.$toast.success('关注成功！')
        this.article.is_follow = 1
      }
    },
    async cancelFollowAuthor() {
      const { data: res } = await cancelFollowAuthorAPI(this.article.author_id)
      if (res.status === 0) {
        this.$toast.success('取关成功！')
        this.article.is_follow = 0
      }
    },
    async setStarArticle() {
      const { data: res } = await setStarArticleAPI(this.id)
      if (res.status === 0) {
        this.$toast.success('点赞成功！')
        this.article.is_star = 1
      }
    },
    async cancelStarArticle() {
      const { data: res } = await cancelStarArticleAPI(this.id)
      if (res.status === 0) {
        this.$toast.success('取消点赞成功！')
        this.article.is_star = 0
      }
    }
  },
  created() {
    this.getArticleDetail()
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
