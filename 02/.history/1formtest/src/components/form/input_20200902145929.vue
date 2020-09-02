<template>
  <div>
    <kformitem>
      <Kinput v-model="model.username"></Kinput>
    </kformitem>
    <kformitem>
      <Kinput v-model="model.password"></Kinput>
    </kformitem>
  </div>
</template>

<script>
import Kinput from "./Kinput.vue";
import Kformitem from "./Kformitem.vue";
export default {
  data() {
    return {
      model: {
        username: "tom",
        password: "",
      },
    };
  },
  components: {
    Kinput,
    Kformitem,
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