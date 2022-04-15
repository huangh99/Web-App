<template>
  <div class="logon-box">
    <van-nav-bar
      left-arrow
      fixed
      :border="false"
      @click-left="onClickLeft"
    />
    <div class="logon-title">
      <span>注册</span>
    </div>
    <van-form @submit="onSubmit" :show-error="false">
      <van-field
        v-model="userForm.username"
        name="用户名"
        label="用户名"
        left-icon="user-circle-o"
        placeholder="请输入用户名"
        :rules="rules.username"
      />
      <van-field
        v-model="userForm.password"
        type="password"
        name="密码"
        label="密码"
        left-icon="user-circle-o"
        placeholder="请输入密码"
        :rules="rules.password"
      />
      <van-field
        v-model="userForm.rePassword"
        type="password"
        name="重复密码"
        label="重复密码"
        left-icon="user-circle-o"
        placeholder="请重复输入密码"
        :rules="rules.rePassword"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">注册</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { logonAPI } from '@/api/userAPI'
import { Dialog } from 'vant'
export default {
  name: 'Logon',
  data() {
    return {
      userForm: {
        username: '',
        password: '',
        rePassword: ''
      },
      rules: {
        username: [
          { required: true, message: '请填写用户名', trigger: 'onBlur' },
          { pattern: /^[a-zA-Z0-9_-]{4,16}$/, message: '用户名由4到16位(字母,数字,下划线,减号)组成', trigger: 'onBlur' }
        ],
        password: [{ required: true, message: '请填写密码', trigger: 'onBlur' }],
        rePassword: [
          { required: true, message: '请再次填写密码', trigger: 'onBlur' },
          {
            validator: (val) => {
              if (val === this.userForm.password) {
                return true
              } else {
                return false
              }
            },
            message: '两次输入密码必须一致',
            trigger: 'onBlur'
          }
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      this.logon()
    },
    // 返回，点击跳转登录页面
    onClickLeft() {
      this.$router.push('/login')
    },
    async logon() {
      const { data: res } = await logonAPI(this.userForm)
      if (res.status === 0) {
        Dialog.alert({
          message: '注册成功！',
          confirmButtonColor: '#19CAAD'
        }).then(() => {
          // 跳转到主页
          this.$router.push('/login')
        })
      } else {
        Dialog.alert({
          message: '注册失败！'
        }).then(() => {
          // on close
        })
      }
    }
  }

}
</script>

<style lang="less" scoped>
.logon-box{
  position: absolute;
  width: 100%;
  height: 100%;
  padding-top: 30%;
  box-sizing: border-box;
  background-image: linear-gradient(#679497, #3C5A74);
  .van-nav-bar{
    background-color: rgba(0, 0, 0, 0);
    /deep/.van-nav-bar__content{
      height: 80px;
    }
    /deep/ .van-nav-bar__arrow{
        color: rgba(255, 255, 255, .8);
        font-size: 25px;
        margin: 20px;
      }
  }
  .logon-title{
    margin-bottom: 50px;
    text-align: center;
    font-size: 26px;
    color: #fff;
  }
  .van-form{
    margin: 0px 20px;
    .van-field {
      margin-bottom: 30px;
      background-color: rgba(0, 0, 0, 0);
      /deep/ .van-field__label{
        color: #fff ;
      }
      /deep/ .van-field__left-icon{
        color: #fff;
      }
      /deep/ .van-field__error-message{
        color: #ebedf0;
      }
    }
  }
}

</style>
