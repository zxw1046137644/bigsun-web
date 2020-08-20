<template>
    <div class="index-class">
        <div class="index-left">
            <Side></Side>
        </div>
        <router-view></router-view>


    </div>
</template>

<script>
    import Side from "../Side"

    export default {
        name: "index",
        components: {
            Side
        }
    }
</script>

<style scoped type="text/css" lang="scss">
    .index-class {
        /*min-height: 60rem;*/
        .index-left{

        }
    }
</style>