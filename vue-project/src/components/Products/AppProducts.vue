<template>
    <div>
        <!--injeta AppProduct em AppProducts-->
        <AppProduct 
        v-for="product in $store.state.products"
        :key="product.id"
        :product="product"
        />
    </div>
</template>

<script>
import AppProduct from './AppProduct.vue';
export default{
    components: { AppProduct }
}
</script>
