/*
 * @Author: mfxhb
 * @Date: 2022-12-06 13:46:32
 * @LastEditTime: 2022-12-06 13:53:44
 * @Description:
 */
import Vue from "vue";
import { Store } from "vuex";
import { Vuex } from "@/plugins/vuex/vuex.typer";

declare module "vue/types/vue" {
  interface Vue {
    $vuex: Vuex;
  }
}
