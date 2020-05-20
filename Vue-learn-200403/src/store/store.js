import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

function sleep(sec) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      resolve();
    }, sec * 1000);
  });
}

const store = new Vuex.Store({
  strict: true,
  state: {
    loading: false,
    article_list: [], //当前数据长度
    cur_page: 0, //当前页码
    loading_more: false,
    article_data: null
  },
  mutations: {
    appendArticleList(state, arg) {
      state.article_list = state.article_list.concat(arg); //点击显示更多
    },
    addPage(state, arg) {
      state.cur_page++; //当前页码加一
    },
    startLoading(state) {
      state.loading = true;
    },
    endLoading(state) {
      state.loading = false;
    },
    startLoadingMore(state) {
      state.loading_more = true;
    },
    endLoadingMore(state) {
      state.loading_more = false;
    },
    setArticleData(state, arg) {
      state.article_data = arg;
    }
  },
  actions: {
    async loadOneMorePage({ state, commit }, arg) {
      //获取数据
      commit("startLoading");
      commit("startLoadingMore");

      //await sleep(3);
      let data = await (
        await fetch(`http://localhost:8899/list?page=${state.cur_page}`)
      ).json();
      commit("endLoading");
      commit("endLoadingMore");
      commit("appendArticleList", data);

      commit("addPage");
    },

    async loadingArticle({ state, commit }, arg) {
      let data = await (
        await fetch(`http://localhost:8899/detail?id=${arg}`)
      ).json();

      commit("setArticleData", data);
    }
  },
  getters: {
    list_data(state) {
      if (state.cur_page == 0) {
        store.dispatch("loadOneMorePage");
      }
      return state.article_list;
    }

    // article(state, arg) {
    //   console.log(arg);
    //   store.dispatch("loadingArticle", arg);
    //   return store.state.article_data;
    // }
  }
});

export default store;
