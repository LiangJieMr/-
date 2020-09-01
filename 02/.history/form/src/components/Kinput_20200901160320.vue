<template>
    <div>
        <!-- 自定义组件实现v-model必须实现:value,@input -->
        <!-- v-bind="$attrs"存储props之外的部分 -->
        <input v-bind="$attrs" :value="value" @input="onInput">
    </div>
</template>
<script>
export default {
    props: {
        value: {
            type: String,
            default: '123123'
        }
    },
    methods: {
        onInput(e) {
            //通知父组件数值变化
            this.$emit('input',e.target.value)

            //通知FormItem开始校验
            this.$parent.$emit("validate")
        }
    },
}
</script>
<style scoped>
    
</style>