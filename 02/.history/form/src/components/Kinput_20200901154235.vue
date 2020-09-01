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
   methods: {
       onInput(e) {
           // 通知父组件数值发生变化
           this.$emit('input', e.target.value)
       }
   },
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>