<template>
    <div class="head">
        <div class="logo">
            <img src="">
            <span>bebebe</span>
        </div>
        <div class="nav" v-bind="inApi">
            <ul>
                <li>回首页</li>
                <li @click="inApi">接口工具</li>
            </ul>
        </div>
        <div class="menu" @click="getinfo">
            <ul>
                <li>登录</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { hello } from "../../js/api/api";
// import router from "../../js/router";

export default {
    name: "Head",
    data: () => {
        return {
            data: 1
        }
    },
    created: {
    },
    methods: {
        inApi() {
            this.$router.push('apiPage')
        },
        toast() {
            this.$notify({
                title: 2,
                message: 111,
                type: "warning",
                duration: 1000,
            });
        },
        async getinfo() {
            // alert(
            // hello()
            // )
            console.log(this)
            // const rep = await hello().then(rep =>{
            hello().then(rep => {
                this.data = rep
            },
                error => {
                    console.log(error);
                })
            console.log(this.data)
        }
    }
}
</script>

<style lang="scss" scoped>
/*

     */
.head {
    /*position: fixed;*/
    top: 0;
    left: 0;
    box-shadow: 0 2px 10px wheat;
    width: 100%;
    /*margin: 0 auto;*/
    line-height: 3.8rem;
    display: flex;
    font-size: 1rem;
    background-color: salmon;
    justify-content: space-around;

    /*opacity: 0.5;*/

    .logo {}

    .nav {}

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