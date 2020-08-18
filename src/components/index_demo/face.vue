<template>

    <div>
        <Head></Head>
        <span>
            sdjfijsk
        </span>
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
    import Head from "./Head"

    export default {
        name: "InterfacePage",
        components: {
            Head,
        }
    }
</script>

<style scoped>

</style>