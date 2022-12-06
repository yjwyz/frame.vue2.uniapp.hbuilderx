<!--
 * @Author: mfxhb
 * @Date: 2022-12-06 14:14:08
 * @LastEditTime: 2022-12-06 14:41:29
 * @Description: 
-->
<template>
  <view>
    <u-button @click="test">测试接口</u-button>
    <view>{{ teststr }}</view>
  </view>
</template>

<script>
import { testApi } from "./login.api.js";

export default {
  name: "Login",
  data() {
    return {
      teststr: "",
    };
  },
  onReady() {
    this.teststr = this.$vuex.state.login.username;
  },
  methods: {
    async test() {
      const result = await testApi();
      console.log(result);
    },
  },
};
</script>

<style lang="scss" scoped></style>
