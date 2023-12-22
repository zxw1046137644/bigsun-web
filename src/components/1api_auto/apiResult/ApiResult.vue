<template>
  <div class="page-box">
    <div class="left-box">
      <span>左边</span>

    </div>
    <div class="right-box">
      <el-button style="margin-bottom: 20px" @click="dialogFormVisible = true">创建任务</el-button>
      <div class="middle-form-box">
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">

          <el-steps :active="active" :align-center="true">
            <el-step title="设置信息"></el-step>
            <el-step title="绑定用例"></el-step>
          </el-steps>

          <el-form v-if="formShow" ref="form" :model="form" label-width="80px">
            <el-form-item label="活动名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动时间">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"
                                style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="即时配送">
              <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="活动性质">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源">
              <el-radio-group v-model="form.resource">
                <el-radio label="线上品牌商赞助"></el-radio>
                <el-radio label="线下场地免费"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="活动形式">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <!--            <el-form-item>-->
            <!--              <el-button type="primary" @click="onSubmit">立即创建</el-button>-->
            <!--              <el-button>取消</el-button>-->
            <!--            </el-form-item>-->
          </el-form>

          <div v-if="!formShow" class="step-two-box">
            <div>
              <el-tree
                  :props="props"
                  lazy
                  show-checkbox
                  class="tree-box"
                  @check-change="handleCheckChange">
              </el-tree>
            </div>
            <div class="tree-form-box">
              <el-button size="small">导入</el-button>

              <el-table
                  ref="multipleTable"
                  :data="tableData"
                  tooltip-effect="dark"
                  style="width: 100%"
                  @selection-change="handleSelectionChange">
                <el-table-column
                    type="selection"
                    width="55">
                </el-table-column>
                <el-table-column
                    label="日期"
                    width="120">
                  <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名"
                    width="120">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="地址"
                    show-overflow-tooltip>
                </el-table-column>
              </el-table>
            </div>
          </div>

          <div slot="footer" class="dialog-footer">
            <el-button v-if="!formShow" style="margin-top: 12px;" @click="next(-1)">上一步</el-button>
            <el-button @click="dialogFormVisible = false, active>1?active--:'',formShow=!formShow">取 消</el-button>
            <el-button style="margin-top: 12px;" @click="next(1)">下一步</el-button>
          </div>
        </el-dialog>
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
      props: {
        label: 'name',
        children: 'zones'
      },
      count: 1,
      active: 1,
      dialogTableVisible: false,
      dialogFormVisible: false,
      formShow: true,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
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
    next(value) {
      if (value > 0) {
        this.active++
        this.formShow = !this.formShow
      } else {
        this.active--
        this.formShow = !this.formShow
      }

    },
    createTask() {
      this.formShow = !this.formShow
    },
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

  height: 80%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;

  .step-two-box {
    .tree-box {
      width: 150px;
      border: solid 1px red;
    }

    margin-top: 20px;
    display: flex;
    justify-content: flex-start;

    .tree-form-box {
      margin-left: 5%;
      flex-grow: 1;
      height: 450px;
    }
  }

  .middle-form-box {
  }

  .right-box {
    margin-top: 20px;
    margin-right: 20px;
  }

  .left-box {
    margin: 20px;
    width: 300px;
    border: solid red 2px;
  }


  p:hover {
    opacity: 0.6;
  }
}

</style>
