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
  getters: {
  },
  mutations: { 
    storeUser(state, data){
      state.user = data;
    },

    addProduct(state, data) {
      state.cart.push(data) //adicionar mais um item no array
    },

    removeProduct(state, id) {
      const idx = state.cart.findIndex ( o => o.id === id)
      state.cart.splice(idx, 1); //remove um item do index

    },
    inCart(product){
      return this.cart.some(item => item.id === product.id)
    }
  },
  actions: {
  },
})
