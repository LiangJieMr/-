<template>
    <div>
        <label v-if="label">
            {{label}}
        </label>
        <slot></slot>
        <!-- 校验信息 -->
        <p v-if="errorMessage">
            {{errorMessage}}
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            errorMessage: ''
        }
    },
    props:{
        label: {
            type: String,
            default: ''
        },
        prop: String
        
    },
    inject: ['form'],
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
            const rules = this.form.rules[this.prop]
            //2获取数值
            const value = this.form.model[this.prop]
            //3执行校验
            const desc = {
                [this.prop]: rules
            }
            const schema = new Schema(desc)  //element
            //参数1是值 参数2是校验错误的对象的数组
            //返回promise<blooen>
            return schema.validate({[this.prop]:value}, errors => {
                if (errors) {
                    // 有错
                    this.errorMessage = errors[0].message
                } else {
                    //没错
                    this.errorMessage = ''
                }
            })
        }
    },
}
</script>