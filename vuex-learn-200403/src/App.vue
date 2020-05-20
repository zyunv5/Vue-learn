<template>
  <div id="app">
    <h1>{{getCoin}}</h1>
    <h2>{{getBilibili}}</h2>
    <button @click="getNameChange()">改名字</button>
    <h3>{{count}}</h3>
    <button @click="add()">+</button>
    <button @click="sub()">-</button>
    <p>
   <button @click="addAction">++</button>
   <button @click="reduceAction">--</button>
</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: "App",
  computed: {
    ...mapState(["count"]),
    getCoin() {
      return this.$store.state.name;
    },
    getBilibili() {
      return this.$store.state.bilibili.acFun;
    },
    count() {
      return this.$store.getters.count;
    }
  },
  watch:{
    count(index,old){
      console.log(index,old);
    }
  },
  methods: {
    getNameChange() {
      this.$store.commit("getNameChange");
    },
    add() {
      this.$store.commit("add", 10);
    },
    sub() {
      this.$store.commit("sub", 5);
    },
    // ...mapMutations(["add", "sub"]),
    ...mapActions(["addAction", "reduceAction"])
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
