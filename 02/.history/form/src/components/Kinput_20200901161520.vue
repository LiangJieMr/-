<!--子组件-->
 
<template>
  <div>
   <div>{{value}}</div>
   <Button @click="$emit('input',false)">关闭</Button>
  </div>
</template>
<script type="text/ecmascript-6">
    export default {
        props:['value'],
        mounted() {
            console.log(this.value)
        }
    }
</script>