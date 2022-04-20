<template>
  <div class="question-box">
    <div class="top">
      <van-nav-bar
        title="答题详情"
        left-text="返回"
        :border="false"
        fixed
        left-arrow
        @click-left="onClickLeft"
        >
      </van-nav-bar>
      <van-progress :percentage="(current+1)*10" :show-pivot="false"/>
      <p class="question_text">{{current+1}}、{{currentQuestion.title}}</p>
      <p class="answer_text"><span>正确答案：{{currentQuestion.answer}}</span> <span>你的答案：{{answerList[current]}}</span></p>
    </div>
    <div class="bottom">
      <div class="optionBox">
        <van-row type="flex" align="center" :class="{isActive:answerList[current]==='A',isRight:currentQuestion.answer==='A'}">A、{{currentQuestion.option_A}}</van-row>
        <van-row type="flex" align="center" :class="{isActive:answerList[current]==='B',isRight:currentQuestion.answer==='B'}">B、{{currentQuestion.option_B}}</van-row>
        <van-row type="flex" align="center" :class="{isActive:answerList[current]==='C',isRight:currentQuestion.answer==='C'}">C、{{currentQuestion.option_C}}</van-row>
        <van-row type="flex" align="center" :class="{isActive:answerList[current]==='D',isRight:currentQuestion.answer==='D'}">D、{{currentQuestion.option_D}}</van-row>
      </div>
      <van-row gutter="10" type="flex" justify="center">
        <van-col>
          <van-button type="info" v-if="current!=0" @click="previous">上 一 题</van-button>
        </van-col>
        <van-col>
          <van-button type="info" v-if="current!=9" @click="next">下 一 题</van-button>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Questions',
  data() {
    return {
      current: 0,
      currentQuestion: []
    }
  },
  methods: {
    previous() {
      this.current--
      this.currentQuestion = this.questionList[this.current]
    },
    next() {
      this.current++
      this.currentQuestion = this.questionList[this.current]
    },
    onClickLeft() {
      this.$router.push('/home')
    }
  },
  computed: {
    ...mapState(['questionList', 'answerList'])
  },
  created() {
    this.currentQuestion = this.questionList[this.current]
  }
}
</script>

<style lang="less" scoped>
.question-box{
  .top{
    padding-top: 55px;
    height: 250px;
    width: 100%;
    box-sizing: border-box;
    background-image: linear-gradient(#4e54c8, #8f94fb);
    .van-nav-bar{
      background-color: rgba(255, 255, 255, 0);
      /deep/.van-nav-bar__title,/deep/.van-nav-bar__text,/deep/.van-icon{
        color: #fff;
      }
    }
    .question_text{
      margin:30px 30px;
      font-size: 20px;
      color: #fff;
      word-break: break-all;
    }
    .answer_text{
      margin: 0 30px;
      display: flex;
      span{
        // margin-right: 30px;
        flex: 1;
        color: #fff;
      }
    }
  }
  .bottom{
    margin-top: -30px;
    text-align: center;
    .optionBox{
      .van-row{
        margin: 0 20px 20px;
        padding: 0 10px;
        height: 70px;
        border-radius: 8px;
        box-shadow: 0px 0px 10px #576B95;
        background-color: #fff;
        word-break: break-all;
      }
      .isActive{
        background-color: #576B95;
      }
      .isRight{
        background-color: #00F260;
      }
    }
  }
}
</style>
