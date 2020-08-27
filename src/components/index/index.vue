<template>
    <div class="index-class">
        <div class="index-main">
            <RightMain></RightMain>
            <div class="ann" @click="tip">
                <i>></i>
            </div>
        </div>
        <div class="index-warp">
            jsakdj
        </div>
    </div>
</template>

<script>
    import Side from "../Side"
    import RightMain from "../rightMain"

    export default {
        name: "index",
        components: {
            Side, RightMain

        },
        methods: {
            tip() {

            }
        }
    }
</script>

<style scoped type="text/css" lang="scss">
    .index-class {
        /*font-size: 12rem;*/
        height: auto;
        .index-main {
            height: 100vh;
            .ann {
                animation: arrows 2s;
                -webkit-animation: arrows 2s infinite linear; /* Safari and Chrome */
                position: absolute;
                left: 43%;
                top: 99%;
                cursor: pointer;

                i {
                    display: inline-block;
                    font-size: 3rem;
                    width: 17rem;
                    transform: rotate(90deg);
                }

                @keyframes arrows {
                    0% {
                        transform: translateY(0rem);
                        opacity: 1;
                    }


                    50% {
                        transform: translateY(1rem);
                        opacity: 0.5;
                    }
                    100% {

                    }

                }
        }


        }
        .index-warp{
            background-color: red;
            height: 10rem;
        }
    }
</style>