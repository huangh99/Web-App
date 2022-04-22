<template>
  <div class="list-box">
    <!-- 列表内容 -->
    <van-list
      v-model="loading"
      :finished="finished"
      :immediate-check="false"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <VideoItem v-for="item in videoList" :key="item.id" :video="item"></VideoItem>
    </van-list>
  </div>
</template>

<script>
import { getVideoInfoAPI } from '@/api/videoAPI'
import VideoItem from '@/components/VideoItem/VideoItem'
export default {
  name: 'VideoList',
  components: {
    VideoItem
  },
  props: {
    cateId: {
      type: Number, // 数值类型
      required: true // 必填项
    }
  },
  data() {
    return {
      videoList: [],
      loading: true,
      finished: false,
      page: 1
    }
  },
  methods: {
    async getList() {
      const { data: res } = await getVideoInfoAPI(this.page, this.cateId)
      if (res.status === 0) {
        this.videoList = [...this.videoList, ...res.data]
        this.page++
        this.loading = false
      } else {
        this.finished = true
      }
    },
    onLoad() {
      this.getList()
    }
  },
  created() {
    this.getList()
  }

}
</script>

<style lang="less" scoped>

</style>
