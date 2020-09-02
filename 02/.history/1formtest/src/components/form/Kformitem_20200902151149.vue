<template>
   <div>
       <label v-if="label">
           {{label}}
       </label>
       <slot></slot>
       <p v-if="errormessage">
           {{errormessage}}
       </p>
   </div>
</template>

<script>
export default {
    data() {
       return {
           errormessage: ''
       }
    },
    props: {
        label: {
            type: String,
            default: ''
        },
        prop: String
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {
           
    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {
        this.$on('validate' () => {
            
        })
    }
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>