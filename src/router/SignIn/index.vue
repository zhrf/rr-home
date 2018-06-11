<template>
  <div class="signIn">
    <div class="signIn-head">
      <img src="./touxiang.jpg" alt="">
    </div>
    <div class="signIn-body">
      <ul class="signIn-form">
        <li class="signIn-form-item">
          <div class="signIn-form-input">
            <input type="text" v-model="username" placeholder="用户名">
          </div>
        </li>
        <li class="signIn-form-item">
          <div class="signIn-form-input">
            <input type="password" v-model="password" placeholder="密码">
          </div>
        </li>
        <li class="signIn-form-item">
          <div class="signIn-button-submit" @click="singIn">注册</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import md5 from 'md5'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    singIn () {
      console.log(this.username, md5(this.password))
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../assets/style/index.less';
  .signIn {
    .signIn-head {
      width: 100px;
      height: 100px;
      border-radius: 50px;
      overflow: hidden;
      margin: 0 auto;
      margin-top: 100px;
      img {
        width: 100%;
      }
    }
    .signIn-body {
        .signIn-form {
            width: 58%;
            margin: 0 auto;
        }
    }
  }
</style>
