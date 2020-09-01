<template>
    <div>
        <KFormItem>
            <KInput v-model="model.username"></KInput>
        </KFormItem>
        <KFormItem>
            <KInput v-model="model.password" type="password"></KInput>
        </KFormItem>
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