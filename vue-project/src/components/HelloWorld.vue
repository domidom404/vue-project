<script>
export default{
  name: 'HelloWorld',
  props: {
    msg: String 
  },
  created(){
    console.log('hello world', this.$store.state.user);
    //exibe no console o user armazenado no vueX
  }
}
</script>

<template>

  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <!--exibe informações do user vindas do VueX store-->
    {{ $store.state.user.first_name }}
    {{ $store.state.user.last_name }}
    {{ $store.state.user.email }}


    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<style>

h1 {
  font-weight: 500;
  font-size: 2.6rem;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
