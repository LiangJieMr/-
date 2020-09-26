<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>
<script src="./components/nePublisher.min.js"></script>
<script>
import HelloWorld from './components/HelloWorld.vue'
import "jquery"
export default {
  name: 'App',
  components: {
    HelloWorld
  }
}

</script>

<style>
</style>
