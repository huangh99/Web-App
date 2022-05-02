<template>
  <div class="community-box">
    <van-nav-bar
      title="社区问答"
      left-text="返回"
      left-arrow
      fixed
      placeholder
      @click-left="$router.back()"
    >
      <template #right>
        <van-button round icon-prefix="iconfont icon-tubiaozhuanqu-09" icon="icon-tubiaozhuanqu-09"  color="linear-gradient(to right, #45B649, #64f38c)" to="/home/community/inquiry">提 问</van-button>
      </template>
    </van-nav-bar>
    <!-- 列表内容 -->
    <van-list
      v-model="loading"
      :finished="finished"
      :immediate-check="false"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <InquiryItem v-for="item in inquiryList" :key="item.id" :question="item"></InquiryItem>
    </van-list>
  </div>
</template>

<script>
import InquiryItem from '@/components/InquiryItem/InquiryItem'
import { getInquiryListAPI } from '@/api/otherAPI'
export default {
  name: 'Community',
  components: {
    InquiryItem
  },
  data() {
    return {
      inquiryList: [],
      loading: true,
      finished: false,
      page: 1
    }
  },
  methods: {
    onLoad() {
      this.getList()
    },
    async getList() {
      const { data: res } = await getInquiryListAPI(this.page)
      if (res.status === 0) {
        this.inquiryList = [...this.inquiryList, ...res.data]
        this.page++
        this.loading = false
      } else {
        this.finished = true
      }
    }
  },
  mounted() {
    this.getList()
  }
}
</script>

<style lang="less" scoped>
.community-box{
  /deep/.van-nav-bar{
    background-color:  rgba(225,225,225);
    .van-nav-bar__text,.van-icon{
      color: #000;
    }
    .van-button{
      height: 36px;
    }
  }
}
</style>
