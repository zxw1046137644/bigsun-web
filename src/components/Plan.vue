<template>
    <div class="back">
        <el-row>
            <el-button type="info" plain icon="el-icon-arrow-left" circle @click="forward"></el-button>
            <el-button type="warning" icon="el-icon-arrow-right" circle @click="back"></el-button>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Plan",
        data() {
            return {
                tipMessage:['别点了到底了','呱呱呱','阿巴']
            }
        },
        methods: {
            forward() {

                this.$router.go(-1);

                let pathname = location.pathname;
                if (pathname == '/index') {
                    this.$notify({
                        title: this.tipMessage[Math.floor(Math.random() * (4 - 1))],
                        message: '这是一个提示1',
                        type: 'warning',
                        duration: 1000
                    })
                }
            },
            back() {
                this.$router.go(1);
            },
        }
    }
</script>

<style scoped type="text/css" lang="scss">

    .back {

        position: fixed;
        bottom: 3rem;
        right: 2rem;

        button {
            opacity: 1;
        }

        button:hover {
            opacity: 1;
        }
    }
</style>