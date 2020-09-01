<template>
   <div>
       <input type="text" :value="value" @input="onInput">
   </div>
</template>

<script>
export default {
   data() {
       return {
           value: ''
       }
   },
   //生命周期 - 创建完成（访问当前this实例）
   created() {
           
   },
   //生命周期 - 挂载完成（访问DOM元素）
   mounted() {
               
   },
   methods: {
       onInput() {
           // 派发事件
           this.$emit('input')
       }
   },
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>