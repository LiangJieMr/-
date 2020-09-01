<template>
    <div>
        <KInput v-model="model.username"></KInput>
        <KInput v-model="model.password" type="password"></KInput>
    </div>
</template>
<script>
import KInput from "./kinput.vue";
import KFormItem from "./KFormitem.vue";
export default {
    comments: {
        KInput,
        KFormItem
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