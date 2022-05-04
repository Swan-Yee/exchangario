import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  namespaced: true,
  state() {
    return {
      register: {
        isProcessing: true,
        error: "",
      },
    };
  },
  actions: {
    async register({ commit }, { mail, password }) {
      commit("setRegisterIsProcessing", true);
      commit("setRegisterError", "");
      try {
        const userCredentials = await createUserWithEmailAndPassword(
          getAuth(),
          mail,
          password
        );
        return userCredentials.user;
      } catch (e) {
        commit("setRegisterError", e.message);
      } finally {
        commit("setRegisterIsProcessing", false);
      }
    },
  },
  mutations: {
    setRegisterProcessing(state, isProcessing) {
      state.register.isProcessing = isProcessing;
    },
    setRegisterError(state, error) {
      state.register.error = error;
    },
  },
};
