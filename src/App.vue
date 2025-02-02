<template>
    <CoccoleHead msg="coccole" />
    <CoccoleMain msg="main" />
    <CoccoleFoot msg="2022" />
</template>

<script>
import CoccoleHead from './components/CoccoleHead.vue'
import CoccoleMain from './components/CoccoleMain.vue'
import CoccoleFoot from './components/CoccoleFoot.vue'

export default {
  name: 'App',
  components: {
    CoccoleHead,
    CoccoleMain,
    CoccoleFoot,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Merriweather,serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
