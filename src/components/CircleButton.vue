<template>
  <div class="circleButton">
    <el-row class="button-row">
      <el-tooltip v-for="(item, index) of buttonMessages" :key="index" class="item" effect="dark"
                  :content=item.content placement="top">
        <el-button :type=item.type circle @click=$router.push(item.address)>{{ item.content }}</el-button>
      </el-tooltip>
    </el-row>
  </div>
</template>
//首页功能块
<script>
const w = require("../js/requireGloabls");
export default {
  name: "CircleButton",
  data() {
    return {
      icon: [],
      type: ['warning', 'danger', 'info', 'success', 'primary'],
      buttonMessages: []
    }
  },
  created() {
    this.buttonMessages.push(
        {
          content: '首页',
          type: this.type[w.getRomType(this.type.length)],
          address: '/index_demo'

        },
        {
          content: 'ToDolist',
          type: this.type[w.getRomType(this.type.length)],
          address: '/toDoListDemo'

        },
        {
          content: '小工具',
          type: this.type[w.getRomType(this.type.length)],
          address: '/tools'
        },
        {
          content: '聊天室',
          type: this.type[w.getRomType(this.type.length)],
          address: '/chat'
        },
        {
          content: '测试平台',
          type: this.type[w.getRomType(this.type.length)],
          address: '/main'
        }
    )
    localStorage.setItem("sitename", "这是一个localStorage");
  },
  methods: {

  }
}
</script>

<style scoped type="text/css" lang="scss">
.circleButton {
  position: absolute;
  top: 20%;
  left: 20%;
  width: auto;

  button-row {
  }

  button {
    width: 8rem;
    height: 8rem;
    margin-left: 2rem;
  }

}
</style>