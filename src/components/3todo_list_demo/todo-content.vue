<template>
    <div>
        <ul class="content">
        <li>
            <span>1</span>
            <button class="content-li-button el-icon-circle-close"
            ></button>
        </li>
    </ul>
    </div>
</template>

<script>
    export default {
        name: "todoContent",
        data() {
            return {
              
            }
        },
        created() {
        },
        methods: {
        
        }
    }
</script>

<style lang="scss" scoped>
    .content {
        margin-top: 5%;

        li {
            margin-top: 3%;
            display: flex;
            .content-li-button {
                margin: 0 -8px 0 auto;
                padding: 0 8px;
            }
        }
    }
</style>