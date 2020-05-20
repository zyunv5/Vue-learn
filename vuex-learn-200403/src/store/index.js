import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "hehe",
    bilibili: {
      acFun: "我还想再活五百年"
    },
    count: 0
  },
  getters: {
    count: state => (state.count += 100)
  },
  mutations: {
    getNameChange(state) {
      this.state.name = "hahahaha";
    },
    add(state, n) {
      this.state.count += n;
    },
    sub(state, m) {
      this.state.count -= m;
    }
  },
  actions: {
    addAction(context) {
      context.commit("add", 2);
      setTimeout(() => {
        context.commit("sub",1);
      }, 2000);
      console.log("比reduce提前执行");
    },
    reduceAction({ commit }) {
      commit("sub",1);
    }
  }
});
