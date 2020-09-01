<template>
    <div>
        <!-- 自定义组件实现v-model必须实现:value,@input -->
        <input type="text" :value="value" @input="onInput">
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
        onInput() {
            //通知父组件数值变化
        }
    },
}
</script>
<style lang="scss" scoped>
    
</style>