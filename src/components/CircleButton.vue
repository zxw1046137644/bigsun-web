<template>
    <div class="circleButton">
        <el-row class="button-row">
            <el-tooltip v-for="(item, index) of buttonMessages" :key="index" class="item" effect="dark"
                        :content=item.content
                        placement="top">
                <el-button :type=item.type circle @click="go(item.address)">{{item.content}}</el-button>
            </el-tooltip>

            <!--            <el-button type="primary" icon="el-icon-edit" circle></el-button>-->
            <!--            <el-button type="success" icon="el-icon-check" circle></el-button>-->
            <!--            <el-button type="info" icon="el-icon-message" circle></el-button>-->
            <!--            <el-button type="warning" icon="el-icon-star-off" circle></el-button>-->
            <!--            <el-button type="danger" icon="el-icon-delete" circle></el-button>-->
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "CircleButton",
        data() {
            return {
                icon: [],
                type: ['warning', 'danger', 'info', 'success', 'primary'],
                buttonMessages: []
            }
        },
        created() {
            this.init()
        },
        methods: {
            init() {
                this.buttonMessages.push(
                    {
                        content: '首页demo',
                        type: this.type[Math.floor(Math.random() * (this.type.length))],
                        address: '/index_demo'

                    },
                    {
                        content: '小工具',
                        type: this.type[Math.floor(Math.random() * (this.type.length))],
                        address: '/tools'
                    }
                )
            },
            go($address) {
                this.$router.push($address)
            }
        }
    }
</script>

<style scoped type="text/css" lang="scss">
    .circleButton {
        position: absolute;
        top: 20%;
        left: 20%;
         width: auto;
        button-row {

        }

        button {
            width: 8rem;
            height: 8rem;
            margin-left: 2rem;
        }

    }
</style>