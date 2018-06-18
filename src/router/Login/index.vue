<template>
  <div class="login">
    <div class="login-head">
      <img src="./login.jpg" alt="">
    </div>
    <div class="login-body">
      <ul class="login-form">
        <li class="login-form-item">
            <div class="login-form-input">
                <input type="text" v-model="form.username" placeholder="用户名">
            </div>
        </li>
        <li class="login-form-item">
            <div class="login-form-input">
                <input type="password" v-model="form.password" placeholder="密码">
            </div>
        </li>
        <li class="login-form-item">
          <div class="login-form-forget">忘记密码？</div>
        </li>
        <li class="login-form-item">
          <div class="login-button-submit" @click="submit">登录</div>
        </li>
        <li class="login-form-item">
          <div class="login-form-signin"><span>没有账号？</span><a @click="goPage('/signIn')" class="login-button-signin" href="javascript:;">注册</a></div>
        </li>
      </ul>
      <!-- <mt-spinner type="snake" color="yellow"></mt-spinner> -->
    </div>
  </div>
</template>

<script>
import md5 from 'md5'
import {Spinner, Indicator, MessageBox} from 'mint-ui'
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  components: {
    mtSpinner: Spinner
  },
  methods: {
    submit () {
      Indicator.open('登录中')
      let params = {
        username: this.form.username,
        password: md5(this.form.password)
      }
      this.$http.post('/users/login', params).then(res => {
        Indicator.close()
        res = res.body
        if (res.status === '1') {
          this.goPage('/')
        } else {
          MessageBox('登录失败')
        }
      }, err => {
        console.log(err)
        Indicator.close()
        MessageBox('登录失败')
      })
    },
    goPage (path) {
      if (path) {
        this.$router.push(path)
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../assets/style/index.less';
  .login-head {
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
          padding: 5px 20px;
          border: 2px solid @assist2;
          border-radius: 23px;
          box-sizing: border-box;
          input {
            width: 100%;
            height: 32px;
            line-height: 32px;
            font-size: 18px;
            &::-webkit-input-placeholder{
                color: @assist2;
                opacity:1;
            }
            color: @assist1;
            .custon-input()
          }
        }
        .login-button-submit {
            box-sizing: border-box;
            height: 46px;
            line-height: 46px;
            border-radius: 23px;
            background: @main1;
            color: #fff;
            font-weight: bold;
            font-size: 16px;
            text-align: center;
        }
        .login-form-forget {
            text-align: right;
            font-size: 12px;
            color: @assist1;
        }
        .login-form-signin {
            color: @assist1;
            .login-button-signin {
              font-weight: bold;
              color: @main2;
            }
        }
      }
    }
  }

</style>
