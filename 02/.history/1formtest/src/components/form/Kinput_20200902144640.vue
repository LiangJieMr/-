<template>
   <div>
       <!-- 自定义组件实现v-model必须实现:value,@input -->
        <!-- v-bind="$attrs"存储props之外的部分 -->
       <input type="$attrs" :value="value" @input="Oninput">
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
    data() {
       return {
           
       }
    },
    methods: {
        Oninput(e) {
            //通知老爹数据发生变化
            this.$emit('input', e.target.value)
        }
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {
               
    }
}
</script>
<style scoped>
/* @import url(); 引入css类 */

</style>