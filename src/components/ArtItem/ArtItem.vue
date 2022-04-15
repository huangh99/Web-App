<template>
  <div class="artItem-box" @click="$router.push('/knowledge/article/' + article.id)">
    <van-cell>
      <!-- 标题区域的插槽 -->
      <template #title>
        <div class="title-box">
          <!-- 标题 -->
          <span>{{article.title}}-----{{article.id}}</span>
          <!-- 单张图片 -->
          <img v-lazy="article.cover[0]" v-if="article.cover.length===1" alt="" class="thumb">
        </div>
        <!-- 三张图片 -->
        <div class="thumb-box" v-if="article.cover.length===3">
          <img v-for="(item, index) in article.cover" :key="index" v-lazy="item" alt="" class="thumb">
        </div>
      </template>
      <!-- label 区域的插槽 -->
      <template #label>
        <div class="label-box">
          <span>作者 {{article.author}}&nbsp;&nbsp; {{article.comment_num}}评论 &nbsp;&nbsp; 发布日期:{{article.pubdate}}</span>
          <!-- 关闭按钮 -->
          <van-icon name="cross" />
        </div>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  name: 'ArtItem',
  props: {
    // 文章的信息对象
    article: {
      type: Object,
      required: true
    }
  }

}
</script>

<style lang="less" scoped>
.label-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.thumb {
  // 矩形黄金比例：0.618
  width: 113px;
  height: 70px;
  background-color: #f8f8f8;
  object-fit: cover;
}

.title-box {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.thumb-box {
  display: flex;
  justify-content: space-between;
}
</style>
