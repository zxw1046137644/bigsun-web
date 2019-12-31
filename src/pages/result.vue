<template>
    <div>
        <el-table
                :data="tableData"
                v-loading="loading"
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


    </div>
</template>

<script>
    export default {
        name: 'result',
        props: {

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
            }
        },
    }
</script>


<style scoped>

</style>
