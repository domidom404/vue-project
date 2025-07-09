<template>
<div>
<!--v-bind instrui o atributo para que ele fique dinamico, sendo uma variavel com valor-->
  <div 
  v-for="(obj, index) in todos"  
  v-bind:key= "obj.id"
  class="todo-item"
  >
  <!--Usar apenas ':' é suficiente pro codigo entender que vc ta usando v-bind e deixa o codigo mais limpo-->
  <img 
  v-if="obj.imgSrc"
  :src="obj.imgSrc">
    {{ index }} - {{ obj.title }}
    
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
    "completed": false,
    "imgSrc":'https://placehold.co/150',
  },//uma imagem p usuario; precisa usar aspas pra declarar variavel dentro de um objeto
  //o site q ele usou 'placeholder.com' nao esta mais disponivel ent usei esse no lugar
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false,
    "imgSrc":'https://placehold.co/150',
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