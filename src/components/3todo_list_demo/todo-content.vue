<template>
    <div>
        <ul class="content">
            <li v-for="(item, index) in li_lists" :key="index">
                <span>{{ item }}</span>
                <button class="content-li-button el-icon-circle-close"
                @click="deleteItem(index)"
                ></button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "todoContent",
    props: {
        items: {
            type: Array,
            default: function () {
                return [];
            },
        }
    },
    data() {
        return {
            li_lists: this.items
        }
    },
    created() {
    },
    methods: {
        deleteItem(key){
            this.$emit("deleteItem",key)
        }
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