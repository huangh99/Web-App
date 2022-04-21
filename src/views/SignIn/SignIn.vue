<template>
  <div class="sign-box">
    <navBar title="签到"></navBar>
    <div class="sign-top">
      <div class="button goToSign" v-if="!is_sign" @click="Sign">
        <van-icon name="sign" color="#fff"/>
        <div>去签到</div>
      </div>
      <div class="button" v-else>
        <van-icon name="sign" color="#fff"/>
        <div>已签到</div>
      </div>
      <div>已累计签到{{total_days}}天，{{currentMonth}}月签到{{month_signDays}}天，继续加油!</div>
    </div>
    <div class="calendar-box">
      <div class="calendar-main">
        <van-icon class="arrow-left" name="arrow-left" @click="arrowLeft" />
        <van-icon class="arrow-right" name="arrow" v-if="isShowRight" @click="arrowRight" />
        <van-calendar
        row-height="40"
        color="#1989fa"
        readonly
        :poppable="false"
        :min-date="minDate"
        :max-date="maxDate"
        :title="`${currentYear}年${currentMonth}月`"
        type="multiple"
        :default-date="signDays"
        :show-subtitle="false"
        :show-confirm="false"
        />
      </div>
    </div>
    <div class="role">
      <div class="role-title">签到规则</div>
      <div class="role-content">每天签到可获得5个积分</div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar'
import moment from 'moment'
import { setSignInAPI, getSignInAPI } from '@/api/otherAPI'
export default {
  name: 'SignIn',
  components: {
    NavBar
  },
  data() {
    return {
      currentDate: new Date(),
      show: true,
      is_sign: false,
      isShowRight: false,
      total_days: 0,
      month_signDays: 0,
      signDays: []
    }
  },
  computed: {
    currentYear() {
      return this.currentDate.getFullYear()
    },
    currentMonth() {
      return this.currentDate.getMonth() + 1
    },
    minDate() {
      return moment(this.currentDate).startOf('month')._d
    },
    maxDate() {
      return moment(this.currentDate).endOf('month')._d
    }
  },
  methods: {
    arrowLeft() {
      this.currentDate = moment(this.currentDate).month(moment(this.currentDate).month() - 1).endOf('month')._d
      this.isShowRight = true
      this.getSignIn()
    },
    arrowRight() {
      this.currentDate = moment(this.currentDate).month(moment(this.currentDate).month() + 1).endOf('month')._d
      if (moment().diff(this.currentDate) > 0) {
        this.isShowRight = true
      } else {
        this.isShowRight = false
      }
      this.getSignIn()
    },
    Sign() {
      this.currentDate = new Date()
      this.isShowRight = false
      this.setSignIn()
    },
    async setSignIn() {
      const date = moment().format('YYYY-MM-DD')
      const { data: res } = await setSignInAPI(date)
      if (res.status === 0) {
        this.getSignIn()
      }
    },
    async getSignIn() {
      const { data: res } = await getSignInAPI(this.currentMonth, this.currentYear)
      if (res.status === 0) {
        const dateArr = []
        res.data.days.forEach((item) => {
          dateArr.push(moment(item.date)._d)
        })
        this.signDays = dateArr
        this.total_days = res.data.total_days
        this.month_signDays = dateArr.length
        this.is_sign = res.data.is_sign
      }
    }
  },
  created() {
    this.getSignIn()
    //   const today = new Date()
  //   // this.currentYear = today.getFullYear()
  //   // this.currentMonth = today.getMonth() + 1
  //   // this.currentDate = today.getDate()
  //   this.minDate = moment(today).startOf('month')._d
  //   this.maxDate = moment(today).endOf('month')._d
  }
}
</script>

<style lang="less" scoped>
.sign-box{
  position: absolute;
  height: 100%;
  background-color:  rgba(225,225,225,0.7);
  // text-align: center;
  .sign-top {
    background: url('../../assets/images/sign_in_bgimage.jpeg') no-repeat 0 0;
    background-size: 100% 100%;
    overflow: hidden;
    color: #ffffff;
    padding: 15px;
    height: 120px;
    text-align: center;
    .button {
      display: flex;
      justify-content: center;
      border: 1px solid #ffffff;
      border-radius: 20px;
      color: #ffffff;
      font-size: 18px;
      width: 120px;
      margin: 0 auto 10px;
      height: 40px;
      line-height: 40px;
      .van-icon-sign{
        margin: 10px;
      }
    }
    .goToSign:active {
      background-color: #5283c4;
      opacity: 0.8;
    }
  }
  .calendar-box{
    margin: -25px 30px 0px;
    // padding: -25px 30px 0px;
    // padding: 10px 30px;
    .calendar-main{
    position: relative;
      width: 100%;
      .arrow-left{
        position: absolute;
        top: 14px;
        left: 55px;
      }
      .arrow-right{
        position: absolute;
        top: 14px;
        right: 55px;
      }
      .van-calendar{
        border-radius: 8px;
        /deep/.van-calendar__month-title{
          display: none;
        }
        /deep/.van-calendar__day--multiple-selected,/deep/.van-calendar__day--start,/deep/.van-calendar__day--end{
          border-radius: 50%;
        }
      }
    }
  }
  .role {
    padding: 20px 30px;
    .role-title {
      margin-bottom: 5px;
      font-weight: bold;
    }
    .role-content {
      font-size: 13px;
      color: #333333;
    }
  }
}
</style>
