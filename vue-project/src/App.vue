<script>
import HelloWorld from './components/HelloWorld.vue'
import TheHeader from './components/TheHeader.vue'//importa o componente TheHeader pro js
export default{
  name: 'App', //nome do componente atual, 'App.vue'
  components: {
    //registra os componentes que serão mostrados nesse template, no caso sendo HelloWorld e agr nosso cabeçalho TheHeader
    HelloWorld,
    TheHeader
  },

  data(){
    return {
      //tudo delcarado aqui sera um objeto reativo, ou seja, se mudar aqui, muda na tela
      showHeader: true,
      firstname: 'Jon',
      lastname: 'Snow',
      showName: false,
      acecessLevel: 'admin'
    }
  }
}
</script>

<template>
  <!-- v- são diretivas: dão "direções"/instruções pro cod html-->
  <!-- diferença entre v-if(+ pesado) e v-show(+eficiente) é que em v-show o objeto permanece no DOM, o v-if remove o componente. Semelhança é que ambos tem função de 'mostrar' e 'esconder' -->
  <TheHeader v-if="showHeader"/>
  
  <header>

  <div v-show="showName">
    Nome: {{ firstname }} <br> <!-- chave dupla é interpolação, usado p mostrar valores de variáveis-->
    Sobrenome: {{ lastname }}
  </div>

  <div v-if="acecessLevel === 'admin'">Usuário Admin</div>
  <div v-else-if="acecessLevel === 'marketing'">Usuário Marketing</div>
  <div v-else="">Usuário normal</div>
  <!--recomendado o uso de if pois usando o v-show daria pra ver o id de outros usuarios ao inspecionar o codigo-->
  
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/about">teste</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
