<template>
    <button @click="sendData"> <!--botao chama a função sendData ao ser clicado-->
        {{ variant }} <!--repassa o valor da prop variante-->
        <slot></slot>
            <slot name="icon" />
    </button>
</template>

<script>
export default{
    props: {
        variant:{
            type: String,
            default: 'success',
        },
    },

    setup(props, {emit}) { // props é de propriedades
     //slots -> acesso direto ao obj
     const sendData = () => {
        emit('update', props.variant) //pegar o valor da propriedade dinamicamente
    }

    return{
        sendData
    }
}


}
</script>