<template>
  <HelloWorld 
  user=""
  msg="Welcome to Your Vue.js App"/>
</template>


<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components:{
    HelloWorld
  },
  data(){
    return{
    }
  },
  
}
</script>

<style>
#app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing:grayscale;
  color: #98b3cf;
}

nav{
  padding: 1rem;
}

nav a{
  font-weight: bold;
  color: #98b3cf;
}

/* VueX -> biblioteca oficial do vuejs pra gerenciamento de estados,
como um banco de dados do frontend */
</style>