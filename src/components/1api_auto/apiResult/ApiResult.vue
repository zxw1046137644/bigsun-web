<template>
  <div>
    <div class="inline">
      <div class="result-first-label" v-for="(item,index) in items">
        <label>{{ item.key }}</label>
        <span :class="{pass:index==1,fail:index==2}">{{ item.value }}</span>
      </div>
    </div>
    <el-table
        :data="tableData"
        style="width: 100%;margin-bottom: 20px;"
        row-key="id"
        border
        default-expand-all
        :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
      <el-table-column
          prop="id"
          label="序号"
          sortable
          width="90"
          align="center"
          :resizable="false">
      </el-table-column>
      <el-table-column
          prop="address"
          label="接口地址">
      </el-table-column>
      <el-table-column
          prop="param"
          label="传入参数">
      </el-table-column>
      <el-table-column
          prop="status"
          label="执行状态"
          width="100"
          align="center">
      </el-table-column>
      <el-table-column
          prop="expect"
          label="期望返回"
          width="100"
          align="center">
      </el-table-column>
      <el-table-column
          prop="result"
          label="实际返回"
          width="100"
          :resizable="false"
          align="center">
      </el-table-column>
      <el-table-column
          prop="date"
          label="执行时间"
          width="100"
          :resizable="false"
          align="center">
      </el-table-column>
    </el-table>
    <div class="paging">
      <el-button size="small" @click="handBack">返回接口统计</el-button>
      <paging></paging>
    </div>
  </div>
</template>

<script>
import Paging from "../../Paging";


export default {
  name: 'result',
  components: {
    Paging
  },
  props: {},
  methods: {
    handBack() {
      this.$router.back();
    }
  },
  data() {
    return {
      tableData: [{
        id: 1,
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      // loading: true
      items: [
        {
          key: '总数:',
          value: 213,
        },
        {
          key: '通过数:',
          value: 22,
        },
        {
          key: '失败数:',
          value: 11,
        },
        {
          key: '成功比例:',
          value: 0.22
        }
      ],
      ispass: true
    }
  },
}
</script>


<style scoped type="text/css" lang="scss">
@import "./src/css/api";

.inline {
  /*display: inline-block;*/
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1em;
  font-size: 1.3em;

  .result-first-label {
    label {
      margin-left: 2em;

    }

    span {
      margin-left: 0.5em;
    }

    .pass {
      color: green;
    }

    .fail {
      color: red;
    }
  }
}

</style>
