<template>
  <div class="user-content">
    <div class="user-top">
      <van-row type="flex">
        <van-col span="8" class="userIcon-box">
          <van-image
            round
            width="100px"
            height="100px"
            :src="userInfo.user_pic"
            v-if="userInfo.user_pic"
            @click="showImg"
          />
           <van-image
            round
            width="100px"
            height="100px"
            :src="require('@/assets/images/default_user_pic.jpeg')"
            v-else
            @click="showImg"
          />
          <van-tag type="primary" size="medium" color="#c0c0c0" @click="onChangeIcon">更换头像<van-icon name="edit" /></van-tag>
        </van-col>
        <van-col span="16" class="nickName" v-if="userInfo.nickname">
          <p><van-tag type="primary">昵称</van-tag> {{userInfo.nickname}}</p>
          <p><van-tag type="primary">账号</van-tag> {{userInfo.username}}</p>
        </van-col>
        <van-col span="16" class="userName" v-else>
          <van-row>{{userInfo.username}}</van-row>
        </van-col>

      </van-row>
    </div>
    <van-row class="user-card1">
      <van-col span="8">
        <van-row><span>{{userInfo.point_num}}</span></van-row>
        <van-row><span>积分</span></van-row>
      </van-col>
      <van-col span="8">
        <van-row><span>{{userInfo.follow_num}}</span></van-row>
        <van-row><span>关注</span></van-row>
      </van-col>
      <van-col span="8">
        <van-row><span>{{userInfo.fans_num}}</span></van-row>
        <van-row><span>粉丝</span></van-row>
      </van-col>
    </van-row>
    <van-cell-group inset class="user-card2">
      <van-cell title="个人资料" is-link to="/user/information" icon="manager-o" />
      <van-cell title="安全与密码" is-link to="/user/security" icon="eye-o" />
      <van-cell title="我的课程" is-link to="/user/curriculum" icon="star-o" />
    </van-cell-group>
    <van-cell-group inset class="user-card3">
      <van-cell title="设置" is-link to="/user/settings" icon="setting-o" />
      <van-cell title="帮助与反馈" is-link to="/user/help" icon="question-o" />
      <van-cell title="关于" is-link to="/user/about" icon="more-o" />
      <van-cell title="退出登录" is-link icon="warning-o" @click="logout" />
    </van-cell-group>
    <van-overlay z-index="999" :show="overlayShow" @click="show = overlayShow" class="overlay-box">
      <div class="footer-box">
        <van-image
        width="100%"
        fit="cover"
        :src="fileInfo.avatar"
        />
      <van-uploader max-count="1" :after-read="afterRead" class="upload-box">
        <van-button hairline>选择文件</van-button>
      </van-uploader>
      <van-button hairline @click="updateIcon">确定</van-button>
      <van-button hairline @click="closeOverlay">取消</van-button>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import { getUserInfoAPI, updateUserIconAPI } from '@/api/userAPI'
import { Dialog, ImagePreview, Toast } from 'vant'
import { mapMutations } from 'vuex'
export default {
  name: 'User',
  data() {
    return {
      userInfo: {},
      fileInfo: {
        avatar: ''
      },
      overlayShow: false
    }
  },
  methods: {
    ...mapMutations(['updateTokenInfo']),
    showImg() {
      let imgUrl = this.userInfo.user_pic
      if (!this.userInfo.user_pic) {
        imgUrl = require('@/assets/images/default_user_pic.jpeg')
      }
      ImagePreview({
        images: [imgUrl],
        showIndex: false
      })
    },
    onChangeIcon() {
      this.overlayShow = true
      this.fileInfo.avatar = this.userInfo.user_pic ? this.userInfo.user_pic : require('@/assets/images/default_user_pic.jpeg')
    },
    afterRead(file) {
      this.fileInfo.avatar = file.content
    },
    async updateIcon() {
      await this.updateUserIcon()
    },
    closeOverlay() {
      this.overlayShow = false
    },
    logout() {
      Dialog.confirm({
        title: '提示',
        message: '是否退出登录！'
      })
        .then(() => {
          // 把token清空
          this.updateTokenInfo('')
          // 跳转到登录页面
          this.$router.push('/login')
        })
        .catch(() => {
          // on cancel
        })
    },
    async updateUserIcon() {
      const { data: res } = await updateUserIconAPI(this.fileInfo)
      if (res.status === 0) {
        Toast({
          type: 'success',
          message: '修改成功！',
          onOpened: this.closeOverlay,
          onClose: this.getUserInfo
        })
      } else {
        Toast({
          type: 'fail',
          message: '修改失败！'
        })
      }
    },
    async getUserInfo() {
      const { data: res } = await getUserInfoAPI(this.userInfo)
      if (res.status === 0) {
        this.userInfo = res.data
      }
    }
  },
  created() {
    this.getUserInfo()
  }

}
</script>

<style lang="less" scoped>
.user-content{
  .user-top{
    height: 220px;
    background-color: #425274;
    border-radius: 0 0 10% 10%;
    box-sizing: border-box;
    padding: 50px 0 0 20px;
    .userIcon-box{
      text-align: center;
      .van-tag{
        color: #576B95;
      }
    }
    .nickName{
      padding: 20px 5px;
      height: 100px;
      p{
        margin: 0;
        color: #fff;
        line-height: 30px;
      }
    }
    .userName{
      padding-left: 5px;
      line-height: 100px;
      color: #fff;
    }
  }
  .user-card1{
    // margin-top: -35px;
    margin: -28px 16px 16px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px #576B95;
    background-color: #fff;
    text-align: center;
    .van-row{
      padding: 5px;
    }
  }
  .user-card2{
    margin-top: 20px;
    box-shadow: 0px 10px 10px -8px #576B95;
  }
  .user-card3{
    margin-top: 20px;
    box-shadow: 0px 10px 10px -8px #576B95;
  }
  .overlay-box{
    .footer-box{
      position: absolute;
      left: 0px;
      bottom: 0px;
      width: 100%;
      .upload-box{
        width: 100%;
        /deep/.van-uploader__input-wrapper{
          width: 100%;
          .van-button{
            width: 100%;
            .van-uploader__input{
              width: 100%;
            }
          }
        }
      }
      .van-button{
        width: 100%;
        color: #fff;
        background-color: #b5afc178;
        // opacity:0.5
      }
    }
  }
}

</style>
