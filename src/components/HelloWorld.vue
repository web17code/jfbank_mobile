<template>
  <div class="hello">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
  h1{
    font-size: 48px;
    width: 30rem;
    margin:0 auto;
    background-color: indianred;
  }
</style>
