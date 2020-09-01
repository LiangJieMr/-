<template>
    <div>
        <KInput v-model="model.username"></KInput>
        <KInput v-model="model.password"></KInput>
    </div>
</template>
<script>
import KInput from "./kinput.vue"
export default {
    comments: {
        KInput
    },
    data() {
        return {
            model: {
                username: 'tom',
                password: ''
            }
        }
    },
}
</script>