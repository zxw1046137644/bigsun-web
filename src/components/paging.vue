<template>
    <div class="block">
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage3"
                :page-size="100"
                layout="prev, pager, next, jumper"
                :total="1000">
        </el-pagination>
        <el-button size="small" @click="back">返回上页</el-button>
    </div>
</template>

<script>
    export default {
        name: "paging",
        methods: {
            handleSizeChange(val) {

            },
            handleCurrentChange(val) {

            },
            back() {
                this.$router.back();
            }

        },
        data() {
            return {
                currentPage3: 5,
            };
        }

    }
</script>

<style scoped type="scss">
    .block {
        display: inline;
    }
</style>