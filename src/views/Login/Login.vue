<template>
  <div class="login-box">
    <div class="login-title">
      <span>登录</span>
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
        left-icon="icon-password"
        icon-prefix="iconfont"
        placeholder="请输入密码"
        :rules="rules.password"
      >
        <template #left-icon>
          <span class="iconfont icon-password"></span>
        </template>
      </van-field>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
    <div style="margin: 36px;">
        <van-button round block type="info" native-type="button" to="/logon">注册</van-button>
    </div>
  </div>
</template>

<script>
import { loginAPI } from '@/api/userAPI'
import { mapMutations } from 'vuex'
import { Dialog } from 'vant'
export default {
  name: 'Login',
  data() {
    return {
      userForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请填写用户名', trigger: 'onBlur' },
          { pattern: /^[a-zA-Z0-9_-]{4,16}$/, message: '用户名由4到16位(字母,数字,下划线,减号)组成', trigger: 'onBlur' }
        ],
        password: [{ required: true, message: '请填写密码', trigger: 'onBlur' }]
      }
    }
  },
  methods: {
    ...mapMutations(['updateTokenInfo']),
    onSubmit() {
      this.login()
    },
    async login() {
      const { data: res } = await loginAPI(this.userForm)
      if (res.status === 0) {
        // 把token存储到vuex中
        this.updateTokenInfo(res.data)
        // 跳转到主页
        this.$router.push('/')
      } else {
        Dialog.alert({
          message: '用户名或密码错误！'
        }).then(() => {
          // on close
        })
      }
    }
  }

}
</script>

<style lang="less" scoped>
.login-box{
  position: absolute;
  width: 100%;
  height: 100%;
  padding-top: 30%;
  box-sizing: border-box;
  background-image: linear-gradient(#679497, #3C5A74);
  .login-title{
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
