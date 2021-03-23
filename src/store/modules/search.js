export default {
  state: {
    searchValue: []
  },
  getters: {
    SEARCH_VALUE(state) {
      return state.searchValue;
    }
  },
  actions: {
    GET_SEARCH_VALUE({commit}, value) {
      commit('SET_SEARCH_VALUE', value)
    }
  },
  mutations: {
    SET_SEARCH_VALUE: (state, value) => {
      state.searchValue = value;
    }
  },
}