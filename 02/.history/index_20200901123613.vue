<template>
    <div>
        <KInput v-model=""></KInput>
        <KInput></KInput>
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