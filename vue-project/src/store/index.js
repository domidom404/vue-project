import { createStore } from 'vuex'

export default createStore({
  state: { 
    user: {
        first_name:'Jay',
        last_name: 'Snow',
        email: 'jay@snow.com' 
      },
      products: [
        {
          id: 1,
          name: 'Bola',
          price: 100
        },
        {
          id: 2,
          name: 'Chuteira',
          price: 200
        },
        {
          id: 3,
          name: 'Meião',
          price: 50
        }
      ],
      cart:[]
  },

  mutations: { 
    storeUser(state, data){
      state.user = data;
    },

    addProduct(state, data) {
      state.cart.push(data) 
    },

    removeProduct(state, id) {
      const idx = state.cart.findIndex ( o => o.id === id)
      state.cart.splice(idx, 1); 
    },
    inCart(product){
      return this.cart.some(item => item.id === product.id)
    }
  },//state so pode ser salvo em mutations, é sincrono
  getters:{ 
    total(state) {
      return state.cart.reduce((total, item) => total += item.price, 0)
    },
  },//como as computeds
  actions: { //pode ser assincrono, precisa de intermediação
    storeUser({ commit }, data){
      //mudanças foram feitas pois o prof estava usando [(executor, (resolve)=> ...] 
      //sendo q essa função recebe os parametros 'resolve' e 'reject' dando erro de sintaxe p mim
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('storeUser', data);
          resolve();
          console.log('here');
        }, 3000); //esperar 3 segundos
      })
      
    }
  },

   //console.log(context, data); //apresenta dados do usuario
      //console.log(context.getters.total); //apresenta o total no carrinho
      //rotina cabulosa ajax
     
})
