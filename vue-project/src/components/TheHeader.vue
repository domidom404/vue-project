<template>
  <header class="header">
    <h1
      v-if="$slots.title"
      class="title">
      <slot name="title"/>
    </h1>
    
    <div>
      <slot name="description" />
    </div>

    <div>
      <slot></slot>
    <!--permite que um conteudo externo seja inserido-->
      <!--no caso o conteudo da tag <TheHeader> no arq app.vue sera inserido aqui-->
    </div>
        
    
  </header>
</template>

<script>
 export default {
  mounted(){
    console.log(this.$slots); 
  }

 } 

</script>

<style>
.header{
  background: #000;
  color: #fff;

}
</style>