<template>

{{  $store.getters.total }}
<AppProducts />
    <br><br>
        
    <pre>
      {{ $store.state.cart }}
    </pre>

    <br><br>
    <br><br>
    {{ $store.state.user.first_name }} {{ $store.state.user.last_name }} <br>
     <button class="bttm" @click="updateUser()">
    Atualizar perfil
  </button>
  <br><br>

</template>


<script>
import AppProducts from '@/components/Products/AppProducts.vue';
export default {
  name: 'App',
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
    //this.$store.commit('storeUser', newUser)
    this.$store.dispatch('storeUser', newUser).then(()=> {
      console.log('terminou com sucesso');
    })

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