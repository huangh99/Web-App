<template>
  <div class="answer-item">
    <div class="item-box">
      <div class="left">
        <van-image
            round
            width="40px"
            height="40px"
            :src="answerInfo.answerer_pic"
        />
      </div>
      <div class="right van-hairline--bottom">
        <div class="top">
          <span>{{answerInfo.answerer_name}}</span>
          <span class="date">{{answerInfo.time}}</span>
        </div>
        <div class="content">{{answerInfo.content}}</div>
        <div class="bottom">
          <div class="star">
            <van-icon v-if="is_star" class-prefix="iconfont icon-good" name="icon-good" color="red" @click="handleCancelStar" />
            <van-icon v-else class-prefix="iconfont icon-good" name="icon-good" @click="handleStar" />
            <span> {{star_num}} </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { starAnswerAPI, cancelStarAnswerAPI } from '@/api/otherAPI'
import { Toast } from 'vant'
export default {
  name: 'AnswerItem',
  props: {
    // 回答信息的信息对象
    answerInfo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      is_star: 0,
      star_num: 0
    }
  },
  methods: {
    handleStar() {
      this.star()
    },
    handleCancelStar() {
      this.cancelStar()
    },
    async star() {
      const { data: res } = await starAnswerAPI(this.answerInfo.id)
      if (res.status === 0) {
        this.is_star = 1
        this.star_num++
        Toast({
          message: '点赞成功',
          type: 'success'
        })
      }
    },
    async cancelStar() {
      const { data: res } = await cancelStarAnswerAPI(this.answerInfo.id)
      if (res.status === 0) {
        this.is_star = 0
        this.star_num--
        Toast({
          message: '取消点赞成功',
          type: 'success'
        })
      }
    }
  },
  created() {
    this.is_star = this.answerInfo.is_star
    this.star_num = this.answerInfo.star_num
  }
}
</script>

<style lang="less" scoped>
.answer-item{
  padding: 10px 20px;
  .item-box{
    display: flex;
    .right{
      width: 100%;
      margin: 0 10px 0 20px;
      .top{
        display: flex;
        justify-content: space-between;
        .date{
          font-size: 14px;
          color: #94979b;
        }
      }
      .content{
        margin: 10px 0;
        min-height: 60px;
      }
      .bottom{
        display: flex;
        justify-content: right;
        span{
          font-size: 14px;
          color: #94979b;
        }
      }
    }
  }
}
</style>
