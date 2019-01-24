import Vue from 'vue'
import App from './App.vue'
import store from "./store/store";
import VueRouter from 'vue-router'
import router from "./router";
import MintUI from "mint-ui";
import 'mint-ui/lib/style.css'
import config from "./lib/config/config";
import axios from "axios";

Vue.config.productionTip = false
Vue.prototype.hyzconfig = config
Vue.prototype.$ajax = axios
Vue.use(VueRouter)
Vue.use(MintUI)
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
