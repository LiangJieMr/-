<template>
    <div>
        <label v-if="label">
            {{label}}
        </label>
        <slot></slot>
        <!-- 校验信息 -->
        <p></p>
    </div>
</template>

<script>
export default {
    props:{
        label: {
            type: String,
            default: ''
        }
    }
}
</script>