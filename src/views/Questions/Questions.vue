<template>
  <div class="question-box">
    <div class="top">
      <van-nav-bar
        title="标题"
        left-text="返回"
        :border="false"
        fixed
        left-arrow
        @click-left="onClickLeft"
        >
        <template #right>
          <van-count-down ref="countDown" time="300000" format="倒计时：mm:ss" :auto-start="false" @finish="finish"/>
        </template>
      </van-nav-bar>
      <van-progress :percentage="(current+1)*10" :show-pivot="false"/>
      <p class="question_text">{{current+1}}、{{currentQuestion.title}}</p>
    </div>
    <div class="bottom">
      <div class="optionBox">
        <van-row type="flex" align="center" :class="{isActive:answers[current]==='A'}" @click="selectOption('A')">A、{{currentQuestion.option_A}}</van-row>
        <van-row type="flex" align="center" :class="{isActive:answers[current]==='B'}" @click="selectOption('B')">B、{{currentQuestion.option_B}}</van-row>
        <van-row type="flex" align="center" :class="{isActive:answers[current]==='C'}" @click="selectOption('C')">C、{{currentQuestion.option_C}}</van-row>
        <van-row type="flex" align="center" :class="{isActive:answers[current]==='D'}" @click="selectOption('D')">D、{{currentQuestion.option_D}}</van-row>
      </div>
      <van-row gutter="10" type="flex" justify="center">
        <van-col>
          <van-button type="info" v-if="current!=0" @click="previous">上 一 题</van-button>
        </van-col>
        <van-col>
          <van-button type="info" v-if="current!=9" @click="next">下 一 题</van-button>
        </van-col>
        <van-col>
          <van-button type="info" v-if="current===9" @click="submit">提交答案</van-button>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant'
export default {
  name: 'Questions',
  data() {
    return {
      answers: ['', '', '', '', '', '', '', '', '', ''],
      current: 0,
      currentQuestion: [],
      questionList: [{
        title: '现代计算机是根据（）提出的原理制造出来的',
        option_A: '莫奇莱',
        option_B: '艾仑.图灵',
        option_C: '乔治.布尔',
        option_D: '冯.诺曼依',
        answer: 'D'
      }, {
        title: '最适合信息管理的计算机语言是()',
        option_A: '汇编语言',
        option_B: '机器语言',
        option_C: 'FORTRAN语言',
        option_D: '数据库语言',
        answer: 'D'
      },
      {
        title: '第四代计算机，采用的电子器件为()',
        option_A: '集成电器',
        option_B: '晶体管',
        option_C: '电子管',
        option_D: '大规模集成电路',
        answer: 'D'
      }, {
        title: '最适合信息管理的计算机语言是()',
        option_A: '汇编语言',
        option_B: '机器语言',
        option_C: 'FORTRAN语言',
        option_D: '数据库语言',
        answer: 'D'
      }, {
        title: '最适合信息管理的计算机语言是()',
        option_A: '汇编语言',
        option_B: '机器语言',
        option_C: 'FORTRAN语言',
        option_D: '数据库语言',
        answer: 'D'
      }, {
        title: '最适合信息管理的计算机语言是()',
        option_A: '汇编语言',
        option_B: '机器语言',
        option_C: 'FORTRAN语言',
        option_D: '数据库语言',
        answer: 'D'
      }, {
        title: '最适合信息管理的计算机语言是()',
        option_A: '汇编语言',
        option_B: '机器语言',
        option_C: 'FORTRAN语言',
        option_D: '数据库语言',
        answer: 'D'
      }, {
        title: '最适合信息管理的计算机语言是()',
        option_A: '汇编语言',
        option_B: '机器语言',
        option_C: 'FORTRAN语言',
        option_D: '数据库语言',
        answer: 'D'
      }, {
        title: '最适合信息管理的计算机语言是()',
        option_A: '汇编语言',
        option_B: '机器语言',
        option_C: 'FORTRAN语言',
        option_D: '数据库语言',
        answer: 'D'
      }, {
        title: '最适合信息管理的计算机语言是()',
        option_A: '汇编语言',
        option_B: '机器语言',
        option_C: 'FORTRAN语言',
        option_D: '数据库语言',
        answer: 'D'
      }]
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
    submit() {
      this.$router.push('/home/questions/results')
    },
    selectOption(option) {
      this.$set(this.answers, this.current, option)
    },
    onClickLeft() {
      Dialog.confirm({
        title: '提示',
        message: '当前答题还未完成，是否退出？'
      })
        .then(() => {
          this.$router.back()
        })
        .catch(() => {
          // on cancel
        })
    },
    finish() {
      Dialog.alert({
        title: '提示',
        message: '时间到！'
      }).then(() => {

      })
    }
  },
  created() {
    this.currentQuestion = this.questionList[this.current]
    Dialog.alert({
      title: '提示',
      message: '点击确认开始答题，5分钟时间倒计时！'
    }).then(() => {
      this.$refs.countDown.start()
    })
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
      /deep/.van-nav-bar__title,/deep/.van-nav-bar__text,/deep/.van-icon,.van-count-down{
        color: #fff;
      }
    }
    .question_text{
      margin:30px 30px;
      font-size: 20px;
      color: #fff;
      word-break: break-all;
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
    }
  }
}
</style>
