<template>
  <CoccoleFoot msg="Coccleへようこそ" />
</template>

<script>
//import CoccoleHead from './components/CoccoleHead.vue'
//import CoccoleMain from './components/CoccoleMain.vue'
import CoccoleFoot from './components/CoccoleFoot.vue'

export default {
  name: 'App',
  components: {
//    CoccoleHead,
//    CoccoleMain
    CoccoleFoot
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
