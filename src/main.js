import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import echarts from "echarts";
import "buefy/dist/buefy.min.css";

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;

Vue.use(Buefy);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
