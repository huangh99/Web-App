<template>
  <div :class="isShowBox1 ? 'art-cmt-container-1' : 'art-cmt-container-2'">
    <!-- 评论列表 -->
    <div class="cmt-list">
      <!-- 评论的 Item 项 -->
      <div class="cmt-item" v-for="item in commentList" :key="item.id">
        <!-- 头部区域 -->
        <div class="cmt-header">
          <!-- 头部左侧 -->
          <div class="cmt-header-left">
            <img :src="item.commentator_pic" alt="" class="avatar">
            <span class="uname">{{item.commentator_name}}-----{{item.id}}</span>
          </div>
          <!-- 头部右侧 -->
          <div class="cmt-header-right">
            <van-icon name="like" size="16" color="red" v-if="item.is_star" @click="cancelLike(item)" />
            <van-icon name="like-o" size="16" color="gray" v-else @click="addLike(item)" />
          </div>
        </div>
        <!-- 主体区域 -->
        <div class="cmt-body">
          {{item.content}}
        </div>
        <!-- 尾部区域 -->
        <div class="cmt-footer">{{item.comment_time}}</div>
      </div>
    </div>
    <!-- 底部添加评论区域 - 1 -->
    <div class="add-cmt-box van-hairline--top" v-if="isShowBox1">
      <van-icon name="arrow-left" size="18" @click="$router.back()" />
      <div class="ipt-cmt-div"  @click="showBox2">发表评论</div>
      <div class="icon-box">
        <van-badge :content="comment_count" :max="99">
          <van-icon name="comment-o" size="20" @click="scrollToCmtList" />
        </van-badge>
        <van-icon name="star-o" size="20" />
        <van-icon name="share-o" size="20" />
      </div>
    </div>
    <!-- 底部添加评论区域 - 2 -->
    <div class="cmt-box van-hairline--top" v-else>
      <textarea placeholder="友善评论、理性发言、阳光心灵" ref="iptCmt" v-model.trim="commentContent" @blur="showBox1"></textarea>
      <van-button type="default" :disabled="commentContent.length === 0" @click="publish">发布</van-button>
    </div>
  </div>
</template>

<script>
import { getCommentsAPI, postCommentAPI, addCommentLikeAPI, cancelCommentLikeAPI } from '@/api/videoAPI'
// 从 popmotion 中按需导入 animate 动画函数
import { animate } from 'popmotion'
export default {
  name: 'VideoComment',
  data() {
    return {
      isShowBox1: true,
      commentContent: '',
      comment_count: 0,
      commentList: []
    }
  },
  props: {
    // 视频的 Id
    videoId: {
      type: [String, Number],
      required: true
    }
  },
  methods: {
    showBox2() {
      this.isShowBox1 = false
      this.$nextTick(() => {
        // 2. 通过 ref 获取到 textarea 的引用
        this.$refs.iptCmt.focus()
      })
    },
    showBox1() {
      setTimeout(() => {
        // 隐藏第二个评论区域
        this.isShowBox1 = true
        // 清空用户输入的评论内容
        this.commentContent = ''
      }, 100)
    },
    publish() {
      this.postComment()
    },
    cancelLike(item) {
      this.cancelStar(item.id)
      item.is_star = 0
    },
    addLike(item) {
      this.addStar(item.id)
      item.is_star = 1
    },
    scrollToCmtList() {
      // 1. 当前滚动条的位置
      const now = window.scrollY
      // 2. 目标位置（文章信息区域的高度）
      const dist = document.querySelector('.article-container').offsetHeight
      // 3. 实现滚动动画
      animate({
        from: now, // 当前的位置
        to: dist, // 目标位置
        onUpdate: latest => window.scrollTo(0, latest)
      })
    },
    async getCommentList() {
      const { data: res } = await getCommentsAPI(this.videoId)
      if (res.status === 0) {
        this.commentList = res.data
        this.comment_count = this.commentList.length
      }
    },
    async postComment() {
      const { data: res } = await postCommentAPI(this.videoId, this.commentContent)
      if (res.status === 0) {
        this.getCommentList().then(() => {
          this.$toast.success('发表评论成功')
        })
      }
    },
    async addStar(item) {
      const { data: res } = await addCommentLikeAPI(item)
      if (res.status === 0) {
        this.$toast.success('点赞成功')
      }
    },
    async cancelStar(item) {
      const { data: res } = await cancelCommentLikeAPI(item)
      if (res.status === 0) {
        this.$toast.success('取消点赞成功')
      }
    }
  },
  created() {
    this.getCommentList()
  }
}
</script>

<style lang="less" scoped>
.cmt-list {
  padding: 10px;
  .cmt-item {
    padding: 15px 0;
    + .cmt-item {
      border-top: 1px solid #f8f8f8;
    }
    .cmt-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .cmt-header-left {
        display: flex;
        align-items: center;
        .avatar {
          width: 40px;
          height: 40px;
          background-color: #f8f8f8;
          border-radius: 50%;
          margin-right: 15px;
        }
        .uname {
          font-size: 12px;
        }
      }
    }
    .cmt-body {
      font-size: 14px;
      line-height: 28px;
      text-indent: 2em;
      margin-top: 6px;
      word-break: break-all;
    }
    .cmt-footer {
      font-size: 12px;
      color: gray;
      margin-top: 10px;
    }
  }
}
// 外层容器
.art-cmt-container-1 {
  padding-bottom: 46px;
}
.art-cmt-container-2 {
  padding-bottom: 80px;
}

// 发布评论的盒子 - 1
.add-cmt-box {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 46px;
  line-height: 46px;
  padding-left: 10px;
  .ipt-cmt-div {
    flex: 1;
    border: 1px solid #efefef;
    border-radius: 15px;
    height: 30px;
    font-size: 12px;
    line-height: 30px;
    padding-left: 15px;
    margin-left: 10px;
    background-color: #f8f8f8;
  }
  .icon-box {
    width: 40%;
    display: flex;
    justify-content: space-evenly;
    line-height: 0;
  }
}

.child {
  width: 20px;
  height: 20px;
  background: #f2f3f5;
}

// 发布评论的盒子 - 2
.cmt-box {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  padding-left: 10px;
  box-sizing: border-box;
  background-color: white;
  textarea {
    flex: 1;
    height: 66%;
    border: 1px solid #efefef;
    background-color: #f8f8f8;
    resize: none;
    border-radius: 6px;
    padding: 5px;
  }
  .van-button {
    height: 100%;
    border: none;
  }
}
</style>
