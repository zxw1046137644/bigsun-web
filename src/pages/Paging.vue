<template>
    <div class="paging">
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage"
                :page-size="page_size"
                hide-on-single-page="true"
                layout="prev, pager, next, jumper"
                :total="total" class="inline">
        </el-pagination>

    </div>
</template>
<!--分页-->
<script>
    export default {
        name: "Paging",
        methods: {
            handleSizeChange(val) {

            },
            handleCurrentChange(val) {

            },


        },
        data() {
            return {
                currentPage: 1,
                total:100,
                page_size:10
            };
        }

    }
</script>

<style scoped type="text/css" lang="scss">




</style>