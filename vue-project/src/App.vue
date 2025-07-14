<template>
  <div>
    <TheHeader v-if="showHeader"/>
    <h1>Hello World</h1>
    <br>
    <input 
    v-model="name"
    type="text">
    {{ name }} <br>
    <button @click="showHeader = !showHeader">
      Ativar e desativar header
    </button>
  </div>
</template>


<script>
import TheHeader from './components/TheHeader.vue';
export default {
  name: 'App',
  components: {TheHeader},
  data() {
    return {
      name: 'Joao Silva',
      showHeader: true,
    }
  },
// Criação: 
  //preparar o componente
  //Ajax, inicializar algumas variaveis
  //nao tem acesso ao DOM(template)
// Montagem:
  // Inicializar uma lib externa
  //Geralmente precisa de acesso ao template (DOM)
  //Tem acesso ao template (DOM)
// Atualização:
  //Debug
  // Update
// Desmontagem:
 // Remover tudo que for necessário para liberar memória (lib -> destroy)

 //HOOKS
 beforeUpdate(){
  console.log('beforeUpdate', this.name);
 },
 updated(){
  console.log('updated', this.name);
 },
 //antes do componente ser formado
 beforeCreate(){
  console.log('beforeCreate');
  console.log('Estado:', this.name);
  console.log('DOM:', this.$el) //$el puxa o elemento raiz do componente
 },
//depois do componente ser formado
 created(){
  console.log('created');
  console.log('Estado:', this.name);
  console.log('DOM:', this.$el)
 },
 
 //antes do componente ser montado
  beforeMount(){
    console.log('beforeMount');
    console.log('Estado:', this.name);
    console.log('DOM:', this.$el)  },
  //depois que o componente foi montado
  mounted(){
    console.log('mounted');
    console.log('Estado:', this.name);  
    console.log('DOM:', this.$el)
    },
  //antes de montar o componente
 beforeMount(){
  console.log('beforeMount');
 },
 unmounted(){
  console.log('unmounted');
 },

 watch:{
},

  computed:{
  },

  methods: {
}
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