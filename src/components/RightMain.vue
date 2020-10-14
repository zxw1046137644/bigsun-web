<template>
    <div class="com-right">
        <img src="../assets/20180419071714_GtlpvL.gif">
        <img src="../assets/20170828930426_qgjsWR.gif">
        <img src="../assets/20180419071714_GtlpvL.gif">
    </div>
</template>

<script>
    export default {
        name: "RightMain",
        data() {
            return {
                time: ''
            }
        },
        created() {

        },
        mounted() {
            this.time = new Date().getSeconds()
        },
        watch: {},
        methods: {}
    }
</script>

<style scoped lang="scss" type="text/css">
    .com-right {

    }
</style>