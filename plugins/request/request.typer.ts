/*
 * @Author: mfxhb
 * @Date: 2022-12-06 13:56:11
 * @LastEditTime: 2022-12-06 14:11:18
 * @Description:
 */
import { HttpRequestConfig } from "@/uni_modules/uview-ui/libs/luch-request";

export interface CustomType {
  auth?: boolean; // 是否携带权限
  loading?: boolean; // 是否加载动画
  catch?: boolean; // 是否返回异步错误
  toast?: boolean; // 是否吐司提示
}

export type ExtendHttpConfig = HttpRequestConfig & {
  custom?: CustomType;
};

export interface RGET {
  (url: string, opt?: CustomType): Promise<any>;
}
