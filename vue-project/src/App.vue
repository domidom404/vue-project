<template>
  {{ name }} <br><br>
  <h5>USER</h5>
  {{ user.first_name }}
  {{ user.last_name }}
  <br><br>
  <h5>ADMIN</h5>
  {{ admin.first_name }}
  {{ admin.last_name }}
  <br><br>
  
  <img 
  class="img"
  @click="changeName()"
  alt="vue logo" 
  src="./assets/logo.svg" >
  <HelloWorld msg="welcome to your vue.js app"/>

</template>


<script>
import HelloWorld from './components/HelloWorld.vue';
import { ref, reactive } from 'vue';


export default {
  name: 'App',
  components: {
   HelloWorld
  },

  setup() { 
    //reactive e ref são mt parecidos
    const user = reactive({ //funciona apenas pra obj, arrays e semelhantes
      first_name: 'Jay',
      last_name: 'Snow'
    })

    const admin = ref({ //consegue usar string e number
      first_name: 'admin',
      last_name: 'master'
    })

    const count = ref(0)
    console.log(count)

    let name = 'thiago' 

    const changeName = () => {
      alert('chegou')
      name = 'Jay Snow'
      user.first_name = 'Sir'
      admin.value.first_name = 'Sol' //vue.js usa o '.value' no ref pra criar uma 'casca' de reatividade dentro do js
    }
//foi recomendado usar sempre o ref e não esquecer de usar o '.value'
    
    return{
      user,
      name,
      changeName,
      admin
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

.img{
 width: 200px;
}

/* esquema de reatividade usando composition API */
</style>