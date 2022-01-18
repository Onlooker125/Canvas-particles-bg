<template>
  <div>
    <h1>登录</h1>账号：
    <input type="text" />
    <br />
    <br />密码：
    <input type="text" name id />
    <particles-bg type="random" :bg="true" />
  </div>
</template>

<script>
import { ParticlesBg } from 'particles-bg-vue'
export default {
  components: {
    ParticlesBg,
  },
}
</script>

<style>
</style>