<template>
  <div class="artList-box">
    <van-pull-refresh
      v-model="isLoading"
      success-text="刷新成功"
      :disabled="finished"
      @refresh="onRefresh"
    >
    <van-list
      v-model="loading"
      :finished="finished"
      :immediate-check="false"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <ArtItem v-for="(item,index) in articleList" :key="index" :article="item"></ArtItem>
    </van-list>
    </van-pull-refresh>
    <!-- 列表内容 -->
  </div>
</template>

<script>
import ArtItem from '@/components/ArtItem/ArtItem'
import { getArticleSearchResultAPI } from '@/api/articleAPI'
export default {
  name: 'SearchList',
  components: {
    ArtItem
  },
  props: {
    keyword: {
      type: String, // 数值类型
      required: true // 必填项
    }
  },
  data() {
    return {
      articleList: [],
      loading: true,
      finished: false,
      isLoading: false,
      page: 1
    }
  },
  methods: {
    async getList(isRefresh) {
      const { data: res } = await getArticleSearchResultAPI(this.keyword, this.page)
      if (res.data) {
        if (isRefresh) {
          this.articleList = [...res.data, ...this.articleList]
          this.isLoading = false
        } else {
          this.articleList = [...this.articleList, ...res.data]
          this.loading = false
        }
      } else {
        this.isLoading = false
        this.finished = true
      }
    },
    onLoad() {
      this.page++
      this.getList()
    },
    onRefresh() {
      this.page++
      this.getList(true)
    }
  },
  created() {
    this.getList()
  }

}
</script>

<style lang="less" scoped>

</style>
