<template>
  <div class="head-box">
    <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo env"
        mode="horizontal"
        @select="handleSelect"
    >
      <div class="el-list">
        <el-menu-item index="1" @click="$router.push('/api/index')">数据中心</el-menu-item>
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-4">环境管理</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-4">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" @click="$router.push('/api/apiResult')">任务集合</el-menu-item>
        <el-menu-item index="4" @click="$router.push('/api/apiList')">用例列表</el-menu-item>
      </div>
      <div class="select-box">
        <el-select v-model="value" placeholder="请选择环境" size="medium">
          <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <div class="image-box">
        <el-avatar src="https://avatars.githubusercontent.com/u/48079484?v=4"></el-avatar>
<!--        <el-avatar src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>-->
      </div>
    </el-menu>
  </div>
</template>

<script>
import {caseList, pageList} from "@/js/api/api";

export default {
  name: "ApiHead",
  data() {
    return {
      activeIndex2: '1',
      options: [{
        value: '选项1',
        label: 'test'
      }, {
        value: '选项2',
        label: 'prod'
      }],
      value: ''
    }
  },
  created() {
    this.value = this.options[0].label
    const time1 = setInterval(() => {
      console.log('定时器在执行任务1213321')
    },1000)
    this.$once('hook:beforeDestroy', () => { clearInterval(time1); })

  },
  methods: {

    handleSelect(key, keyPath) {

      console.log(key, keyPath);
    },
    async getCase() {
      let params = {
        "offSet": 0,
        "pageSize": 10,
        "type": 4
      }
      const rep2 = await caseList(params)
      console.log(rep2)
    }
  },
  mounted() {
    this.getCase()
  },
  beforeDestroy() {
    clearInterval(this.time1 = null)
  }

}
</script>

<style scoped type="text/css" lang="scss">

.env::before {
  display: none;
}

.env::after {
  display: none;
}

.head-box {
  overflow: hidden;
}

.env {
  display: flex;
  justify-content: space-between;
  align-content: center;

  .select-box {
    margin-left: auto;
  }

  .image-box {
    span {
      position: relative;
      top: 15%;
    }

    margin-right: 20px;
  }

  .el-list {
    display: flex;
    justify-content: flex-start;
  }

  ::v-deep .el-select {
    width: 100px;
    height: 100%;
  }

  ::v-deep .el-input {
    height: 100%;
  }

  ::v-deep .el-input__inner {
    border: 0 none;
    outline: none;
    height: 100%;
    margin-right: 30px;
  }


}
</style>