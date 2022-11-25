<template>
    <div class="notfound">
        <h1>404</h1>
        <span>页面未找到，<router-link :to="{
            path: '/',
            replace: true
        }"> 返回首页></router-link></span>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.notfound {
    text-align: center;
    width: 100%;
    font-style: italic;
    color: #999;
    padding-top: 10%;

    h1 {
        font-weight: 200;
        font-size: 100px;
        padding-bottom: 20px;
    }

    span {
        font-size: 14px;
        font-style: normal;
    }
}
</style>