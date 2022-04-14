<template>
  <div class="artList-box">
    <!-- 列表内容 -->
    <van-list
      v-model="loading"
      :finished="finished"
      :immediate-check="false"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <ArtItem v-for="(item,index) in articleList" :key="index" :article="item"></ArtItem>
    </van-list>
  </div>
</template>

<script>
import ArtItem from '@/components/ArtItem/ArtItem'
import { getArticleInfoAPI } from '@/api/articleAPI'
export default {
  name: 'ArtList',
  components: {
    ArtItem
  },
  props: {
    articleId: {
      type: Number, // 数值类型
      required: true // 必填项
    }
  },
  data() {
    return {
      articleList: [],
      loading: false,
      finished: false,
      page: 1
    }
  },
  methods: {
    async getList() {
      const { data: res } = await getArticleInfoAPI({ params: ({ page: this.page, classId: this.articleId }) })
      if (res.status === 0) {
        this.articleList = [...this.articleList, ...res.data]
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
