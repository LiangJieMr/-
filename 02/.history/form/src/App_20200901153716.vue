<template>
  <div id="app">
      <kinput></kinput>
      <kinput></kinput>
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
