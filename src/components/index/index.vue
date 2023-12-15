<template>
    <div class="index-class">
        <div class="index-main">
            <RightMain class="right-main"></RightMain>
            <div class="ann" @click="tip">
                <i>></i>
            </div>
        </div>
        <div class="index-warp">
            <CircleButton></CircleButton>
        </div>
    </div>
</template>

<script>

import RightMain from "../RightMain"
import CircleButton from "../CircleButton"

export default {
    name: "index",
    components: {
        RightMain,
        CircleButton
    },
    data() {
        return {}
    },
    created() {
        console.log('created');
        console.log(window);
        console.log(document);
        console.log(localStorage);
    },
    mounted() {
        console.log('mounted');
    },
    methods: {
        tip() {
            window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth"
            });

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

        .right-main {
            position: absolute;
            top: 20%;
            left: 36%;
        }

        .ann {
            /*animation: arrows 2s;*/
            -webkit-animation: arrows 2s infinite linear;
            /* Safari and Chrome */
            position: absolute;
            left: 50%;
            top: 90%;
            cursor: pointer;

            i {
                display: inline-block;
                font-size: 3rem;
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

            }

        }


    }

    .index-warp {
        background-color: white;
        height: 100vh;
        position: relative;
    }
}
</style>