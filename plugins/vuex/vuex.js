/*
 * @Author: mfxhb
 * @Date: 2022-12-06 10:49:04
 * @LastEditTime: 2022-12-06 14:39:07
 * @Description:
 */
import Vue from "vue";
import Vuex from "vuex";

import { login } from "@/views/other/login/login.vuex";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    verssion: "3.0",
  },
  modules: {
    login,
  },
});

export { store };
