<template>
  <div class="results-box">
    <van-nav-bar
      title="得分"
      left-text="返回"
      :border="false"
      fixed
      left-arrow
      placeholder
      @click-left="onClickLeft"
      >
    </van-nav-bar>
    <div class="top">
      <van-image
        width="100%"
        height="200"
        :src="require('@/assets/images/banner图.jpeg')"
      />
    </div>
    <div class="bottom">
      <van-row class="imgBox">
        <van-col>
          <van-image
            round
            width="70px"
            height="70px"
            :src="userInfo.icon"
            v-if="userInfo.icon"
          />
          <van-image
            round
            width="70px"
            height="70px"
            :src="require('@/assets/images/default_user_pic.jpeg')"
            v-else
          />
        </van-col>
        <van-col class="username">
          <p>{{userInfo.name}}</p>
        </van-col>
      </van-row>
      <div class="type_text"><span>类别:{{questionList[0].cate_name}}</span><div class="triangle"></div></div>
      <div class="scoreBox">
        <div class="score_top"><span class="item">得分：</span><span class="item_count">{{score}}</span></div>
        <van-row class="score_bottom">
          <van-col span="8" class="van-hairline--right">
            <van-row><span class="item_count">{{total_num}}</span></van-row>
            <van-row><span class="item">答题数</span></van-row>
          </van-col>
          <van-col span="8" class="van-hairline--right">
            <van-row><span class="item_count">{{right_num}}</span></van-row>
            <van-row><span class="item">正确</span></van-row>
          </van-col>
          <van-col span="8">
            <van-row><span class="item_count">{{wrong_num}}</span></van-row>
            <van-row><span class="item">错误</span></van-row>
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="btn-box">
      <van-button plain type="info" to="/home/questions/detail">查看详情</van-button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getUserInfoAPI } from '@/api/userAPI'
export default {
  name: 'AnswerResults',
  data() {
    return {
      userInfo: {
        name: '',
        icon: ''
      },
      total_num: 10
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push('/home')
    },
    async getUserInfo() {
      const { data: res } = await getUserInfoAPI()
      if (res.status === 0) {
        this.userInfo.name = res.data.nickname ? res.data.nickname : res.data.username
        this.userInfo.icon = res.data.user_pic
      }
    }
  },
  computed: {
    ...mapState(['questionList', 'answerList']),
    score() {
      const score = this.right_num * 10
      return score
    },
    right_num() {
      let num = 0
      for (let i = 0; i < this.answerList.length; i++) {
        if (this.questionList[i].answer === this.answerList[i]) { num++ }
      }
      return num
    },
    wrong_num() {
      const num = this.total_num - this.right_num
      return num
    }
  },
  created() {
    this.getUserInfo()
  }
}
</script>

<style lang="less" scoped>
.results-box{
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('../../../assets/images/背景图.jpeg');
  background-size: 100% 100%;
  opacity: .8;
  .bottom{
    margin: 10px 30px 20px;
    height: 300px;
    border-radius: 8px;
    background-image: linear-gradient(#2c2761, #302b63,#2f2b5c);
    .imgBox{
      padding: 10px 10px;
      .username{
        margin: 10px;
        color: #fff;
      }
    }
    .type_text{
      position: relative;
      width: 120px;
      height: 20px;
      padding-left: 15px;
      background-color: #fff;
      color: #0575E6;
      span{
        letter-spacing:2px;
      }
      .triangle{
        position: absolute;
        top: 0px;
        right: -20px;
        width: 0px;
        height: 0px;
        border-top: 10px solid #fff;
        border-right: 10px solid rgba(0, 0, 0, 0);
        border-bottom: 10px solid #fff;
        border-left: 10px solid #fff;
      }
    }
    .scoreBox{
      margin: 10px;
      border-radius: 8px;
      background-color: #4e54c8;
      .item{
        color: blue;
      }
      .item_count{
        color: #0575E6;
        font-weight: 700;
      }
      .score_top{
        height: 60px;
        background-color: #fff;
        border-radius: 8px 8px 0px 0px;
        text-align: center;
        line-height: 60px;
      }
      .score_bottom{
        margin-top: 20px;
        background-color: #fff;
        border-radius: 0px 0px 8px 8px;
        text-align: center;
        .van-row{
          padding: 5px;
        }
      }
    }
  }
  .btn-box{
    width: 100%;
    text-align: center;
  }
}
</style>
