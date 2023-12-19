<template>
  <div class="warp-box">
    <!--    <div class="inline">-->
    <!--      <div class="result-first-label" v-for="(item,index) in items">-->
    <!--        <label>{{ item.key }}</label>-->
    <!--        <span :class="{pass:index==1,fail:index==2}">{{ item.value }}</span>-->
    <!--      </div>-->
    <!--    </div>-->
    <div>
      <el-input
          placeholder="输入关键字进行过滤"
          v-model="filterText">
      </el-input>
      <el-tree
          lazy
          class="filter-tree"
          show-checkbox
          key="id"
          @click="getData"
          :data="projectData"
          :props="defaultProps"
          default-expand-all
          ref="tree">
      </el-tree>
    </div>
    <div class="warp-table">
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
            type="selection"
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
            width="200"
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
    </div>
  </div>
</template>

<script>


import {caseList} from "@/js/api/api";
import Vue from "vue";

export default {
  name: 'ApiResult',
  components: {},
  props: {},
  methods: {
    getData() {
      console.log(
          111
      )
      setTimeout(() => {
        this.tableData = this.tableData1
      }, 2000)
    },
    // loadNode(node, resolve) {
    //   console.log(node)
    //   if (node.level === 0) {
    //     return resolve([{name: 'region1'}, {name: 'region2'}]);
    //   }
    //   if (node.level > 3) return resolve([]);
    //
    //   var hasChild;
    //   if (node.data.name === 'region1') {
    //     hasChild = true;
    //   } else if (node.data.name === 'region2') {
    //     hasChild = false;
    //   } else {
    //     hasChild = Math.random() > 0.5;
    //   }
    //
    //   setTimeout(() => {
    //     var data;
    //     if (hasChild) {
    //       data = [{
    //         name: 'zone' + this.count++
    //       }, {
    //         name: 'zone' + this.count++
    //       }];
    //     } else {
    //       data = [];
    //     }
    //
    //     resolve(data);
    //   }, 500);
    // },

    async projectListInit(params) {

      const rep2 = await caseList(params)
      this.projectData1 = rep2.list
      this.projectData = this.projectData1
      console.log(this.projectData)
    }
  }
  ,
  created() {

  },

  mounted() {
    let params = {
      "offSet": 0,
      "pageSize": 10,
      "type": 1
    }
    this.projectListInit(params)

  },
  data() {
    return {
      filterText: '',
      projectData: [],
      projectData1: [],
      defaultProps: {
        children: 'children',
        label: 'name'
      },
      tableData: [],
      tableData1: [{
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
      ispass: true,
      value1: ''
    }
  },
  computed: {
    // projectData() {
    //   return this.projectData.filter((v) => {
    //     return v.name.indexOf(this.filterText) !== -1
    //   })
    // }
  },
  watch: {
    filterText(n, v) {
     let params = {
        "offSet": 0,
        "pageSize": 10,
        "type": 2
      }
      this.projectListInit(params)
      // console.log(n, v)
      // this.value1 = this.filterText
      // this.projectData1 = this.projectData.filter((v) => {
      //   this.id = !this.id
      //   return v.name.indexOf(this.filterText) !== -1
      // })
      // this.nextTick(
      // )
    }
  }
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

.warp-box {
  display: flex;
  justify-content: flex-start;
  margin: 20px;

  .warp-table {
    margin-left: 20px;
    flex-grow: 1;
  }
}

</style>