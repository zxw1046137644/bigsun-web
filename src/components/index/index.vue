<template>
    <div>
        <h2>主页</h2>
        <router-link to="/page">
            <el-button size="small">接口统计</el-button>
        </router-link>
        <router-link to="/index/child1">
            <el-button size="small">child1</el-button>
        </router-link>
        <router-link to="/index/child2">
            <el-button size="small">child2</el-button>
        </router-link>
        <div>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>