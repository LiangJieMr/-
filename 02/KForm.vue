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
    methods: {
        validate(cb) {
            //结果为 promise数组
            const tasks = this.$children
            .filter(item => item.prop)
            .map(item => item.validate)
            Promise.all(tasks)
                .then(() => cb(true))
                .cath(() => cb(false))
        }
    },
}
</script>