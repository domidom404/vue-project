<template>
  Hello vue <br>
  <AppButton 
  data-vue="Jay"
  variant="danger"
  @update="getUpdate"
  > <!--botao alterações-->
    Save
    <template #icon >Icon</template>
  </AppButton>
</template>


<script>
import AppButton from './components/AppButton.vue';

export default{
  name: 'App',
  components: { AppButton }, //nunca esquecer de declarar components
  setup() {
    const getUpdate = (data) => {
      console.log('getUpdate', data); //imprime o valor do update/dados
    }

    return{
      getUpdate,
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