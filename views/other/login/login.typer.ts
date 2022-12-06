/*
 * @Author: mfxhb
 * @Date: 2022-12-06 14:30:08
 * @LastEditTime: 2022-12-06 14:37:21
 * @Description:
 */
import { VuexModule } from "@/typing/vuex";

export interface LoginState {
  username: string;
  password: string;
}

export type MLogin = VuexModule<LoginState>;
