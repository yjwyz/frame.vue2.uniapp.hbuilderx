/*
 * @Author: mfxhb
 * @Date: 2022-12-06 14:08:24
 * @LastEditTime: 2022-12-06 14:11:42
 * @Description:
 */
const http = uni.$u.http;

/**@type {import("./request.typer.js").RGET} */
export const GET = (url, opt = {}) =>
  http.get(url, {
    custom: opt,
  });
