<template>
   <div>
       <input v-bind="$attrs" :value="value" @input="onInput">
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
        }
    },
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>