<template>
  <div id="app">
    <div id="nav">
      <Navbar />
    </div>
    <router-view />
    <back-top color="#7957D5" :size="1.1" :slow="10"></back-top>
  </div>
</template>

<script>
import Vue from "vue";
import Navbar from "@/components/Navbar.vue";
import BackTop from "@mlqt/vue-back-top";
Vue.use(BackTop);
export default {
  components: {
    Navbar
  }
};
</script>


<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f2f7f8;
}

#nav {
  padding: 0 0 10px 0;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.text-right {
  text-align: right;
}

.text-left {
  text-align: left;
}

.text-success {
  color: #23d160;
}

.text-info {
  color: #209cee;
}

.text-warning {
  color: #ffdc57;
}

.text-danger {
  color: #ff3760;
}

.text-primary {
  color: #01d1b2;
}
</style>
