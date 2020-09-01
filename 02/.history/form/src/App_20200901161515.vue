<!--父组件-->
 
<template>
   <test v-model = "isShow"></test>
</template>
<script>
   import test from './components/Kinput.vue';
   export default {
      components: {
         test
      },
      data() {
         return {
           isShow: false
         }
      }
   }
</script>