<template>
  <div class="inquiry-item">
    <div class="item-box van-hairline--surround">
      <div class="top">
        <div class="t-left">
          <van-image
            round
            width="40px"
            height="40px"
            :src="question.questioner_pic"
          />
          <span>{{question.questioner_name}}</span>
        </div>
        <div class="t-right">
          <span class="item-text">{{question.time}}</span>
        </div>
      </div>
      <div class="main">
        <div class="m-top van-multi-ellipsis--l3">{{question.content}}</div>
        <div class="m-bottom"><span class="item-tag">#{{question.tag_name}}</span></div>
      </div>
      <div class="bottom">
        <div class="b-left"><span class="item-text">{{question.read_num}}阅读&nbsp;&nbsp;&nbsp;&nbsp; {{question.reply_num}}回答</span></div>
        <div class="b-right">
          <van-icon class-prefix="iconfont icon-wolaihuida" name="icon-wolaihuida" @click="gotoAnswer">去回答</van-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { updateReadNumberAPI } from '@/api/otherAPI'
export default {
  name: 'InquiryItem',
  props: {
    // 提问信息的信息对象
    question: {
      type: Object,
      required: true
    }
  },
  methods: {
    async gotoAnswer() {
      const { data: res } = await updateReadNumberAPI(this.question.id)
      if (res.status === 0) {
        this.$router.push('/home/community/detail/' + this.question.id)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.inquiry-item{
  .item-box{
    padding: 10px 20px;
    .top{
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      .t-left{
        display: flex;
        align-items: center;
        span{
          margin-left: 10px;
        }
      }
    }
    .main{
      padding: 10px 20px;
      background-color: #8e9eab2b;
      .m-top{
        min-height: 50px;
        word-wrap: break-word;
        word-break: normal;
      }
      .m-bottom{
        margin-top: 10px;
        .item-tag{
          padding: 0 5px;
          border-radius: 8px;
          background-color: rgba(204, 193, 193, 0.555);
          font-size: 14px;
          color: #94979b;
        }
      }
    }
    .bottom{
      margin: 10px 0;
      display: flex;
      justify-content: space-between;
      .b-right{
        color: blue;
      }
    }
    .item-text{
      font-size: 14px;
      color: #94979b;
    }
  }
}
</style>
