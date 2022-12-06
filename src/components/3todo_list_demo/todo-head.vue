<template>
  <div class="head">
    <el-input v-model="input"
     class="input-class"
     placeholder="请输入内容"
     clearable="true"
     >
    </el-input>
  </div>
</template>

<script>

export default {
  name: "todoHead",
  data() {
    return {
      input: "",
    };
  },
  methods: {
    inApi() {
      this.$router.push("apiPage");
    },
  },
};
</script>

<style lang="scss" scoped>
/*

     */
.head {
    .input-class {
     border-radius: 30px;
    border-color: white;
    }
   

}
</style>