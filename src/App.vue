<template>
    <div id="app">
        <canvas v-bind:class="['canvas1',isnight?'night':'']"></canvas>
        <router-view></router-view>
        <!--    <router-view name="middle"></router-view>-->
        <!--    <router-view name="footer"></router-view>-->

    </div>

</template>

<script>


    export default {
        name: 'app',
        components: {},
        data:{
        isnight:'',
        },
        created(){
            this.getNowTime();
        },
        methods: {
            getNowTime() {
                var time = new Date().getHours();
                if (time >= 6 && time <= 18){
                    this.isnight=false;
                }
                else {
                    this.isnight=true;
                }
            }
        }
    }
</script>

<style lang="scss">
    #app {
        /*font-size: 50px;*/
        /*background-color:cornsilk;*/
    canvas {
        width: 100%;
        height: 100%; /*默认全屏显示 可自己设置高度640px*/;
        display: inline-block;
        vertical-align: baseline;
        position: absolute;
        z-index: -1;
    }
    .canvas1 {
        width: 100%;
        height: 100%;
        /*background: url(./assets/bg.jpg);*/
        background: green;
        position: absolute;
        filter: alpha(opacity=40);
        -moz-opacity: 0.4;
        -khtml-opacity: 0.4;
        opacity: 0.6;
    }
        .night{
            background:rgb(9,7,35);
        }
    }
</style>
