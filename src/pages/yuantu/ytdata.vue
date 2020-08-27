<template>
    <div class="yadata">
        <div>
            <span>获取医管账号:</span>
            <el-select v-model="value" placeholder="请选择" @change="getOptionsValue($event)">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
            <el-button round @click="getAccount">获取</el-button>
        </div>
        <span>一键创建医管账号</span>
        <span>一键排班</span>
        <span>一键加入团队</span>
        <span>一键查询账号状态</span>
    </div>
</template>

<script>
    import Side from "../../components/tools/Side";

    export default {
        name: "ytdata",
        components: {
            Side
        },
        data() {
            return {
                options: [{
                    value: '青岛',
                    label: '青岛'
                }, {
                    value: '阿里云',
                    label: '阿里云'
                }, {
                    value: '云南',
                    label: '云南'
                }],
                value: ''
            }
        },
        methods: {
            getOptionsValue(event) {
                this.value = event.target.value;
            },
            getAccount() {

            }
        }
    }
</script>

<style scoped type="text/css" lang="scss">
    .yadata {
        padding-left: 14rem;
        padding-top: 3rem;
        font-size: 1rem;

        span {
            margin-bottom: 1rem;
            margin-top: 1rem;
        }
    }
</style>