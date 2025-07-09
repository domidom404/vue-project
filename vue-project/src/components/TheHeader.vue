<template>
  <div>
  <!--como fazer o bind com class e style-->
  <div>

    <h1 :class="{'title': true, 'title-home': isHome}">
      Curso Vue 3
    </h1>

    <p :class="pClass">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum rem tempora quasi pariatur reprehenderit voluptatum, neque, laudantium harum deserunt reiciendis similique aliquam. Deleniti, quam quibusdam velit molestiae iure voluptas itaque.
    </p>

<!--pode usar qualquer atributo do css usando o style-->
    <p :style="styleClass">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus cumque neque a voluptatum earum, voluptates facilis amet voluptas tempore! Nisi libero consequuntur ullam ab! Ex velit corporis maxime necessitatibus nostrum.
    </p>


  </div>

<div>
  <div 
  v-for="(obj, index) in todos"  
  v-bind:key= "obj.id"
  class="todo-item"
  >
  <img 
  v-if="obj.imgSrc"
  :src="obj.imgSrc">
    {{ index }} - {{ obj.title }}
    
  </div>
</div>
</div><!--coloquei uma div extra pra emglobar as outras e ficar menos 'solto'-->
</template>

<script>
     export default{
      name: 'App',
      data() {
        return {
          isHome: true,
          classVar: 'title',
          //se nao quiser escrever background-color pode escrever tirando o - e com a 2 palavra em maiusculo
          styleClass: {'color': 'aqua', 'backgroundColor': 'black', 'font-size': '20px'},
//prof havia colocado apenas 'pClass: {...}' e tava dando erro pq a variavel ainda nao estava acessivel a esse ponto
//sendo uma função, ela é acessada no momento que o Vue renderiza o template
          pClass(){
            return ['text', {'text-home': this.isHome}];
          },
          todos: [ 
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false,
    "imgSrc":'https://placehold.co/150',
  },
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
.title{
  font-size: 20px;
  color: blue;
}

.title-home{
  font-size: 40px;
  color: green;
}

.text{
  color: yellow;
}

.text-home{
  color: seagreen;
}
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