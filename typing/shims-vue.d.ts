/*
 * @Author: mfxhb
 * @Date: 2022-12-06 10:39:01
 * @LastEditTime: 2022-12-06 13:46:46
 * @Description:
 */
import { ComponentOptions } from "vue";

declare module "vue" {
  export interface ComponentOptions {
    onLaunch?: () => void;
    onShow?: () => void;
    onHide?: () => void;
    onLoad?: (options?: object) => void;
    onReady?: () => void;
    onPullDownRefresh?: () => void;
  }
}
