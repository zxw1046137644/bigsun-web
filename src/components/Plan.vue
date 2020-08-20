<template>
    <div class="back">
        <el-row>
            <el-button type="info" icon="el-icon-arrow-left" circle @click="forward"></el-button>
            <el-button type="warning" icon="el-icon-arrow-right" circle @click="back"></el-button>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Plan",
        data() {
            return {}
        },
        methods: {
            forward (){


                this.$router.go(-1);

            },
            back (){
                this.$router.go(1);
                let length = window.history.length
                console.log(length)
            }
        }
    }
</script>

<style scoped type="text/css" lang="scss">

    .back {

        position: fixed;
        bottom: 3rem;
        right: 2rem;
        button {
            opacity: 0.2;
        }
        button:hover {
            opacity: 1;
        }
    }
</style>