/*
 * @Author: mfxhb
 * @Date: 2022-12-06 13:31:14
 * @LastEditTime: 2022-12-06 14:39:37
 * @Description:
 */
import { LoginState } from "@/views/other/login/login.typer";
import { Store } from "vuex";

export interface RootState {
  verssion: string;
}

export interface AllStateTypes extends RootState {
  login: LoginState;
}

export type Vuex = Store<AllStateTypes>;
