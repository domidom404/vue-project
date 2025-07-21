<template>
 <div>
  <div class="card">
    Teste
  </div>
  <BaseCard />
 </div>
</template>


<script>
import BaseCard from '@/components/BaseCard.vue'; //@ é uma forma curta pra dizer q vc ta dentro do src
export default {
  name: 'App',
  components: { BaseCard },
  data() {
    return {
    }
  },

 beforeUpdate(){},
 updated(){},
 beforeCreate(){},
 created(){},
 beforeMount(){},
 mounted(){},
 beforeMount(){},
 unmounted(){},
 watch:{},
 computed:{},
 methods: {}
}
</script>

<style>

#app{
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #4e7092;
  margin: 60px;
}
</style>