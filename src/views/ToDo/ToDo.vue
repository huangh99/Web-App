<template>
  <div class="todo-box">
    <NavBar title="待办事项"></NavBar>
    <div class="todo-top">
      <van-image
        width="100%"
        height="200"
        :src="require('@/assets/images/todo.jpeg')"
      />
    </div>
    <div class="todo-main">
      <van-icon name="plus" class="addTodo" @click="showDialog=true" />
      <ToDoItem v-for="item in todoList" :key="item.id" :event="item"></ToDoItem>
    </div>
    <van-dialog v-model="showDialog" title="添加待办" :show-confirm-button="false">
      <van-form @submit="onSubmit">
        <van-field
          v-model="event.content"
          name="content"
          label="待办事项"
          placeholder="待办事项"
          :rules="[{ required: true, message: '请填写待办事项' }]"
        />
        <van-field
          readonly
          clickable
          name="datePicker"
          :value="event.date"
          label="选择日期"
          placeholder="点击选择日期"
          :rules="[{ required: true, message: '请选择日期' }]"
          @click="showDatePicker = true"
        />
        <van-popup v-model="showDatePicker" position="bottom">
          <van-datetime-picker
            type="date"
            @confirm="selectDate"
            @cancel="showDatePicker = false"
          />
        </van-popup>
        <van-field
          readonly
          clickable
          name="timePicker"
          :value="event.time"
          label="选择时间"
          placeholder="点击选择时间"
          :rules="[{ required: true, message: '请选择具体时间' }]"
          @click="showTimePicker = true"
        />
        <van-popup v-model="showTimePicker" position="bottom">
          <van-datetime-picker
            type="time"
            @confirm="selectTime"
            @cancel="showTimePicker = false"
          />
        </van-popup>
        <div class="van-hairline--top van-dialog__footer">
          <van-button type="default" size="large" class="van-dialog__cancel" native-type="button" @click="handlerCancel">取消</van-button>
          <van-button type="default" size="large" class="van-dialog__confirm" native-type="submit">确定</van-button>
        </div>
      </van-form>
    </van-dialog>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar'
import ToDoItem from '@/components/ToDoItem/ToDoItem'
import moment from 'moment'
import { addTodoEventAPI, getTodoListAPI } from '@/api/otherAPI'
import { Toast } from 'vant'
export default {
  name: 'ToDo',
  components: {
    NavBar,
    ToDoItem
  },
  data() {
    return {
      showDialog: false,
      showDatePicker: false,
      showTimePicker: false,
      event: {
        content: '',
        date: '',
        time: ''
      },
      todoList: []
    }
  },
  methods: {
    selectTime(time) {
      this.event.time = time
      this.showTimePicker = false
    },
    selectDate(date) {
      this.event.date = moment(date).format('YYYY-MM-DD')
      this.showDatePicker = false
    },
    onSubmit() {
      this.addTodoEvent().then(() => {
        Toast.success('新增待办事项成功')
      })

      this.showDialog = false
      this.event = {}
    },
    handlerCancel() {
      this.showDialog = false
      this.event = {}
    },
    async addTodoEvent() {
      const { data: res } = await addTodoEventAPI(this.event.content, this.event.date, this.event.time)
      if (res.status === 0) {
        // Toast.success('新增待办事项成功')
        this.getTodoList()
      }
    },
    async getTodoList() {
      const { data: res } = await getTodoListAPI()
      if (res.status === 0) {
        this.todoList = res.data
      }
    }
  },
  created() {
    this.getTodoList()
  }
}
</script>

<style lang="less" scoped>
.todo-box{
  position: absolute;
  width: 100%;
  min-height: 100%;
  background-color: #F6F7FB;
  .addTodo{
    position: fixed;
    right: 15px;
    bottom: 25px;
    padding: 10px;
    background-color: blue;
    border-radius: 50%;
    font-size: 25px;
    color: #fff;
    z-index: 999;
    &:active{
      opacity: .8;
    }
  }
}
</style>
