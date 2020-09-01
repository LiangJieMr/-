<template>
  <div>
    <Kinput v-model="model.username"></Kinput>
  </div>
</template>

<script>
import Kinput from './Kinput.vue';
export default {
  data() {
    return {
      model: {
        username: '3213'
      }
    }
  },
  comments: {
    Kinput
  }
}
</script>


<style>

</style>
