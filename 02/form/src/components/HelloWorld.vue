<template>
  <div>
    <Kinput v-model="a" />
  </div>
</template>

<script>
import Kinput from './Kinput.vue';
export default {
  data() {
    return {
      a: '2',
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
