<template>
  <div class="circleButton">
    <el-row class="button-row">
      <el-tooltip v-for="(item, index) in buttonMessages" :key="index" class="item" effect="dark"
                  :content=item.context placement="top">
        <el-button :type=type[Math.floor(Math.random()*5)] circle @click=$router.push(item.address)>{{
            item.projectName
          }}
        </el-button>
      </el-tooltip>
    </el-row>
  </div>
</template>
//首页功能块
<script>
import {projectList} from "@/js/api/api";

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
    localStorage.setItem("sitename", "这是一个localStorage");
  },
  mounted() {
    this.getProject()
  },
  methods: {
    async getProject() {
      let params1 = {
        "type": 1
      }
      let rep = (await projectList(params1)).list
      this.buttonMessages = rep
    },
    update() {
      this.$set(this.type, 6, 'zxw')
    }
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