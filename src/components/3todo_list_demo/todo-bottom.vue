<template>
    <div class="bottom">
        <span>{{nums}} items</span>
        <el-button
        size="small"
        >clear</el-button>
    </div>
</template>

<script>
    export default {
        name: "todoBottom",
        props: {
        nums: {
            type: Number,
        }
    },
        data() {
            return {
                nums: 0
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