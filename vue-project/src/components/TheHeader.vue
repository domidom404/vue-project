<template>
<div>
 <!--obj é o objeto do loop; v-bind serve pra obj ser lido como variavel, ele disse q explica melhor dps; index é para fazer listagem-->
  <div 
  v-for="(obj, index) in todos"  
  v-bind:key= "obj.id"
  class="todo-item"
  >
    {{ index }} - {{ obj.title }}
    <!--key é um identificador unico do objeto q ajuda renderizar + rapido-->
    
  </div>

</div>

</template>

<script>
     export default{
      name: 'App',
      data() {
        return {
          todos: [ //foram pegos no site https://jsonplaceholder.typicode.com/todos?_limit=5
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
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
      }
     }
</script>

<style>
/*estilização basica do todo-item na tela*/
.todo-item {
  background: #000;
  margin: 0 0 5px 0;
  padding: 3px 6px;
  color: #fff;
}
#app{
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px;
}
</style>