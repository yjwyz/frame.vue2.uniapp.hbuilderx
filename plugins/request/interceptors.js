/*
 * @Author: mfxhb
 * @Date: 2022-12-06 10:35:47
 * @LastEditTime: 2022-12-06 14:04:50
 * @Description:
 */
import { baseURL } from "@/super-controller/sp.settins.js";
// 此vm参数为页面的实例，可以通过它引用vuex中的变量
export default (vm) => {
  // 初始化请求配置
  uni.$u.http.setConfig((config) => {
    /**@type {import("./request.typer.js").ExtendHttpConfig} */
    const _config = config;
    _config.baseURL = baseURL;
    return _config;
  });

  // 请求拦截
  uni.$u.http.interceptors.request.use(
    (config) => {
      /**@type {import("./request.typer.js").ExtendHttpConfig} */
      const _config = config;
      /**@type {import("../vuex/vuex.typer.js").Vuex} */
      const store = vm.$vuex;
      _config.data = config.data || {};

      if (_config?.custom?.auth) {
        _config.header = {
          token: "",
        };
      }
      return _config;
    },
    (config) => {
      // 可使用async await 做异步操作
      return Promise.reject(config);
    }
  );

  // 响应拦截
  uni.$u.http.interceptors.response.use(
    (response) => {
      const data = response.data;

      // 自定义参数
      /**@type {import("./request.typer.js").CustomType} */
      const custom = response.config?.custom;
      if (data.code !== 200) {
        // 如果没有显式定义custom的toast参数为false的话，默认对报错进行toast弹出提示
        if (custom.toast === true) {
          uni.$u.toast(data.message);
        }

        // 如果需要catch返回，则进行reject
        if (custom?.catch) {
          return Promise.reject(data);
        } else {
          // 否则返回一个pending中的promise，请求不会进入catch中
          return new Promise(() => {});
        }
      }
      return data.data === undefined ? {} : data.data;
    },
    (response) => {
      // 对响应错误做点什么 （statusCode !== 200）
      return Promise.reject(response);
    }
  );
};
