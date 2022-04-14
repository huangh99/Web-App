<template>
  <div class="searchResult-box">
    <van-sticky>
      <NavBar title="搜索结果"></NavBar>
    </van-sticky>
    <SearchList :keyword="kw"></SearchList>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar'
import SearchList from '@/components/ArtList/SearchList'
export default {
  name: 'SearchResult',
  components: {
    NavBar,
    SearchList
  },
  data() {
    return {
    }
  },
  props: ['kw']
}
</script>

<style lang="less" scoped>

</style>
