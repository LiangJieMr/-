<template>
    <div>
        <!-- 自定义组件实现v-model必须实现:value,@input -->
        <input type="text" :value="value">
    </div>
</template>
<script>
export default {
    props: {
        value: {
            type: String,
            default: ''
        }
    }
}
</script>
<style lang="scss" scoped>
    
</style>