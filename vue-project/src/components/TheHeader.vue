<template>
  <div>
    {{ fullName }} <br> <br>
    <!--computed properties(propriedades computadas)-->

    <h2>Todos em aberto</h2>
    <div
     v-for="todo in uncompletedTodos"
     :key="todo.id" 
     > <!--:key -> chave unica usado pra renderizar elementos corretamente conforme atualizações -->
    {{ todo.title }} 
    </div>

    <br><br>

    <h2>Todos completas</h2>
     <div
     v-for="todo in completedTodos"
     :key="todo.id"
     >
    {{ todo.title }} 
    </div>

    <br><br><br>

    <h2>Todos</h2>
    <div
     v-for="todo in todos"
     :key="todo.id"
     >
<!--'v-model' faz 2way data binding entre checkbox e a propriedade 'completed' de kd todo-->
     <input
      v-model="todo.completed"
      type="checkbox"
      >
<!--a reatividade ta funcionando quando marco ou desmarco um checkbox o item sai ou entra p aberto/fechado -->
    {{ todo.title }} 
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      user:{
        first_name: 'Jon',
        last_name: 'Snow',
      },
//se o array 'todo' for alterado 'uncompletedTodos' e 'completedTodos' serão recomputados
      todos: [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": true
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  }
]
    }
  },
//proxy é onde o vue.js faz toda a reatividade dele
// 'this' -> como acessar dados do user dentro das outras funções do componente
  computed:{
//Dependência quando o valor final depende de outros valores
    fullName(){
      return `${this.user.first_name} ${this.user.last_name}`//'template srting pra concatenar'
//precisamos retornar pq a função sera tratada como uma função normal
    },
    uncompletedTodos(){
      return this.todos.filter( todo => !todo.completed);
      //filtra os todos incompletos (só onde aparece "completed":false aparecerá )
    },
    completedTodos() {
      return this.todos.filter( todo => todo.completed);
      //filtra os todos completos (só onde aparece "completed":true aparecerá )
   
    },


  },

  methods:{ 
    click() {
      console.log(this.user);
    }
 
  },

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