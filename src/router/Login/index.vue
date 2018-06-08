<template>
  <div class="login">
    <div class="login-head">
      <img src="./login.jpg" alt="">
    </div>
    <div class="login-body">
      <ul class="login-form">
        <li class="login-form-item">
            <div class="login-form-input">
                <input type="text" v-model="username" placeholder="用户名">
            </div>
        </li>
        <li class="login-form-item">
            <div class="login-form-input">
                <input type="password" v-model="password" placeholder="密码">
            </div>
        </li>
        <li class="login-form-item">
          <div class="login-form-forget">忘记密码？</div>
        </li>
        <li class="login-form-item">
          <div class="login-button-submit" @click="submit">登录</div>
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
    submit () {
      console.log(this.username, md5(this.password))
    }
  }
}
</script>

<style lang="less" scoped>
  .login-head {
    // height: 350px; // background: yellow;
    overflow: hidden;
    img {
      display: block;
      margin: 0px auto;
      margin-top: 100px;
      width: 250px;
      height: 235px;
    }
  }

  .login-body {
    margin-top: 15px;
    .login-form {
      width: 58%;
      margin: 0px auto;
      .login-form-item {
        width: 100%; // height: 32px;
        margin-bottom: 10px;
        .login-form-input {
          padding: 5px 10px 5px 10px;
          border: 2px solid #d7d7d7;
          border-radius: 16px;
          box-sizing: border-box;
          input {
            width: 100%;
            height: 32px;
            line-height: 32px;
            font-size: 14px;
            &::-webkit-input-placeholder{
                color: #d7d7d7;opacity:1;
            }
            color: #adadad;
            border: none;
            outline: none;
            background: none;
          }
        }
        .login-button-submit {
            box-sizing: border-box;
            height: 46px;
            line-height: 46px;
            border-radius: 16px;
            background: #27c79a;

            color: #fff;
            font-weight: bold;
            font-size: 16px;
            text-align: center;
        }
        .login-form-forget {
            text-align: right;
            font-size: 12px;
            color: #adadad;
        }
      }
    }
  }

</style>
