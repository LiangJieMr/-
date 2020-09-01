<template>
  <div id="app">
      <kinput v-model="model.username"></kinput>
      <kinput v-model="model.password"></kinput>
      <span>{{model.password}}</span>
      
      <span>{{model.username}}</span>
  </div>
</template>

<script>
import Kinput from 'components/Kinput.vue';
export default {
  name: 'App',
  data() {
    return {
      model: {
        username: "1fe",
        password: ""
      }
    }
  },
  components: {
    Kinput
  }
}
</script>

<style>

</style>
