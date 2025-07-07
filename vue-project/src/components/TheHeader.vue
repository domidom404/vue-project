
<template>
    <!-- template é a parte 'HTML' do nosso código -->
    <header class="header">
        Header
    </header>
</template>

<script>
//script é a parte em javascript do nosso código, professor disse que iremos trabalhar nas prox aulas
     export default{

     }
</script>

<style scoped> /* garante q o estilo n vaze p outros componentes
style é a parte em css do nosso código
o código é single file component, o que singifica que podemos escrever em html, javascript e css num msm aquivo
parece que tem que usar um tipo de comentario diferente em cada uma das partes msm assim */
.header { 
  background: #000;
  color: #fff;
  /*adicionei outras propriedades no header pq n ficou certinho no topo e deixou a pagina toda bugada*/
  padding: 10px;
  font-size: 1.2rem;
  text-align: center;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
</style>
