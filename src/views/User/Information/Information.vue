<template>
  <div class="information-box">
    <NavBar title="个人资料" rightText="保存"></NavBar>
    <van-cell is-link title="昵称" :value="userInfo.nickname" @click="showNickname" />
    <van-dialog v-model="nicknameShow" title="昵称修改" :show-confirm-button="false">
      <van-form @submit="onChangeNickname">
        <van-field
          v-model="nickname"
          name="昵称"
          label="昵称"
          placeholder="请输入昵称"
          :rules="rules.nickname"
        />
        <div class="van-hairline--top van-dialog__footer">
          <van-button type="default" size="large" class="van-dialog__cancel" native-type="button" @click="nicknameShow=false">取消</van-button>
          <van-button type="default" size="large" class="van-dialog__confirm" native-type="submit">确定</van-button>
        </div>
      </van-form>
    </van-dialog>
    <van-cell is-link title="性别" :value="userInfo.sex" @click="sexShow = true" />
    <van-popup v-model="sexShow" position="bottom" lock-scroll round :style="{ height: '30%' }" >
      <van-picker
        title="性别"
        show-toolbar
        :columns="gender"
        @confirm="onSelectSex"
        @cancel="sexShow = false"
      />
    </van-popup>
    <van-cell is-link title="生日" :value="userInfo.birthday" @click="birthdayShow=true"/>
    <van-popup v-model="birthdayShow" position="bottom" lock-scroll round :style="{ height: '30%' }" >
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
        @confirm="onSelectBirthday"
        @cancel="birthdayShow=false"
      />
    </van-popup>
    <van-cell is-link title="邮箱" :value="userInfo.email" @click="showEmail" />
    <van-dialog v-model="emailShow" title="邮箱修改" :show-confirm-button="false" >
      <van-form @submit="onChangeEmail">
        <van-field
          v-model="email"
          name="邮箱"
          label="邮箱"
          placeholder="请输入邮箱"
          :rules="rules.email"
        />
        <div class="van-hairline--top van-dialog__footer">
          <van-button type="default" size="large" class="van-dialog__cancel" native-type="button" @click="emailShow=false">取消</van-button>
          <van-button type="default" size="large" class="van-dialog__confirm" native-type="submit">确定</van-button>
        </div>
      </van-form>
    </van-dialog>
    <van-cell is-link title="城市" :value="userInfo.city" @click="cityShow=true"/>
    <van-popup v-model="cityShow" position="bottom" lock-scroll round :style="{ height: '30%' }" >
      <van-picker show-toolbar :columns="columns" @change="onChangeCity" @confirm="onSelectCity" @cancel="cityShow=false"/>
    </van-popup>
  </div>
</template>

<script>
import { updateUserInfoAPI, getUserInfoAPI } from '@/api/userAPI'
import timeFormat from '@/utils/functions'
import cities from '@/views/User/Information/cities'
import NavBar from '@/components/NavBar/NavBar'
import { Dialog } from 'vant'
export default {
  name: 'Information',
  components: {
    NavBar
  },
  data() {
    return {
      userInfo: {},
      nickname: '',
      email: '',
      nicknameShow: false,
      emailShow: false,
      sexShow: false,
      birthdayShow: false,
      cityShow: false,
      rules: {
        nickname: [
          { pattern: /^[\u4E00-\u9FA5A-Za-z0-9_]*/, message: '用户名不能包含特殊字符', trigger: 'onChange' },
          {
            validator: (val) => {
              if (val.length <= 8) {
                return true
              } else {
                return false
              }
            },
            message: '昵称长度最大为8',
            trigger: 'onChange'
          }],
        email: [{ pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, message: '邮箱格式不正确', trigger: 'onChange' }]
      },
      gender: ['不显示性别', '男', '女'],
      minDate: new Date(1970, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date(),
      columns: [{ values: Object.keys(cities) }, { values: cities['不显示'] }]
    }
  },
  methods: {
    showNickname() {
      this.nicknameShow = true
      this.nickname = this.userInfo.nickname
    },
    onChangeNickname() {
      this.userInfo.nickname = this.nickname
      this.nicknameShow = false
    },
    showEmail() {
      this.emailShow = true
      this.email = this.userInfo.email
    },
    onChangeEmail() {
      this.userInfo.email = this.email
      this.emailShow = false
    },
    onSelectSex(value) {
      this.userInfo.sex = value === '不显示性别' ? '' : value
      this.sexShow = false
    },
    onSelectBirthday(value) {
      value = timeFormat(value)
      this.userInfo.birthday = value
      this.birthdayShow = false
    },
    onChangeCity(picker, values) {
      picker.setColumnValues(1, cities[values[0]])
    },
    onSelectCity(value) {
      const city = value[0] === value[1] ? value[0] : value[0] + value[1]
      this.userInfo.city = city === '不显示' ? '' : city
      this.cityShow = false
    },
    formatter(type, val) {
      if (type === 'year') {
        return val + '年'
      }
      if (type === 'month') {
        return val + '月'
      }
      if (type === 'day') {
        return val + '日'
      }
      return val
    },
    saveInformation() {
      this.updateUserInfo()
    },
    async updateUserInfo() {
      const { data: res } = await updateUserInfoAPI(this.userInfo)
      if (res.status === 0) {
        Dialog.alert({
          message: '保存成功！',
          confirmButtonColor: '#19CAAD'
        }).then(() => {

        })
      } else {
        Dialog.alert({
          message: '保存失败！'
        }).then(() => {
          // on close
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

</style>
