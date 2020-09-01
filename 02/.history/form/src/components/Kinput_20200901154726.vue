<template>
   <div>
       <input type="text" :value="value" @input="onInput">
   </div>
</template>

<script>
export default {
   props: {
       value: {
           type: String,
           defalut: ''
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
/* @import url(); 引入css类 */

</style>