<template>
    <div class="page">
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
                    label="接口用例总数">
            </el-table-column>
            <el-table-column
                    prop="status"
                    label="成功数"
                    width="100"
                    align="center">
            </el-table-column>
            <el-table-column
                    prop="expect"
                    label="失败数"
                    width="100"
                    align="center">
            </el-table-column>
            <el-table-column
                    prop="date"
                    label="执行时间"
                    width="100"
                    :resizable="false"
                    align="center">
            </el-table-column>
            <el-table-column
                    prop="set"
                    label="操作"
                    width="100"
                    :resizable="false"
                    align="center">

                <p @click="findResult" class="page-p">详细数据</p>
                <!--                    <p @click="findResult" v-loading.fullscreen.lock="fullscreenLoading">详细数据</p>-->

            </el-table-column>
        </el-table>
        <div class="paging">
            <!--            <el-button size="small" @click="handBack">返回接口统计</el-button>-->
            <paging></paging>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import Paging from "../../components/Paging";
    // import g from "./apiList";

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
                    id: 1,
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                fullscreenLoading: false,
                data: {}
            }
        },
        mounted() {
            console.log(this)
            this.axios.get('/api/bigsun/hello',)
                .then(
                    (res) => {
                        console.log(res)
                    }
                )
                .catch(
                    (err) => {
                        console.log(err)
                    }
                )

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

    .page {
        p:hover {
            opacity: 0.6;
        }
    }

</style>
