<template>
  <div class="item-box"  @click="$router.push('/home/videos/detail/' + video.id)">
    <div class="van-hairline--bottom">
      <van-row class="item-content">
        <van-col span="10" class="left">
          <van-image
            width="100%"
            fit="contain"
            :src="video.cover"
          />
        </van-col>
        <van-col span="14" class="right">
          <div class="title van-multi-ellipsis--l2">{{video.title}}</div>
          <div class="info">
            <p>作者：{{video.author}}</p>
            <p><span>评论:{{video.comment_num}}</span> &nbsp;&nbsp;<span>{{video.pubdate}}</span></p>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoItem',
  props: {
    // 文章的信息对象
    video: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.item-box{
  .item-content{
    position: relative;
    .right{
      padding-left: 10px;
      .title{
        font-size: 14px;
      }
      .info{
        position: absolute;
        bottom: 0;
        p{
          font-size: 12px;
          color: #969799;
        }
      }
    }
  }
}
</style>
