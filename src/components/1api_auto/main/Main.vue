<template>
  <div class="main-box">
    <ApiHead></ApiHead>
    <!--      <Middle></Middle>-->
    <router-view></router-view>
  </div>


</template>

<script>
import ApiHead from "./ApiHead"
import ApiIndex from "./ApiIdex"
import Middle from "@/components/1api_auto/main/Middle";


export default {
  name: "Main",
  components: {
    Middle,
    ApiHead,
    ApiIndex
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.main-box {
  height: 100%;
}
</style>