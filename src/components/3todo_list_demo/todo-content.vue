<template>
    <div>
        <ul class="content">
            <li v-for="(item,index) in li_lists" :key="index">
                <span>{{item}}</span>
                <button class="content-li-button el-icon-circle-close"></button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "todoContent",
    data() {
        return {
            li_lists: [
               1,
               2
            ]
        }
    },
    created() {
    },
    methods: {
        addLi

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