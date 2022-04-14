<template>
  <div class="knowledge-box">
    <van-sticky>
      <van-search
        v-model="keyword"
        shape="round"
        background="#425274"
        placeholder="请输入搜索关键词"
        @input="onInput"
        @focus="isHistoryShow=true"
        @blur="closeHistory"
      />
    </van-sticky>
    <div class="sugg-list" v-if="keyword.length != 0">
      <div class="sugg-item" v-for="(item, i) in suggestList" :key="i" v-html="item.name" @click="goSearchResultBySearch"></div>
    </div>
    <!-- 搜索历史 -->
    <div class="search-history" v-else-if="isHistoryShow">
      <!-- 标题 -->
      <van-cell title="搜索历史">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-icon name="delete" class="search-icon" @click="history=[]" />
        </template>
      </van-cell>
      <!-- 历史列表 -->
      <div class="history-list">
        <span class="history-item" v-for="(tag, i) in history" :key="i" @click="goSearchResultByHistory">{{tag}}</span>
      </div>
    </div>
    <van-tabs>
      <van-tab v-for="item in tabList" :key="item.id" :title="item.name">
        <ArtList :article-id="item.id"></ArtList>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getArticleTabsAPI, getArticleSearchTipsAPI } from '@/api/articleAPI'
import ArtList from '@/components/ArtList/ArtList'
export default {
  name: 'Knowledge',
  components: {
    ArtList
  },
  data() {
    return {
      keyword: '',
      timerId: null,
      timerHistory: null,
      tabList: [],
      suggestList: [],
      history: JSON.parse(localStorage.getItem('history') || '[]'),
      isHistoryShow: false
    }
  },
  methods: {
    onInput() {
      clearTimeout(this.timerId)
      if (this.keyword.length === 0) {
        this.suggestList = []
        return
      }
      this.timerId = setTimeout(() => {
        this.initSuggestList()
      }, 500)
    },
    hlightKeywords(arr) {
      const reg = new RegExp(this.keyword, 'ig')
      arr.forEach((item, index) => {
        item.name = item.name.replace(reg, (val) => {
          return `<span style="color: red; font-weight: bold;">${val}</span>`
        })
      })
    },
    goSearchResultByHistory(e) {
      const kw = e.currentTarget.innerText
      this.isHistoryShow = false
      this.$router.push('/knowledge/searchResult/' + kw)
    },
    goSearchResultBySearch(e) {
      // 把搜索关键词加入到搜索历史中
      const newHistory = this.history.filter(item => item !== this.keyword)
      newHistory.unshift(this.keyword)
      this.history = newHistory
      const kw = e.currentTarget.innerText
      this.$nextTick(() => {
        this.$router.push('/knowledge/searchResult/' + kw)
      })
    },
    closeHistory() {
      clearTimeout(this.timerHistory)
      this.timerHistory = setTimeout(() => {
        this.isHistoryShow = false
      }, 100)
    },
    async getArticleTabs() {
      const { data: res } = await getArticleTabsAPI()
      if (res.status === 0) {
        this.tabList = res.data
      }
    },
    async initSuggestList() {
      const { data: res } = await getArticleSearchTipsAPI(this.keyword)
      if (res.status === 0) {
        this.hlightKeywords(res.data)
        this.suggestList = res.data
      }
    }
  },
  watch: {
    // 监视历史记录的变化
    history(newVal) {
      localStorage.setItem('history', JSON.stringify(newVal))
    }
  },
  created() {
    this.getArticleTabs()
  }

}
</script>

<style lang="less" scoped>
.sugg-list {
  position: fixed;
  z-index: 999;
  width: 100%;
  background-color: #fff;
  .sugg-item {
    padding: 0 15px;
    border-bottom: 1px solid #f8f8f8;
    font-size: 14px;
    line-height: 50px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.search-icon {
  font-size: 16px;
  line-height: inherit;
}
.search-history{
  position: fixed;
  z-index: 999;
  width: 100%;
  background-color: #fff;
  .history-list {
    padding: 0 10px;
    .history-item {
      display: inline-block;
      font-size: 12px;
      padding: 8px 14px;
      background-color: #efefef;
      margin: 10px 8px 0px 8px;
      border-radius: 10px;
    }
  }
}
</style>
