<template>
    <div>
        <!--exibe o valor do parametro-->
        {{ $route.query.page}}
        Usuário
        <br>
        <button @click="login()">
            login
        </button>
    </div>
</template>

<script>
export default{
    created(){
       // console.log(this.$router);
        console.log(this.$router);
        //funcionalidade do roteamento no vuejs (*push)
    },
    methods:{
        login(){
            //ajax do login
            this.$router.push({name: 'about'}) //navegação programatica
            console.log('chegou');
        }
    }

}
</script>