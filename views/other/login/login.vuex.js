/*
 * @Author: mfxhb
 * @Date: 2022-12-06 14:29:40
 * @LastEditTime: 2022-12-06 14:40:43
 * @Description:
 */
/**@type {import("./login.typer.js").LoginState} */
const state = {
  username: "123123123",
  password: "",
};

/**@type {import("./login.typer.js").MLogin} */
const login = {
  namespaced: true,
  state,
};

export { login };
