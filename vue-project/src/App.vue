<template>
  <AppHook v-if="showAppHook"/>
  <button @click= "showAppHook = !showAppHook" >
    Toggle <!--botao faz o Hook sumir e aparecer, montando, desmontando e assim por diante-->
  </button>

  <h5>USER</h5>
  {{ user.first_name }}
  {{ user.last_name }}
  <br><br>
  <h6>FULLNAME</h6>
  {{ fullName }}
  <br><br>
  <button @click="user.first_name = 'Sol'">Atualizar</button>
</template>


<script>
import { computed, ref, watch } from 'vue';
import AppHook from './components/AppHook.vue';

export default {
  name: 'App',
  components: {
    AppHook
  },

  setup() { 
    const user = ref({ 
      first_name: 'Jay',
      last_name: 'Snow'
    })

    const showAppHook = ref(true)

    const fullName = computed(() => {
      return `${user.value.first_name} ${user.value.last_name}`
    })

    watch( () => user.value.first_name, () => { 
      console.log('viu que o user mudou')
    }, )

    return{
      user,
      fullName,
      showAppHook
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