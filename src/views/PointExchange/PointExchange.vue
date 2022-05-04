<template>
  <div class="exchange-box">
    <van-sticky class="fixed-box">
      <van-nav-bar
        title="积分兑换"
        left-text="返回"
        left-arrow
        fixed
        :border="false"
        @click-left="$router.back()"
      />
      <div class="top"></div>
      <div class="title">
        <div class="title-text">我的积分</div>
        <div class="point-text">{{pointNum}}</div>
        <div class="tip-text">积分可通过签到或答题获取！</div>
      </div>
    </van-sticky>
    <div class="bottom">
      <div class="b-content">
        <div class="content-item" v-for="item in exchangeList" :key="item.id">
          <div class="left">
            <van-image
              width="160px"
              height="100px"
              fit="cover"
              :src="item.icon"
            />
          </div>
          <div class="right">
            <div class="r-top">
              <div class="r-title  van-multi-ellipsis--l2">{{item.title}}</div>
              <div class="r-price">{{item.point}}积分</div>
            </div>
            <div class="r-btn">
              <van-button v-if="item.is_exchange" size="small" disabled color="linear-gradient(to right, #ff6034, #ee0a24)">已兑换</van-button>
              <van-button v-else size="small" color="linear-gradient(to right, #ff6034, #ee0a24)" @click="handleExchange(item)">去兑换</van-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getExchangeListAPI, addPointExchangeAPI } from '@/api/otherAPI'
import { getUserInfoAPI } from '@/api/userAPI'
import { Toast } from 'vant'
export default {
  name: 'PointExchange',
  data() {
    return {
      exchangeList: [],
      pointNum: 0
    }
  },
  methods: {
    handleExchange(item) {
      if (this.pointNum >= item.point) {
        this.addExchange(item.id, item.point)
      } else {
        Toast({
          message: '积分不足',
          type: 'fail',
          forbidClick: true
        })
      }
    },
    async getExchangeList() {
      const { data: res } = await getExchangeListAPI()
      if (res.status === 0) {
        this.exchangeList = res.data
      }
    },
    async getUserInfo() {
      const { data: res } = await getUserInfoAPI()
      if (res.status === 0) {
        this.pointNum = res.data.point_num
      }
    },
    async addExchange(id, point) {
      const { data: res } = await addPointExchangeAPI(id, point)
      if (res.status === 0) {
        Toast({
          message: '兑换成功',
          type: 'success',
          forbidClick: true,
          onOpened: () => {
            this.pointNum = this.pointNum - point
            this.getExchangeList()
          }
        })
      }
    }
  },
  created() {
    this.getExchangeList()
    this.getUserInfo()
  }
}
</script>

<style lang="less" scoped>
.exchange-box{
  position: absolute;
  width: 100%;
  min-height: 100%;
  background-color: #8e9eab2b;
  .fixed-box{
    /deep/.van-nav-bar{
      background-color: rgba(255, 255, 255, 0);
      .van-nav-bar__title,.van-nav-bar__text,.van-icon{
        color: #fff;
      }
    }
    .top{
      height: 160px;
      box-sizing: border-box;
      background: linear-gradient(135deg,#606c88,#3f4c6b);
    }
    .title{
      height: 150px;
      margin: -90px 20px 0px;
      box-sizing: border-box;
      border-radius: 10px;
      box-shadow: 0px 2px 10px 0px #829dd687;
      background: linear-gradient(to right,#859398,#8e9eab, #eef2f3);
      .title-text{
        padding: 10px;
        font-size: 14px;
        color: #fff;
      }
      .point-text{
        margin-bottom: 16px;
        font-size: 44px;
        color: #fff;
        text-align: center;
      }
      .tip-text{
        padding: 10px;
        border-top: 1px solid #fff;
        font-size: 14px;
        color: rgb(255, 236, 236);
      }
    }
  }
  .bottom{
    padding: 10px 20px;
    .b-content{
      padding: 10px;
      border-radius: 10px;
      background-color: #fff;
      .content-item{
        display: flex;
        margin-bottom: 10px;
        .right{
          display: flex;
          width: 100%;
          margin-left: 10px;
          flex-direction: column;
          justify-content: space-between;
          .r-top{
            width: 100%;
            // .r-title{
            //   // width: 150px;
            //   // background-color: red;
            // }
            .r-price{
              margin-top: 5px;
              font-size: 14px;
              color: red;
              text-align: center;
            }
          }
          .r-btn{
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
