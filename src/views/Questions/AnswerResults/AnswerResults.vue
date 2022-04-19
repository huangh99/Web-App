<template>
  <div class="results-box">
    <van-nav-bar
      title="标题"
      left-text="返回"
      :border="false"
      fixed
      left-arrow
      @click-left="onClickLeft"
      >
    </van-nav-bar>
    <div class="top"></div>
    <div class="bottom">
      <van-row class="imgBox">
        <van-col>
          <van-image
            round
            width="70px"
            height="70px"
            :src="require('@/assets/default_user_pic.jpeg')"
          />
        </van-col>
        <van-col class="username">
          <p>123</p>
        </van-col>
      </van-row>
      <div class="type_text"></div>
      <div class="scoreBox">
        <div class="score_top"><span class="item">得分：</span><span class="item_count">100</span></div>
        <van-row class="score_bottom">
          <van-col span="8" class="van-hairline--right">
            <van-row><span class="item_count">1</span></van-row>
            <van-row><span class="item">答题数</span></van-row>
          </van-col>
          <van-col span="8" class="van-hairline--right">
            <van-row><span class="item_count">1</span></van-row>
            <van-row><span class="item">正确</span></van-row>
          </van-col>
          <van-col span="8">
            <van-row><span class="item_count">1</span></van-row>
            <van-row><span class="item">错误</span></van-row>
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="btn-box">
      <van-button plain type="info">查看详情</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnswerResults',
  data() {
    return {}
  },
  methods: {
    onClickLeft() {}
  }
}
</script>

<style lang="less" scoped>
.results-box{
  position: absolute;
  background-color: #ddd;
  width: 100%;
  height: 100%;
  .top{
    height: 230px;
    background-color: #ababab;
  }
  .bottom{
    // width: ;
    margin: 10px 30px 20px;
    height: 300px;
    border-radius: 8px;
    background-color: blue;
    .imgBox{
      padding: 10px 10px;
      .username{
        margin: 10px;
        color: #fff;
      }
    }
    .type_text{
      width: 140px;
      height: 20px;
      background-color: #fff;
    }
    .scoreBox{
      margin: 10px;
      border-radius: 8px;
      background-color: rgb(17, 223, 216);
      .item{
        color: blue;
      }
      .item_count{
        color: red;
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
