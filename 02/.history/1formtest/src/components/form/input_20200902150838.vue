<template>
  <div>
    <kform :model="model" :rules="rules">
      <kformitem label="用户名">
        <Kinput v-model="model.username"></Kinput>
      </kformitem>
      <Kformitem label="密码">
        <Kinput v-model="model.password" type="password"></Kinput>
      </Kformitem>
    </kform>
  </div>
</template>

<script>
import Kinput from "./Kinput.vue";
import Kformitem from "./Kformitem.vue";
import Kform from "./Kform.vue";
export default {
  data() {
    return {
        model: {
            username: "tom",
            password: "",
        },
       rules: {
            username: [{required: true, message:'用户名必填'}],
            password: [{required: true, message:'密码必填'}]
        }
    };
  },
  components: {
    Kinput,
    Kformitem,
    Kform,
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>