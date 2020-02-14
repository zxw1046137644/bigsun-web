<template>
    <div class="head">
        <div class="logo">
            <img src="">
            <span>BeLife</span>
        </div>
        <div class="nav" v-bind="inApi">
            <ul>
                <li>大阳</li>
                <li>大阳</li>
                <li>大阳</li>
                <li>大阳</li>
                <li>大阳</li>
                <li>大阳</li>
                <li @click="inApi">接口工具</li>
            </ul>
        </div>
        <div class="menu">
            <ul>
                <li>
                    <div>
                        <img src="../assets/me1.png">
                    </div>
                </li>
                <li></li>
                <li></li>
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
    .head {
        min-width: 55.5rem;
        height: 3.4rem;
        margin: 0 auto;
        line-height: 3.8rem;
        display: table;
        font-size: 1rem;
        color: rgba(255, 255, 255, .5);

        .logo {
            margin-right: 4.5rem;
        }

        .nav {

        }

        .menu {
            float: right;
            margin-top: 0.6rem;
            img{
                width: 1.7rem;
                height: 1.7rem;
            }
        }

        div {
            display: inline-block;
        }

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