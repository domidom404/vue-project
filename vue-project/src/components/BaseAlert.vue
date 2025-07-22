<template>
    <!--o prefixo 'Base' na frente de Basecard e BaseAlert é pra padronizar arquivos de visualização-->
    <div :class="baseClass">
        seu formulario foi enviado com sucesso
    </div>
</template>

<script>
//slot trabalha com o conteudo, props com o comportamento do componente
export default{
    props: ['variant', 'text'],
    computed:{
        //valor dele depende do valor de variant, logo tem q ser computed
        baseClass(){
            return [
                'alert',
                this.variant ? `alert-${this.variant}` : ''
            ]
        },

    },
}
</script>

<style scooped>
.alert{
    padding: 5px;
    border-radius: 6px;
    color: gray;
    background: #ddd;
}

.alert-success{
    background: forestgreen;
    color: #fff;
}

.alert-danger{
    background: red;
    color: #fff;
}
</style>