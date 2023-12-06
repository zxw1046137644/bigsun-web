<template>
    <div class="bottom" v-show="see">
        <span>{{ nums }} items</span>
        <el-button size="small" @click="clear">clear</el-button>
    </div>
</template>

<script>
export default {
    name: "todoBottom",
    props: {
        nums: {
            type: Number,
            default:0
        }
    },
    data:()=>{
        return {

        }
    },
    created() {

    },
    computed: {
        see() {
            if (this.nums == 0) {
                return false
            }
            else
                return true
        }
    },
    methods: {
          clear() {
            this.$emit("clear")
          }
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