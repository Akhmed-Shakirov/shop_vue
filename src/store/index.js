import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import products from './modules/products'
import cart from './modules/cart'
import search from './modules/search'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    cart,
    search
  },
  plugins: [createPersistedState()]
})
