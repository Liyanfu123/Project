import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import http from "./http";
import axios from "axios"
import dayjs from  "dayjs"
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VCharts from 'v-charts';


Vue.use(VCharts);
Vue.use(ElementUI);
Vue.prototype.$axios = http
Vue.prototype.$dayjs =dayjs
Vue.config.productionTip = false;

//响应拦截
axios.defaults.timeout = 10000; //设置超时时间
//滤请求结果 只返回结果的data
axios.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
