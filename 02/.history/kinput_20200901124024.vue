<template>
    <div>
        <!-- 自定义组件实现v-model必须实现:value,@input -->
        <input v-bind="$attrs" :value="value" @input="onInput">
    </div>
</template>
<script>
export default {
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    methods: {
        onInput(e) {
            //通知父组件数值变化
            this.$emit('input',e.target.value)
        }
    },
}
</script>
<style lang="scss" scoped>
    
</style>