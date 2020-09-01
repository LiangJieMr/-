<template>
    <div>
        <KForm :model="model" :rules="rules">
            <KFormItem label='用户名' prop='username'>
            <KInput v-model="model.username"></KInput>
            </KFormItem>
            <KFormItem label='密码' prop='password'>
                <KInput v-model="model.password" type="password"></KInput>
            </KFormItem>
        </KForm>
    </div>
</template>
<script>
import KInput from "./kinput.vue";
import KForm from "./KForm.vue";
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
            },
            rules: {
                username: [{required: true，message:'用户名必填'}],
                password: [{required: true，message:'密码必填'}]
            }
        }
    },
}
</script>