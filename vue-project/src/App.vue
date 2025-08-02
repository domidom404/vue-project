<template>
  <h5>USER</h5>
  {{ user.first_name }}
  {{ user.last_name }}
  <br><br>
  <h6>FULLNAME</h6>
  {{ fullName }}
  <br><br>
<!--em template n precisa usar o '.value' p ref-->
  <button @click="user.first_name = 'Sol'">Atualizar</button>
</template>


<script>
import { computed, ref, watch } from 'vue';
//tudo é separado em componentes e vc importa oq realmente precisa

export default {
  name: 'App',

  setup() { 
    const user = ref({ 
      first_name: 'Jay',
      last_name: 'Snow'
    })

    const fullName = computed(() => {
      return `${user.value.first_name} ${user.value.last_name}`
    })
//quando o usuario for alterado
//primeiro parametro do watch e sua propriedade reativa, no caso foi usado pra observar apenas um valor do objeto
    watch( () => user.value.first_name, () => { 
      console.log('viu que o user mudou')
    }, {
      //deep: true -> p estar observando um obj inteiro
    })

    return{
      user,
      fullName
    }

  }
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

.img{
 width: 200px;
}

/* esquema de reatividade usando composition API */
</style>