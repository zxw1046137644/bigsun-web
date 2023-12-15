<template>
  <div>
    <div>
      <ApiHead></ApiHead>
      <Middle></Middle>
    </div>
    <router-view></router-view>
  </div>


</template>

<script>
import ApiHead from "../child/ApiHead"
import Middle from "@/components/1api_auto/child/Middle";


export default {
  name: "Main",
  components: {
    Middle,
    ApiHead
  },
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>