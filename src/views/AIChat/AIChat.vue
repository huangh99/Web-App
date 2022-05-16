<template>
  <div class="chat-box">
    <van-nav-bar
      title="智能交流"
      left-text="返回"
      left-arrow
      fixed
      placeholder
      @click-left="$router.back()"
    />
    <div class="chat-content">
      <ChatItem v-for="(item,index) in chatList" :key="index" :chatInfo="item"></ChatItem>
    </div>
    <van-tabbar
      placeholder
    >
      <div class="bottom">
        <van-field
          type="textarea"
          rows="1"
          autosize
          v-model.trim="value"
          placeholder="在这里输入文字"
      />
        <van-button type="primary" @click="sendInfo">发送</van-button>
      </div>
    </van-tabbar>
  </div>
</template>

<script>
import ChatItem from '@/components/ChatItem/ChatItem'
import { getReplyAPI } from '@/api/otherAPI'
import { animate } from 'popmotion'
export default {
  name: 'AIChat',
  components: {
    ChatItem
  },
  data() {
    return {
      value: '',
      chatList: [{
        type: 1,
        content: '你好，我是喵喵，我会讲笑话，查歌词，查天气，查成语，还会算数哦！快来和我聊天吧！'
      }]
    }
  },
  methods: {
    sendInfo() {
      if (this.value) {
        const info = {}
        info.type = 0
        info.content = this.value
        this.chatList.push(info)
        this.message = this.value
        this.value = ''
        this.getReply()
      }
    },
    scrollToBottom() {
      // 1. 当前滚动条的位置
      const now = window.scrollY
      // 2. 目标位置（对话区域的高度）
      const dist = document.querySelector('.chat-content').offsetHeight
      // 3. 实现滚动动画
      animate({
        from: now, // 当前的位置
        to: dist, // 目标位置
        onUpdate: latest => window.scrollTo(0, latest)
      })
    },
    async getReply() {
      const { data: res } = await getReplyAPI(this.message)
      if (res.status === 0) {
        const reply = {}
        reply.type = 1
        reply.content = res.data
        this.chatList.push(reply)
        this.message = ''
      }
    }
  },
  watch: {
    chatList() {
      this.scrollToBottom()
    }
  }
}
</script>

<style lang="less" scoped>
.chat-box{
  position: absolute;
  width: 100%;
  min-height: 100%;
  background-color: rgba(225,225,225,1);
  /deep/.van-nav-bar{
    background-color:  #243B55;
    .van-nav-bar__title,.van-nav-bar__text,.van-icon{
      color: #fff;
    }
  }
  .chat-content{
    padding-top: 20px;
  }
  /deep/.van-tabbar{
    height: 60px;
    .bottom{
      width: 100%;
      display: flex;
      padding: 10px 10px;
      background-color: #8e9eab;
      .van-cell{
        border-radius: 20px;
        margin-right: 10px;
      }
      .van-button{
        width: 80px;
      }
    }
  }
}
</style>
