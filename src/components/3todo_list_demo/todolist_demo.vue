<template>
    <div class="all">

        <Head @setValue="getItems"></Head>
        <Content :items="items" @deleteItem = "deleteItem"></Content>
        <Bottom :nums="nums" @clear = "clearItems"></Bottom>
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
    data() {
        return {
            items: [],
            nums:0,
        }
    },
    methods:{
        getItems(obj) {
             this.items.push(obj)
             this.nums=this.items.length
        },
        clearItems() {
            this.items.splice(0,this.items.length)
            this.nums=this.items.length
        },
        deleteItem(obj) {
            console.log(obj)
            this.items.splice(obj,1)
            this.nums=this.items.length
        }
    }

}
</script>

<style scoped>
.all {
    width: 25%;
    position: absolute;
    top: 30%;
    left: 35%;
    padding: 30px 40px 20px;
    display: flex;
    flex-direction: column;
}
</style>