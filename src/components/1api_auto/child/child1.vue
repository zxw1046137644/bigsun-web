<template>
    <div>
        <span>child1</span>
        <span>{{value}}</span>
            <input type="text" v-model="value">
    </div>
</template>

<script>
    export default {
        name: "child1",
        data() {
            return {
                value: ''
            }
        }
    }
</script>

<style scoped type="text/css" lang="scss">
    input {
        border: 1px solid black;
    }
</style>