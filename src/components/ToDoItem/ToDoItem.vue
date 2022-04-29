<template>
  <div class="item-box">
    <div class="todo-list van-hairline--left">
      <div class="tab"></div>
      <div class="todo-item">
        <div class="time">{{event.date}} &nbsp;&nbsp; {{event.time}}</div>
        <div class="content">{{event.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ToDoItem',
  props: {
    // 待办事项的信息对象
    event: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
.todo-list{
  position: relative;
  margin: 0px 10px 0px 20px;
  border-left: 1px solid #edeff3;
  padding: 10px 15px 10px 20px;
  .tab{
    position: absolute;
    width: 7px;
    height: 7px;
    background-color: #DCDFE6;
    border-radius: 50%;
    left: -4px;
    top: 50%;
    z-index: 2;
  }
  .todo-item{
    padding: 10px 10px 10px 20px;
    border-radius: 8px;
    background-color: #fff;
    .time{
      margin-bottom: 10px;
      font-size: 12px;
      color: #a2a5ac;
    }

  }
}
</style>
