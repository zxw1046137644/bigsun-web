<template>
    <div>
        <Head></Head>
            <Warp></Warp>
            <div>
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </div>
    </div>
</template>

<script>
    import Head from "../Head"
    import Warp from "../Warp"

    export default {
        name: "index",
        components: {
            Head,
            Warp
        }
    }
</script>

<style scoped>

</style>