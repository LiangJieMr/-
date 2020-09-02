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
    inject: ['form'],
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
        // 监听校验事件 并执行
        this.$on('validate', () => {
            this.validate()
        })
    },
    methods: {
        validate() {
            //执行组件校验
            //1获取校验规则
        }
    },
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>