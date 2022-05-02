<template>
  <div class="inquiry-detail">
    <van-nav-bar
      title="问题详情"
      left-text="返回"
      left-arrow
      fixed
      placeholder
      @click-left="$router.back()"
    />
    <div class="tag-box">
      <van-tag color="#ebedf0" text-color="#2c3e50" size="large">{{question.tag_name}}</van-tag>
    </div>
    <div class="content-box">
      <div class="top">{{question.content}}</div>
      <div class="bottom">
        <van-image
            round
            width="30px"
            height="30px"
            :src="question.questioner_pic"
        />
          <span>{{question.questioner_name}} · {{question.time}} · {{question.read_num}}阅读</span>
      </div>
    </div>
    <div class="answer-box">
      <div class="answer-top">
        <span>全部回答 {{question.reply_num}}</span>
      </div>
      <!-- 列表内容 -->
      <van-list
        v-model="loading"
        :finished="finished"
        :immediate-check="false"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <AnswerItem v-for="item in answerList" :key="item.id" :answerInfo="item"></AnswerItem>
      </van-list>
    </div>
    <van-tabbar placeholder >
      <van-button icon-prefix="iconfont icon-tiwen1" icon="icon-tiwen1" type="primary" size="large" @click="$router.push('/home/community/answer/' + id)">添加回答</van-button>
    </van-tabbar>
  </div>
</template>

<script>
import AnswerItem from '@/components/AnswerItem/AnswerItem'
import { getInquiryDetailAPI, getAnswerListAPI } from '@/api/otherAPI'
export default {
  name: 'InquiryDetail',
  components: {
    AnswerItem
  },
  props: ['id'],
  data() {
    return {
      question: {},
      answerList: [],
      loading: true,
      finished: false,
      page: 1
    }
  },
  methods: {
    onLoad() {
      this.getAnswerList()
    },
    async getQuestion() {
      const { data: res } = await getInquiryDetailAPI(this.id)
      if (res.status === 0) {
        this.question = res.data
      }
    },
    async getAnswerList() {
      const { data: res } = await getAnswerListAPI(this.id, this.page)
      if (res.status === 0) {
        this.answerList = [...this.answerList, ...res.data]
        this.page++
        this.loading = false
      } else {
        this.finished = true
      }
    }
  },
  created() {
    this.getQuestion()
    this.getAnswerList()
  }
}
</script>

<style lang="less" scoped>
.inquiry-detail{
  /deep/.van-nav-bar{
    background-color:  rgba(225,225,225);
    .van-nav-bar__text,.van-icon{
      color: #000;
    }
  }
  .tag-box{
    padding: 10px 20px;
    border-bottom: 1px solid #ebedf0;
  }
  .content-box{
    padding: 10px 20px;
    .top{
      min-height: 80px;
      margin-bottom: 20px;
    }
    .bottom{
      display: flex;
      align-items: center;
      span{
        padding-left: 10px;
        font-size: 14px;
        color: #94979b;
      }
    }
  }
  .answer-box{
    .answer-top{
      padding: 5px 20px;
      background-color: rgba(225,225,225);
      color: #2c3e50;
    }
  }
}
</style>
