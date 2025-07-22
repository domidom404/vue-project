<template>
    <div :class="baseClass">
        <slot />
<!-- lembrando q v-on é o @-->
    <button @click="onClick()">
        X
    </button>
<!--botao pra fechar o alert-->
    </div>
    
</template>

<script>
export default{
    props:{
        variant:{
            type: String,
            default: ''
        },
    },
    computed: {
        baseClass(){
            return[
                'alert',
                this.variant ? `alert-${this.variant}` : ''

            ]
        },
    },

    methods:{
        onClick(){
            this.$emit('close')
            console.log('clickou'); //é registrado close e clickou ao clicar no botao x no console
        }
    }
}
</script>

<style scoped>
.alert{
    display: flex;
    justify-content: space-between;
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

/*

<pai> ->props
    <filho>
        <neto></neto> emit-event
    </filho>
</pai>

*/
</style>