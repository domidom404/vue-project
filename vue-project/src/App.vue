<template>
  <AppProduct />
  {{ name }}
  <img @click="changeName()" src="./assets/logo.svg" alt="vue logo">
  <HelloWorld msc="welcome to your vue.js app"/>

</template>


<script>
import AppProduct from './components/Products/AppProduct.vue';
import HelloWorld from './components/HelloWorld.vue';
export default {
  name: 'App',
  components:{
    AppProduct,
    HelloWorld
  },
  setup() { //substitui fase de criação do componente
    //nao fica disponivel no template
    let name = 'thiago' //variavel estatica

    const changeName = () => {
      //algo 
      aler('chegou')
      name = 'Jay Snow'
    }

    //retorna oq ta disponivel no componente
    return{
      name,
      changeName
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
  margin-top: 60px;
}

</style>