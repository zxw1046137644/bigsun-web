<template>
  <div id="app">
    <router-view></router-view>
    <div>
      <Plan></Plan>
    </div>
  </div>

</template>

<script>
import Plan from './components/Plan'

export default {
  name: 'app',
  components: {
    Plan
  },
  data: {
    isNight: '',
  },
  created() {
    this.getNowTime();

  },
  methods: {
    getNowTime() {
      var time = new Date().getHours();
      if (time >= 6 && time <= 18) {
        this.isNight = false;
      } else {
        this.isNight = true;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
html, body, #app{
  height: 100vh;
  width: 100%;
  //overflow:hidden;
}

#app {
  /*font-size: 50px;*/
  /*background-color:cornsilk;*/
  //overflow-y: scroll;
  canvas {
    width: 100%;
    height: 100%; /*默认全屏显示 可自己设置高度640px*/
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

  .night {
    background: rgb(9, 7, 35);
  }
}
</style>
