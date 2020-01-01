<template>
    <div class="page">//成功数，失败数，总数，正在执行，待执行，执行通过
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
                <template>
                    <p @click="findResult" v-loading.fullscreen.lock="fullscreenLoading">详细数据</p>
                </template>
            </el-table-column>
        </el-table>


    </div>
</template>

<script>

    export default {
        name: 'page',
        props: {
            msg: String
        },
        data() {
            return {
                tableData: [{
                    id: 1,
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                fullscreenLoading: false
            }
        },
        methods: {
            findResult() {

                this.$router.push('result');
            },
            fullscreenLoading() {

            }
        }
    }
</script>


<style scoped type="scss">


</style>
