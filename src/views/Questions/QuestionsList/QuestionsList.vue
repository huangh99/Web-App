<template>
  <div class="question-list">
    <NavBar title="题目分类"></NavBar>
    <van-grid :gutter="10">
      <van-grid-item v-for="item in list" :key="item.id" :text="item.name" :to="`/home/questions/content/${item.id}`" />
    </van-grid>
  </div>
</template>

<script>
import { getArticleTabsAPI } from '@/api/articleAPI'
import NavBar from '@/components/NavBar/NavBar'
export default {
  name: 'QuestionsList',
  data() {
    return {
      list: []
    }
  },
  components: {
    NavBar
  },
  methods: {
    async getList() {
      const { data: res } = await getArticleTabsAPI()
      if (res.status === 0) {
        this.list = res.data
      }
    }
  },
  created() {
    this.getList()
  }
}
</script>

<style lang="less" scoped>
.van-grid{
  margin-top: 30px;
}
</style>
