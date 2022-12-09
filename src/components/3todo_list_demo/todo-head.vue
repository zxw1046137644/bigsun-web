<template>
  <div class="head">
    <el-input v-model="input"
     class="input-class"
     placeholder="请输入内容"
     clearable="true"
     @keyup.enter.native="inList"
     >
    </el-input>
  </div>
</template>

<script>
export default {
  name: "todoHead",
  components:{
    
  },
  data() {
    return {
      input: "",
    };
  },
  methods: {
    inList() {
      if (this.input != ""){
      this.$emit("setValue",this.input)
    }
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