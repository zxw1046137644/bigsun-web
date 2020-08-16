<template>
    <div class="head">
        <div class="logo">
            <img src="">
            <span>BeLife3</span>
        </div>
        <div class="nav" v-bind="inApi">
            <ul>
                <li>回首页</li>
                <li @click="inApi">接口工具</li>
            </ul>
        </div>
        <div class="menu">
            <ul>
                <li>登录</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import router from "../js/router";

    export default {
        name: "Head",
        methods: {
            inApi() {
                this.$router.push('apiPage')
            }
        }
    }
</script>

<style lang="scss" scoped>
    /*

     */
    .head {
        width: 100%;
        /*margin: 0 auto;*/
        line-height: 3.8rem;
        display: flex;
        font-size: 1rem;
        color: rgba(255, 255, 255, .5);
        justify-content: space-around;
        background-color: black;
        opacity: 0.5;

        .logo {

        }

        .nav {

        }

        .menu {
            img {
                width: 1.9rem;
                height: 1.7rem;
            }
        }


        /*div {*/
        /*    display: inline;*/
        /*}*/

        li:hover {
            color: white;
        }
    }

    li {
        display: inline;
        margin-left: 1rem;
        cursor: pointer;
    }
</style>