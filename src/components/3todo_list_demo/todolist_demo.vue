<template>
    <div class="all">
        <Head></Head>
        <Content></Content>
        <Bottom></Bottom>
    </div>
</template>

<script>
    import Head from "./todo-head";
    import Bottom from "./todo-bottom";
    import Content from "./todo-content";
    export default {
        name: "toDolistDemo",
        components: {
            Head,
            Bottom,
            Content
        },

    }
</script>

<style scoped>
.all {
    width: 25%;
    position:absolute;
    top:30%;
    left: 35%;
    padding: 30px 40px 20px;
    display: flex;
    flex-direction: column;
}
</style>