<template>
  <div> 
    <div>
      -one way data binding- <br>
      -two way data binding- <br> <!--ou ligação bidirecional de dados-->
      -v-model -> formularios- <!--comando utilizado pro two way bd-->
    </div>
<!-- o two way permite q o valor de campo de um formulario e a variavel do JS fiquem sempre sincronizados-->
    <br><br>

    <div>
      <label>Nome</label> <br>
          <input 
           v-model="name"
           type="text"
           >
    {{ name }}
<!-- se vc muda a variavel no input a variavel muda-->
    </div>

    <br><br>

    <div>
      <!--estou misturando ingles e pt pq o prof tbm esta fazendo isso e disse que pe so pra exemplo, estou ciente de que nao devemos fzr isso em codigos serios-->
      <!--seleciona uma opcçao na lista do formulario-->
      <label>Sports</label> <br>
      <select v-model="sports">
      <option value="">Escolha</option>

      <option value="futebol">Futebol</option>
      <option value="skate">Skate</option>
      <option value="tenis">Tenis</option>
      </select> <br>
      {{ sports }}
    </div>

    <br><br>

    <div>
      <label>NewsLetter</label> <br>
      <input
        v-model="newsletter"
        type="radio"
        value="Sim"
        >Sim

        <input 
        v-model="newsletter"
        type="radio"
        value="Não"
        >Não <br>
        {{ newsletter }}
    </div>

    <br><br>

    <div>
      <!-- seleciona se aceita ou não o contrato-->
      <label>Contrato</label> <br>
      <input
        v-model="contract"
        type="checkbox"
        >Aceita nossos termos?... <br>

        {{ contract }}
    </div>

    <br><br>

      <div>
      <!--se vc muda a variavel no codigo, o input tb muda automaticamente -->
      <label>Cores que você mais gosta</label> <br>
      <input
        v-model="colors"
        type="checkbox"
        value="Azul"
        >Azul

        <input 
        v-model="colors"
        type="checkbox"
        value="Amarelo"
        >Amarelo <br>
        {{ colors }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      name: 'Jon Snow',//primeira direção, a segunda é oq o usuario colocar no campo
      sports:'futebol',
      newsletter: '', //se colocasse 'sim' ou 'nao' aqui, o valor padrão seria esse, mas como deixei vazio, o valor padrão é vazio
      contract: true,
      colors: [],//captura opções no array, se nao fizer isso a checkbox vem marcada ambas as opções de uma vez
    }
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