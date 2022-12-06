// @ts-nocheck
/*
 * @Author: mfxhb
 * @Date: 2022-12-06 09:17:39
 * @LastEditTime: 2022-12-06 13:45:17
 * @Description:
 */
import App from "./App.vue";

import Vue from "vue";

import uView from "@/uni_modules/uview-ui";
Vue.use(uView);

import { store } from "@/plugins/vuex/vuex.js";

Vue.prototype.$vuex = store;

Vue.config.productionTip = false;
App.mpType = "app";
const app = new Vue({
  ...App,
  $vuex: store,
});
app.$mount();
