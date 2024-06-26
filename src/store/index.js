import { createStore } from 'vuex';

export default createStore({
  state: {
    message: 'Hello, Vuex!'
  },
  mutations: {
    setMessage(state, newMessage) {
      state.message = newMessage;
    }
  },
  actions: {
    updateMessage({ commit }, newMessage) {
      commit('setMessage', newMessage);
    }
  },
  modules: {
    // Additional modules can be added here
  }
});
