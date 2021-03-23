export default {
  state: {
    cart: [
    ]
  },
  getters: {
    CART(state) {
      return state.cart
    }
  },
  actions: {
    ADD_TO_CART({commit}, product) {
      commit('SET_TO_CART', product)
    },
    DELETE_FROM_CART({commit}, index) {
      commit('REMOVE_FROM_CART', index)
    }
  },
  mutations: {
    SET_TO_CART: (state, product) => {
      if (state.cart.length) {
        let isProductExists = false;
        state.cart.map(function(item) {
          if (item.id === product.id) {
            isProductExists = true;
            item.quantity++
          }
        })
        if (!isProductExists) {
          state.cart.push(product)
        } 
      } else {
        state.cart.push(product)
      }
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1)
    }
  }
}