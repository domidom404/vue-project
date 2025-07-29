<script>
export default{
  name: 'HelloWorld',
  props: {
    msg: String 
  },
  created(){
    console.log('hello world', this.$store.state.user);
  }
}
</script>

<template>

  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
   <p> {{ $store.state.user.first_name }}
    {{ $store.state.user.last_name }} </p> 
    <p>{{ $store.state.user.email }}</p>


    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. 
    </h3>
  </div>
</template>

<style>
/* fiz algumas alterações no css pq tava muito bagunçado e desconfigurado  */
h1 {
  font-weight: 500;
  font-size: 1.5rem;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  font-size: 2rem;
  margin: 1rem;
  text-align: center;
}

p{
  font-size: 1.5rem;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
