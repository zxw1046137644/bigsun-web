<template>
    <div>

        <router-link to="/apiPage/apiList">
            <el-button size="small">接口统计</el-button>
        </router-link>
        <router-link to="/apiPage/child1">
            <el-button size="small">child1</el-button>
        </router-link>
        <router-link to="/apiPage/child2">
            <el-button size="small">child2</el-button>
        </router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "InterfacePage"
    }
</script>

<style scoped>

</style>