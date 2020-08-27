<template>
    <div>
    <Side></Side>
    <router-view></router-view>
    </div>
</template>

<script>
    import Side from "./Side";

    export default {
        name: "Tools",
        components: {
            Side
        }
    }
</script>

<style scoped>

</style>