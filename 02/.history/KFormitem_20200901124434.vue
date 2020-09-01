<template>
    <div>
        <label v-if="label">
            {{label}}
        </label>
        <slot></slot>
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