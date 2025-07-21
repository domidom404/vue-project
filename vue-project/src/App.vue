<template>
 <div>
  <TheHeader> 
    <template v-slot:description>
      <!-- 'v-slot' direciona conteudo para slots nomeados em componentes-->
      <p>dadsda</p>
    </template>

    conteudo do header - menu...    
  </TheHeader>
 </div>
</template>


<script>
import TheHeader from './components/TheHeader.vue';
export default {
  name: 'App',
  components: {TheHeader},
  data() {
    return {
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
 methods: {}
}
</script>

<style>

#app{
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #4e7092;
  margin: 60px;
}
</style>