<template>
    <div>
        Hook <!--hooks/ganchos são funções q permitem executar o codigo em momentos 
        especificos do ciclo de vida do componente-->
    </div>
</template>


<script>
import { onBeforeMount, onMounted, onBeforeUnmount, onUnmounted } from 'vue';

export default{ // setup -> fase de criação
    
    //beforeMount(){},
    //mounted(){},
    //beforeUnmount(){},
    //unmounted(){},

    setup(){
        onBeforeMount(()=> {
            console.log('onBeforeMount');
    }),

        onMounted(() => {
        console.log('onMounted');
    }),

       onBeforeUnmount(() => {
        console.log('onBeforeUnmount');
    }),

       onUnmounted(() => { //desmontagem fase de destruir td q quiser do componente p evitar memory leak
        console.log('onUnmounted');
    })

    }

}
</script>