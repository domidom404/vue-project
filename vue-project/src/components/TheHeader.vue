<template>
  <div><!--vc clica no botao 'enviar' e ativa o evento-->
    <!--para isso usamos a diretiva 'v-on', capturando quando tiver um clique no evento-->
    <!-- 'v-on' pode ser substituido por '@' para encurtar o cod-->
    <button @click.once="onClick"> <!-- .once so registra o clique 1x-->
      Enviar
    </button>
    <br>
<!--registra quando o user passou ou tirou a seta do evento-->
    <div 
    @mouseover="onMouseOver"
    @mouseout="onMouseOut"
    >
      Mouse over
    </div>
    
    <br><br>
<!--.prevent previne o comportamento padrão do submit, que é recarregar a página, enviando o user pro site google-->
    <form
     action="https://google.com"
     @submit.prevent="onSubmit" 
     >
     <input
      type="text"
      @keyup="onKeyUp">
      <button type="submit">
        Enviar
      </button>
    </form>
<!-- modificadores de eventos: .stop, .prevent, .self, .capture, .once, .passive-->
 <!--'keyup' registra td digitado pelo user, '.enter' ajuda a so registrar dps de apertar ENTER-->
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    }
  },

  methods:{ 
  //objeto que colcoamos nossas funções pra fazer qqlr rotina
  onClick($evt){
    console.log('click', $evt);
   }, 
   onMouseOver($evt){
    console.log('mouse over', $evt);
   },
   onMouseOut($evt){
    console.log('mouse out', $evt);
   },
   onSubmit($evt){
    console.log('submit', $evt);
   },
   onKeyUp($evt){
    console.log('onKeyUp', $evt);
   }
  //'$evt' é o evento que foi disparado, e podemos usar ele pra pegar detalhes do evento, como o tipo de evento, o alvo do evento, etc
  }
}

</script>

<style>

#app{
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 60px;
}
</style>