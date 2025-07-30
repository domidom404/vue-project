<template>
    <div class="card">
     {{ product.name }} - {{  product.price }} <!--apresenta nome e preço dos produtos-->
     <button @click="addProduct()">
        Adicionar 
     </button>
<!-- incart veficica se o item esta no carrinho pra aparecer o botao de remover-->
     <button 
     v-if="inCart(product)"
     @click="removeProduct()">
        Remover 
     </button>
    </div>
</template>

<script>
export default{
    props:{ 
        product: Object
    },

    methods:{
        addProduct(){
            this.$store.commit('addProduct', this.product) //adiciona produto 
        },
        removeProduct(){
            this.$store.commit('removeProduct', this.product) //remove produto
        },
        inCart(product) {
        return this.$store.state.cart.some(item => item.id === product.id)
      },
    }
}
</script>

<style>

.card{
    background-color: rgb(97, 97, 97);
    padding: 6px;
    margin-bottom: 5px;
}

</style>