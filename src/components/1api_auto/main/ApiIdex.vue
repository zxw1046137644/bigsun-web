<template>
  <div>
    <span>indexindexindexindexindex</span>
  </div>
</template>
<!--数据中心-->
<script>
import {pageList} from "@/js/api/api";

export default {
  name: "ApiIndex",
  data() {
    return {
      options: {
        value: {},
        list: []
      },
    }
  },
  mounted() {
    this.getProject()
  },
  methods: {
    async getProject() {
      let params1 = {
        "offSet": 0,
        "pageSize": 20,
      }
      let rep = (await pageList(params1)).data.list
      this.options.list = rep
      this.options.value = JSON.parse(JSON.stringify(rep[0]))
    }
  }
}

</script>

<style scoped>

</style>