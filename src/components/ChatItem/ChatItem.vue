<template>
  <div class="chat-item">
    <div class="reply-box" v-if="chatInfo.type==1">
      <div class="left">
        <van-image
          round
          width="40px"
          height="40px"
          :src="require('@/assets/images/cat.jpeg')"
        />
      </div>
      <div class="right">
        <div class="content" v-html="chatInfo.content"></div>
      </div>
    </div>
    <div class="send-box" v-else>
      <div class="left">
        <div class="content">{{chatInfo.content}}</div>
      </div>
      <div class="right">
        <van-image
          v-if="icon"
          round
          width="40px"
          height="40px"
          :src="icon"
        />
        <van-image
          v-else
          round
          width="40px"
          height="40px"
          :src="require('@/assets/images/default_user_pic.jpeg')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getUserInfoAPI } from '@/api/userAPI'
export default {
  name: 'ChatItem',
  props: {
    chatInfo: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      icon: ''
    }
  },
  methods: {
    async getUserInfo() {
      const { data: res } = await getUserInfoAPI()
      if (res.status === 0) {
        this.icon = res.data.user_pic
      }
    }
  },
  created() {
    this.getUserInfo()
  }
}
</script>

<style lang="less" scoped>
.chat-item{
  .reply-box{
    display: flex;
    margin: 0px 20px 20px;
    .left{
      margin-right: 20px;
    }
    .right{
      position: relative;
      .content{
        position: relative;
        margin-top: 8px;
        padding: 5px 15px 5px 10px;
        max-width: 240px;
        box-sizing: border-box;
        background-color: #fff;
        border-radius: 4px;
        line-height: 22px;
        color: #000;
        word-wrap: break-word;
        &::before{
          content: '';
          position: absolute;
          top: 3px;
          left: -19px;
          border-top: 10px solid rgba(0, 128, 0, 0);
          border-right: 10px solid #fff;
          border-bottom: 10px solid rgba(0, 128, 0, 0);
          border-left: 10px solid rgba(0, 128, 0, 0);
        }
      }
    }
  }
  .send-box{
    display: flex;
    justify-content: flex-end;
    margin: 0px 20px 20px;
    .right{
      margin-left: 20px;
    }
    .left{
      position: relative;
      .content{
        position: relative;
        margin-top: 8px;
        padding: 5px 10px 5px 20px;
        max-width: 240px;
        box-sizing: border-box;
        background-color: #fff;
        border-radius: 4px;
        line-height: 22px;
        color: #000;
        word-wrap: break-word;
        &::before{
          content: '';
          position: absolute;
          top: 3px;
          right: -19px;
          border-top: 10px solid rgba(0, 128, 0, 0);
          border-right: 10px solid rgba(0, 128, 0, 0);
          border-bottom: 10px solid rgba(0, 128, 0, 0);
          border-left: 10px solid #fff;
        }
      }
    }
  }
}
</style>
