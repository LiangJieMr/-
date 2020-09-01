<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
import Kinput from './Kinput.vue';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

</style>
