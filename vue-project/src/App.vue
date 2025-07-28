<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink :to="rotaDinamica">Serviços</RouterLink> <!-- Link dinâmico para a rota 'servicos' usando o objeto 'rotaDinamica' -->
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
      rotaDinamica: { name: 'servicos'} // Objeto usado para navegação dinâmica para a rota 'servicos'
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
  text-align: center;
  color: #2c3e50;
}

nav{
  padding: 30px;
}

nav a{
  font-weight: bold;
  color: #2c3e50;
}
</style>