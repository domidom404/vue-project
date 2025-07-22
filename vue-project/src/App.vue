<template>
  
 <div>
  <BaseAlert 
  v-if="showAlert"
  :variant="variant" 
  @close="onClose()"
  >
  <!--close e um evento personalizado que criamos pro componente, não é padrao do js-->
    {{ text }}
  </BaseAlert>

 </div>
</template>


<script>
import BaseAlert from '@/components/BaseAlert.vue'; 
export default {
  name: 'App',
  components: { BaseAlert },
  data() {
    return {
      showAlert: true,
      variant: 'success',
      text: 'Seu formulario foi enviado'
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
 methods: {
  onClose(){
    this.showAlert = false
    console.log('on close');
  }
 }
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