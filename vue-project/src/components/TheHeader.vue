<template>
  <div>
    <!-- Formulários reativo com v-model para inserção de dados -->
    <input 
    v-model="name"
    type="text">
    <br><br>
    {{  name }}

    <br><br>

    <input 
    v-model="user.first_name"
    type="text">
    <br>
    
    <input 
    v-model="user.last_name"
    type="text">
    <br>
     {{  user.first_name }} {{  user.last_name }}

    <br><br><br>
    <select v-model="pageCount">
      <option value="5">5</option>
      <option value="10">10</option>
      <option value="15">15</option>
    </select> <br>
    {{ pageCount }}
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      name: '',
      pageCount: 5,//valor inicial do select
      user: {
        first_name: '',
        last_name: '',
      } 

  }
},
// em vuejs, watch é útil quando você precisa realizar operações assíncronas ou complexas em resposta a alterações de dados, 
// ou quando você precisa acessar os valores antigos e novos da propriedade observada
  watch:{
//iremos observar uma coisa, e assim que se alterar executamos uma rotina de programação
    name(vl){
      if(vl.length >= 3) {//so registra quando tiver 3 caracteres ou mais
        this.saveUserName() 
      }
    },
    pageCount(){
      this.changePage();
    },

    user: { //como so os campos estao sendo altrados, temos que colocar user como objeto, nao como função
      handler(){
        console.log('User alterado');
      },
      deep: true //para observar objetos dentro do objeto
    },
},

  computed:{
    
  },

  methods: {
    saveUserName(){
      console.log('Ajax'); //Ajax para salvar o nome
      console.log(this.name);
    },
    changePage(){
      console.log('Ajax changePage');
    }
 
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