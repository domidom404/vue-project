import { createStore } from 'vuex'

export default createStore({
  state: { //literalmente estado da nossa aplicação
    user: {
        first_name:'Jay',
        last_name: 'Snow',
        email: 'jay@snow.com' 
      },
      products: [],
      cart:[]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
})
