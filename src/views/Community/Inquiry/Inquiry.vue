<template>
  <div class="inquiry-box">
    <van-nav-bar
      title="提问"
      left-text="返回"
      left-arrow
      @click-left="back"
    >
      <template #right>
        <van-button round icon-prefix="iconfont icon-fabu" icon="icon-fabu" color="linear-gradient(to right, #fc4a1a, #f7b733)" @click="submit">发 布</van-button>
      </template>
    </van-nav-bar>
    <div class="inquiry-content van-hairline--bottom">
      <div class="title van-hairline--bottom">请在下方输入您的问题</div>
      <van-form ref="form">
      <van-field
        v-model.trim="message"
        name="message"
        rows="6"
        autosize
        type="textarea"
        maxlength="150"
        placeholder="请输入问题描述"
        show-word-limit
        :rules="[{ required: true, message: '问题内容不能为空',trigger: 'onSubmit' }]"
      />
      </van-form>
    </div>
    <div class="inquiry-tags">
      <div class="title">选择标签</div>
      <van-grid :gutter="10">
        <van-grid-item :class="{active:tag==1}" text="科技" @click="selectTag(1)" />
        <van-grid-item :class="{active:tag==2}" text="文化" @click="selectTag(2)" />
        <van-grid-item :class="{active:tag==3}" text="历史" @click="selectTag(3)" />
        <van-grid-item :class="{active:tag==4}" text="编程" @click="selectTag(4)" />
        <van-grid-item :class="{active:tag==5}" text="天文" @click="selectTag(5)" />
        <van-grid-item :class="{active:tag==6}" text="地理" @click="selectTag(6)" />
        <van-grid-item :class="{active:tag==7}" text="社会" @click="selectTag(7)" />
        <van-grid-item :class="{active:tag==8}" text="艺术" @click="selectTag(8)" />
        <van-grid-item :class="{active:tag==9}" text="军事" @click="selectTag(9)" />
      </van-grid>
    </div>
    <van-action-sheet
      v-model="isShow"
      cancel-text="取消"
      description="当前内容未保存，确定要返回吗"
      close-on-click-action
    >
      <van-button type="default" size="large" style="color:red;" @click="$router.back()">确认返回</van-button>
    </van-action-sheet>
  </div>
</template>

<script>
import { Dialog, Toast } from 'vant'
import { publicQuestion } from '@/api/otherAPI'
export default {
  name: 'Inquiry',
  data() {
    return {
      message: '',
      tag: '',
      isShow: false
    }
  },
  methods: {
    selectTag(index) {
      this.tag = index
    },
    submit() {
      this.$refs.form.validate('message').then(() => {
        if (this.tag) {
          this.public()
        } else {
          Dialog.alert({
            title: '提示',
            message: '请选择一个标签'
          }).then(() => {
            // on close
          })
        }
      }).catch(() => {

      })
    },
    back() {
      this.isShow = true
    },
    async public() {
      const { data: res } = await publicQuestion(this.message, this.tag)
      if (res.status === 0) {
        Toast({
          type: 'success',
          message: '发布成功',
          forbidClick: true,
          onClose: () => {
            this.$router.back()
          }
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.inquiry-box{
  .van-nav-bar{
    background-color:  rgba(225,225,225,0.7);
    /deep/.van-nav-bar__text,/deep/.van-icon{
      color: #000;
    }
    .van-button{
      height: 36px;
    }
  }
  .inquiry-content{
    .title{
      padding: 10px 16px;
      color: #969799;
    }
  }
  .inquiry-tags{
    .title{
      padding: 10px 16px;
      color: #969799;
    }
    /deep/.van-grid-item__content{
      padding: 10px 8px;
      background-color: #ebedf0;
      border: 0;
      border-radius: 8px;
      .van-grid-item__text{
        font-size: 13px;
        font-weight: 700;
        // color: #000;
      }
    }
    /deep/.van-grid-item__content--surround::after{
      border: 0;
    }
    .active{
      /deep/.van-grid-item__content{
        background-color: #FAE7E5;
        .van-grid-item__text{
          color: #fc4a1a;
        }
      }

    }
  }
}
</style>
