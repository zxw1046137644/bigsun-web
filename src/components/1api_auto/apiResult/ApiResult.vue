<template>
  <div class="page-box">
    <el-button>创建任务</el-button>
    <div>
      <el-table
          :data="tableData"
          style="width: 100%;margin-bottom: 20px;"
          row-key="id"
          border
          default-expand-all
          :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
        <el-table-column
            prop="id"
            label="任务id"
            sortable
            width="90"
            align="center"
            :resizable="false">
        </el-table-column>
        <el-table-column
            width="100"
            prop="taskName"
            label="任务名称">
        </el-table-column>
        <el-table-column
            width="100"
            prop="total"
            label="用例总数">
        </el-table-column>
        <el-table-column
            prop="status"
            label="状态"
            width="100"
            align="center">
        </el-table-column>
        <el-table-column
            prop="runTimed"
            label="是否定时运行"
            width="100"
            align="center">
        </el-table-column>
        <el-table-column
            prop="runType"
            label="执行方式"
            width="100"
            align="center">
        </el-table-column>
        <el-table-column
            prop="user"
            label="创建人"
            width="100"
            :resizable="false"
            align="center">
        </el-table-column>
        <el-table-column
            prop="set"
            label="操作"
            width="300"
            :resizable="false"
            align="center">
          <el-switch
              v-model="value"
              active-color="#13ce66"
              inactive-color="#ff4949">
          </el-switch>
          <span @click="findResult" class="page-p">查看详情</span>
          <span @click="findResult" class="page-p">执行情况</span>
          <!--                    <p @click="findResult" v-loading.fullscreen.lock="fullscreenLoading">详细数据</p>-->

        </el-table-column>
      </el-table>
    </div>
    <div class="paging">
      <paging></paging>
    </div>
  </div>
</template>

<script>
import Paging from "../../Paging";
import g from "../../../js/api/apiList";

export default {
  name: 'ApiList',
  props: {
    msg: String
  },
  components: {
    Paging
  },
  data() {
    return {
      g: g,
      tableData: [{
        id: 1131212123,
        total: 1,
        status: '启用',
        runTimed: '否',
        runType: '串行',
        taskName: 'test1',
        user: 'zzz'
      }],
      fullscreenLoading: false,
      data: {},
      value:true
    }
  },
  mounted() {
    console.log(this)
  },
  methods: {
    findResult() {
      this.$router.push('result');
      console.log(this)
    },

  }
}
</script>


<style scoped type="text/css" lang="scss">
@import "./src/css/api";

.page-p {
  cursor: pointer;
}

.page-box {
  div {
    width: 100%;
  }

  height: 80%;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;

  p:hover {
    opacity: 0.6;
  }
}

</style>
