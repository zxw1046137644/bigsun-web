<template>
  <div class="back">
    <el-row>
      <el-button type="info" plain icon="el-icon-arrow-left" circle @click="forward()"></el-button>
      <el-button type="warning" icon="el-icon-arrow-right" circle @click="back()"></el-button>
      <el-button type="success" icon="el-icon-s-custom" circle></el-button>
      <el-button type="success" @click='$router.push("/index")' icon="el-icon-house" circle></el-button>
    </el-row>
  </div>
</template>

// 底部导航按钮

<script>
var a = 2;
var w = require("../js/requireGloabls");
export default {
  name: "Plan",
  data() {
    return {
      tipMessage: [2],
      backMessage: ["冲啊", "快走"],
    };
  },
  created() {
    this.init()
    console.log(this)
    console.log(this.$notify)
  },
  methods: {
    init() {
      this.tipMessage = ["别点了到底了", "呱呱呱", "阿巴"]
    },
    varTest() {
      console.log(a)
    },
    forward() {
      this.$router.go(-1);
      let pathname = location.pathname;
      this.varTest();
      if (pathname == "/index") {
        this.$notify({
          title: this.tipMessage[
              Math.floor(Math.random() * (this.tipMessage.length - 1))
              ],
          message: w.getHistoryLength(),
          type: "warning",
          duration: 1000,
        });
      }
    },
    back() {
      this.$router.go(1);
      this.$notify({
        title: this.backMessage[
            Math.floor(Math.random() * this.backMessage.length)
            ],
        message: w.getHistoryLength(),
        type: "warning",
        duration: 1000,
      });
    },
  },
};
</script>

<style scoped type="text/css" lang="scss">
.back {
  position: fixed;
  bottom: 3rem;
  right: 2rem;

  button {
    opacity: 1;
  }

  button:hover {
    opacity: 1;
  }
}
</style>