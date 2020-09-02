<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    provide() {
        return {
            form: this// 传递form实例给后代
        }
    },
    props: {
        model: {
            type: Object,
            required: true
        },
        rules: {
            type: Object
        }
    },
    data() {
       return {
           
       }
    },
    methods: {
        validate(cb) {
            // map结果是若干Promise数组
            const tasks = this.$children
                .map(item => item.validate());
            //   所有任务必须全部成功才算校验通过
            Promise.all(tasks)
                .then(() => cb(true))
                .catch(() => cb(false));
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