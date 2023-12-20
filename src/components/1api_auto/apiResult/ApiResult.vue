<template>
  <div class="page-box">
    <div class="left-box">
      <span>左边</span>

    </div>
    <div class="right-box">
      <el-button style="margin-bottom: 20px">创建任务</el-button>
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
            width="190"
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
          <template slot-scope="scope">
            <el-switch
                v-model="value1"
                active-color="#13ce66"
                inactive-color="#c0c0c0">
            </el-switch>
          </template>
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
          <template slot-scope="scope">
            <span @click="findResult" class="page-p">查看详情</span>
            <span @click="findResult" class="page-p">执行情况</span>
          </template>
        </el-table-column>
      </el-table>

    </div>

    <!--    <div class="paging">-->
    <!--      <paging></paging>-->
    <!--    </div>-->
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
      value1: true
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
  .right-box {
    margin-left: auto;
    margin-top: 20px;
    margin-right: 20px;
  }
  .left-box {
    margin: 20px;
    width: 300px;
    border: solid red 2px ;
  }

  height: 80%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;

  p:hover {
    opacity: 0.6;
  }
}

</style>
