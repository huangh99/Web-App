<template>
  <div class="knowledge-box">
    <van-search
      v-model="value"
      shape="round"
      background="#425274"
      placeholder="请输入搜索关键词"
    />
    <van-tabs>
      <van-tab v-for="item in tabList" :key="item.id" :title="item.name">
        <ArtList :article-id="item.id"></ArtList>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getArticleTabsAPI } from '@/api/articleAPI'
import ArtList from '@/components/ArtList/ArtList'
export default {
  name: 'Knowledge',
  components: {
    ArtList
  },
  data() {
    return {
      value: '',
      tabList: []
    }
  },
  methods: {
    async getArticleTabs() {
      const { data: res } = await getArticleTabsAPI()
      if (res.status === 0) {
        this.tabList = res.data
      }
    }
  },
  created() {
    this.getArticleTabs()
  }

}
</script>

<style lang="less" scoped>

</style>
