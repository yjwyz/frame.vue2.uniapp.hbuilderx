/*
 * @Author: mfxhb
 * @Date: 2022-12-06 13:23:23
 * @LastEditTime: 2022-12-06 14:36:06
 * @Description:
 */
import { RootState } from "@/plugins/vuex/vuex.typer";
import { Module } from "vuex";

type VuexModule<T> = Module<T, RootState>;
