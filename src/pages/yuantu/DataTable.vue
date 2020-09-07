<template>
    <el-table
            :data="tableData"
            style="width: 100%">
        <el-table-column type="expand">
            <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item label="排班账号状态">
                        <span>{{ props.row.name }}</span>
                    </el-form-item>
                    <el-form-item label="prios账号状态">
                        <span>{{ props.row.shop }}</span>
                    </el-form-item>
                    <el-form-item label="图文">
                        <span>{{ props.row.shopId }}</span>
                    </el-form-item>
                    <el-form-item label="视频">
                        <span>{{ props.row.category }}</span>
                    </el-form-item>
<!--                    <el-form-item label="店铺地址">-->
<!--                        <span>{{ props.row.address }}</span>-->
<!--                    </el-form-item>-->
<!--                    <el-form-item label="商品描述">-->
<!--                        <span>{{ props.row.desc }}</span>-->
<!--                    </el-form-item>-->
                </el-form>
            </template>
        </el-table-column>
        <el-table-column
                label="医生姓名"
                prop="doctName">
        </el-table-column>
        <el-table-column
                label="医管账号"
                prop="phoneNum">
        </el-table-column>
<!--        <el-table-column-->
<!--                label="描述"-->
<!--                prop="desc">-->
<!--        </el-table-column>-->
    </el-table>
</template>

<script>
    export default {
        name: "DataTable",
        props:['tableData'],
        data() {
            return {
                tableData: this.tableData
            }
        }
    }
</script>

<style scoped>

</style>