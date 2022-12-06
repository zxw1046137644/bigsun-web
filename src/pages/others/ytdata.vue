<!-- <template>
    <div class="yadata">
        <el-row class="data-el-row">
            <el-col :span="12">
                <el-row>
                    <div>>>>获取医管账号:</div>
                    <el-col :span="4">
                        <el-select size="medium" v-model="value" placeholder="请选择" @change="getOptionsValue(value)">
                            <el-option
                                    v-for="(item,index) in cityOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-col>
                    <el-col :span="8">
                        <el-input size="medium" clearable maxlength="11" placeholder="请输入排班医生手机号（默认青岛）"
                                  v-model="inputValue"></el-input>
                    </el-col>
                    <el-col :span="3">
                        <el-button size="medium" @click="getAccount">获取</el-button>
                    </el-col>
                </el-row>
                <el-row>
                    <el-row>
                        <div>>>>>一键排班</div>
                    </el-row>
                    <el-row>
                        <el-checkbox-group v-model="checkList">
                            <el-checkbox v-for="(list,index) of inquiry_list" :label="list" checked></el-checkbox>
                        </el-checkbox-group>
                    </el-row>
                    <el-row class="data-schedule">
                        <el-col :span="8">
                            <el-input size="medium" clearable maxlength="11" placeholder="请输入排班医生手机号（默认青岛）"
                                      v-model="inputValue"></el-input>
                        </el-col>

                        <el-col :span="8">
                            <el-button size="medium">排班</el-button>
                        </el-col>
                    </el-row>
                </el-row>

            </el-col>
            <el-col :span="8" class="dataTable" v-show="true">
                <DataTable :tableData="doctorsData"></DataTable>
            </el-col>

            <!--        <span>一键创建医管账号</span>-->

            <!--        <span>一键加入团队</span>-->
            <!--        <span>一键查询账号状态</span>-->
            <RouterView></RouterView>
        </el-row>

    </div>


</template>

<script>
    import Side from "../../components/tools/Side";
    import DataTable from "./DataTable";


    let inquiry_type = ["问诊", "复诊", "视频", "视频复诊"];
    let citys = [{
        value: '青岛',
        label: '青岛'
    }, {
        value: '阿里云',
        label: '阿里云'
    }, {
        value: '云南',
        label: '云南'
    }];
    export default {
        name: "ytdata",
        components: {
            Side,
            DataTable
        },
        data() {
            return {
                cityOptions: citys,
                value: '',
                doctorsData: [],
                inputValue: '',
                checkList: [],
                inquiry_list: inquiry_type
            }
        },
        methods: {
            getOptionsValue($value) {
                this.value = $value;
            },
            getAccount() {
                this.$http.get(
                    '/api/doct/getDoctors',
                )
                    .then
                    (
                        (res) => {
                            this.doctorsData = res.data.data;
                        }
                    )
                    .catch
                    (
                        (err) => {
                            console.log("请求失败")
                            console.log(err)
                        }
                    )
            }
        }
    }
</script>

<style scoped type="text/css" lang="scss">
    .yadata {
        padding-left: 14rem;
        padding-top: 3rem;
        font-size: 1rem;

        .data-el-row {
            div {
                margin-bottom: 0.5rem;
            }

            .data-schedule {
                line-height: 2;
            }

            .el-col {
                margin-right: 1rem;
            }
        }

        /*span {*/
        /*    margin-bottom: 1rem;*/
        /*    margin-top: 1rem;*/
        /*}*/

        button {
            /*margin-left: 1rem;*/
        }

    }
</style> -->