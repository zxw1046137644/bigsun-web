<template>
    <div class="side">
        <el-row class="tac">
            <el-col :span="12">
                <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo row"
                        @open="handleOpen"
                        @close="handleClose">
                    <el-menu-item index="2" @click="indexDemo">
                        <i class="el-icon-menu"></i>
                        <span slot="title">首页demo</span>
                    </el-menu-item>
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>小工具</span>
                        </template>
                        <el-menu-item-group class="el-menu-item-group">
                            <template slot="title">--------------------------</template>
                            <el-menu-item index="1-1" @click="goYt">yt测试</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                        <!--                        <el-menu-item-group title="&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;">-->
                        <!--                            <el-menu-item index="1-3">选项3</el-menu-item>-->
                        <!--                        </el-menu-item-group>-->
                        <!--                        <el-submenu index="1-4">-->
                        <!--                            <template slot="title">选项4</template>-->
                        <!--                            <el-menu-item index="1-4-1">选项1</el-menu-item>-->
                        <!--                        </el-submenu>-->
                    </el-submenu>

                    <!--                    <el-menu-item index="3">-->
                    <!--                        <i class="el-icon-document"></i>-->
                    <!--                        <span slot="title">导航三</span>-->
                    <!--                    </el-menu-item>-->
                    <!--                    <el-menu-item index="4">-->
                    <!--                        <i class="el-icon-setting"></i>-->
                    <!--                        <span slot="title">导航四</span>-->
                    <!--                    </el-menu-item>-->
                </el-menu>
            </el-col>
        </el-row>
    </div>

</template>

<script>


    export default {
        name: "side",
        components: {
        },
        data() {
            return {}
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            indexDemo() {
                let length = window.history.length
                console.log(length)
                this.$router.push('/index_demo')
            },
            goYt() {
                this.$router.push('/index/ytdata')
            }
        }
    }
</script>

<style scoped type="text/css" lang="scss">
    .side {

        width: 25rem;
        float: left;

        .row {
            min-height: 58.5rem;

        }

        .el-menu-item-group {
            li:hover:before {
                content: '';
                height: 100%;
                border-left: 0.4rem solid yellow;
                /*display: inline-block;*/
                position: absolute;
                left: 0rem;


            }
        }
    }

</style>