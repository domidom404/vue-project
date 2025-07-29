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
  mutations: { //mudar/ atualizar os dados do nosso storage, composto por funções que tem state como 1 parametro
    storeUser(state, data){
      state.user = data;
      console.log('storeuser', data);
    }

  },
  actions: {
  },
})
