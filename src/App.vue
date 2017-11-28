<template>
  <div id="app">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <meta name="viewport"
          content="height=device-height,width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no"/>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*font-size: 62.5%;*/
  }

  .cf17 {
    clear: both;
    content: "";
    display: block;
  }

  .titleHeader .titleHeaderAvatar {
    width: 2.5rem;
    height: 2.5rem;
    margin-left: 0.5rem;
    border-radius: 50%;
    display: block;
    border: 1px solid #2196F3;
  }
</style>
