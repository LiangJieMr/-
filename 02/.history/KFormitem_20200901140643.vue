<template>
    <div>
        <label v-if="label">
            {{label}}
        </label>
        <slot></slot>
        <!-- 校验信息 -->
        <p v-if="errorMessage">
            {{errorMessage}}
        </p>
    </div>
</template>

<script>
export default {
    props:{
        label: {
            type: String,
            default: ''
        },
        errorMessage: {
            type: String,
            default: ''
        }
    },
    mounted() {
        // 监听校验事件 并执行
        this.$on('validate', () => {
            this.validate()
        })
    },
    methods: {
        validate() {
            //执行组件校验
            //1获取校验规则
            //2获取数值
        }
    },
}
</script>