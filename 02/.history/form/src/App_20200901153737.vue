<template>
  <div id="app">
      <kinput v-model="model.username"></kinput>
      <kinput v-model="model.password"></kinput>
  </div>
</template>

<script>
import Kinput from './components/Kinput.vue';
export default {
  name: 'App',
  data() {
    return {
      model: {
        username: "",
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
