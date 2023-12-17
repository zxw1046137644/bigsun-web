<template>
  <div>
    <span>选择项目</span>
    <el-select v-model="options.value.projectName" clearable placeholder="请选择">
      <el-option
          v-for="item in options.list"
          :key="item.id"
          :value="item.projectName">
      </el-option>
    </el-select>
    <span>选择项目</span>
    <el-select v-model="options.value.projectName" clearable placeholder="请选择">
      <el-option
          v-for="item in options.list"
          :key="item.id"
          :value="item.projectName">
      </el-option>
    </el-select>
  </div>
</template>

<script>
import {pageList} from "@/js/api/api";

export default {
  name: "Middle",
  data() {
    return {
      options: {
        value: {},
        list: []
      },
    }
  },
  mounted() {
    this.getProject()
  },
  methods: {
    async getProject() {
      let params1 = {
        "offSet": 0,
        "pageSize": 20,
      }
      let rep = (await pageList(params1)).data.list
      this.options.list = rep
      this.options.value = JSON.parse(JSON.stringify(rep[0]))
    }
  }
}

</script>

<style scoped>

</style>