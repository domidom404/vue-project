<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink :to="rotaDinamica">Serviços</RouterLink>
    <RouterLink to="/usuarios/10">Usuario</RouterLink>  <!-- Link para a página de usuário com id 10 -->
    <router-link to="/about">About</router-link>
  </nav>

  <!-- Renderiza o componente da rota atual -->
  <RouterView></RouterView>
</template>


<script>
import { RouterLink, RouterView } from 'vue-router';
export default {
  data() {
    return {
      rotaDinamica: { name: 'servicos'} 
    }
  },

 beforeUpdate(){},
 updated(){},
 beforeCreate(){},
 created(){},
 beforeMount(){},
 mounted(){},
 beforeMount(){},
 unmounted(){},
 watch:{},
 computed:{},
 methods: {
  onClose(){
    this.showAlert = false
    console.log('on close');
  }
 }
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
  padding: 30px;
}

nav a{
  font-weight: bold;
  color: #98b3cf;
}
</style>