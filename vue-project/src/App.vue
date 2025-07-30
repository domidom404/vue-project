<template>
    <AppProducts />
    <br><br>
        
  <!-- <pre>: tag usada pra exibit codigo fonte ou txt c formatação original-->
    <pre>
      {{ $store.state.cart }}
    </pre>

    <br><br>
     <button class="bttm" @click="updateUser()">
    Atualizar perfil
  </button>

</template>


<script>
import AppProducts from '@/components/Products/AppProducts.vue';
//importa componentes de produtos
export default {
  name: 'App',
  //declara componente filho
  components:{
    AppProducts,
  },
  data(){
    return{
    }
  },

  methods:{
    updateUser(){
    const newUser = {
      first_name:'percy',
      last_name: 'jackson',
      email: 'percy@jack.com'
    }
    this.$store.commit('storeUser', newUser)
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