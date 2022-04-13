<template>
  <div class="changePassword-box">
    <NavBar title="修改密码"></NavBar>
    <van-form @submit="onSubmit" :show-error="false">
      <van-cell-group inset title="身份验证">
        <van-field
          v-model="userForm.oldPwd"
          type="password"
          name="旧密码"
          label="旧密码"
          left-icon="user-circle-o"
          placeholder="请输入旧密码"
          :rules="rules.oldPwd"
        />
      </van-cell-group>
      <van-cell-group inset title="重置密码">
        <van-field
          v-model="userForm.newPwd"
          type="password"
          name="新密码"
          label="新密码"
          left-icon="user-circle-o"
          placeholder="请输入新密码"
          :rules="rules.newPwd"
        />
        <van-field
          v-model="userForm.reOldPwd"
          type="password"
          name="重复新密码"
          label="重复新密码"
          left-icon="user-circle-o"
          placeholder="请重复输入新密码"
          :rules="rules.reOldPwd"
        />
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">修改密码</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar'
import { updatePwdAPI } from '@/api/userAPI'
import { mapMutations } from 'vuex'
import { Dialog } from 'vant'
export default {
  name: 'ChangePassword',
  components: {
    NavBar
  },
  data() {
    return {
      userForm: {
        oldPwd: '',
        newPwd: '',
        reOldPwd: ''
      },
      rules: {
        oldPwd: [{ required: true, message: '请填写旧密码', trigger: 'onBlur' }],
        newPwd: [{ required: true, message: '请填写新密码', trigger: 'onBlur' }],
        reOldPwd: [
          { required: true, message: '请再次填写新密码', trigger: 'onBlur' },
          {
            validator: (val) => {
              if (val === this.userForm.newPwd) {
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
    ...mapMutations(['updateTokenInfo']),
    onSubmit() {
      this.updatePwd()
    },
    async updatePwd() {
      const { data: res } = await updatePwdAPI(this.userForm)
      if (res.status === 0) {
        Dialog.alert({
          message: '修改成功！',
          confirmButtonColor: '#19CAAD'
        }).then(() => {
          // 把token清空
          this.updateTokenInfo('')
          // 跳转到主页
          this.$router.push('/login')
        })
      } else {
        Dialog.alert({
          message: '修改失败！'
        }).then(() => {
          // on close
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>
