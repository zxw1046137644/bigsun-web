<template>
    <div class="bottom">
        <span>{{num}} items</span>
        <el-button disabled
        size="small"
        >clear-all</el-button>
    </div>
</template>

<script>
    export default {
        name: "todoBottom",
        data() {
            return {
                num: 1
            }
        },
        created() {
          
        },
        methods: {
          
        }
    }
</script>

<style lang="scss" scoped>
    .bottom {
        margin-top: 20%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>