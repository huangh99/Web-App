<template>
<div class="curriculum-box">
  <van-nav-bar
    title="我的课程"
    left-text="返回"
    left-arrow
    fixed
    placeholder
    @click-left="$router.back()"
  />
  <div class="none" v-if="isShow">暂无课程</div>
  <div class="content" v-else>
    <div class="content-item" v-for="item in dataList" :key="item.id">
      <div class="left">
        <van-image
          width="160px"
          height="100px"
          fit="cover"
          :src="item.icon"
        />
      </div>
      <div class="right">
        <div class="title">{{item.title}}</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { getCurriculumInfoAPI } from '@/api/otherAPI'
export default {
  name: 'Curriculum',
  data() {
    return {
      dataList: [],
      isShow: true
    }
  },
  methods: {
    async getCurriculumInfo() {
      const { data: res } = await getCurriculumInfoAPI()
      if (res.status === 0) {
        this.dataList = res.data
        this.isShow = false
      }
    }
  },
  created() {
    this.getCurriculumInfo()
  }
}
</script>

<style lang="less" scoped>
.curriculum-box{
  position: absolute;
  position: absolute;
  width: 100%;
  min-height: 100%;
  background-color: #8e9eab2b;
  .none{
    text-align: center;
    margin: 10px;
    color: rgb(108, 106, 106);
  }
  .content{
    margin: 10px 20px;
    .content-item{
      display: flex;
      margin-bottom: 10px;
      padding: 10px;
      border-radius: 10px;
      background-color: #fff;
      .right{
        margin-left: 20px;
      }
    }
  }
}
</style>
