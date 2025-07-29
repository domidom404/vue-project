<template>
 <div id="app">
  <div class="container">
     <button class="bttm" @click="updateUser()">
    Atualizar perfil
  </button>
  <HelloWorld 
  user=""
  msg="Welcome to Your Vue.js App"/>
  </div>
 </div>
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

  methods:{
    updateUser(){
      //commit é oq dispara o mutaded
    const newUser = {
      first_name:'percy',
      last_name: 'jackson',
      email: 'percy@jack.com'
    }//nova constante objeto
    this.$store.commit('storeUser', newUser) //segundo parametro
    }

  },
  
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #cdcdcd;
  background-color: #121212;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  background-color: #1e1e1e;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  width: 90%;
  max-width: 600px;
}

.bttm {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-bottom: 20px;
 /* o botao estava enorme tive q consertar manualmente tb */ 
}

nav {
  padding: 1rem;
}

nav a {
  font-weight: bold;
  color: #cdcdcd;
}
</style>