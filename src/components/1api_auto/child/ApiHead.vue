<template>
  <div>
    <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-4">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-4">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" @click="$router.push('/main/child2')">消息中心</el-menu-item>
      <el-menu-item index="4" @click="$router.push('/main/apiList')">环境管理</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import {caseList, pageList} from "@/js/api/api";

export default {
  name: "ApiHead",
  data() {
    return {
      activeIndex2: '3'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  async mounted() {
    let params = {
      "offSet": 0,
      "pageSize": 10,
      "type": 4
    }
    const rep2 = await caseList(params)
    console.log(rep2)
  }

}
</script>

<style scoped type="text/css" lang="scss">
input {
  border: 1px solid black;
}
</style>