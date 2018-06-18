<template>
  <div class="signIn">
    <div class="signIn-head" @click="selectImg">
      <div class="signIn-portrait" :class="portraitUrl? 'selected':''">
        <img v-if="portraitUrl" :src="portraitUrl" alt="">
        <!-- <div v-if="!portraitUrl" class="">+</div> -->
      </div>
      <input type="text" class="signIn-from-discripe" v-model="discription" placeholder="写点内容介绍自己">
    </div>
    <div class="signIn-body">
      <ul class="signIn-form">
        <li class="signIn-form-item">
          <div class="signIn-form-label">用户名</div>
          <div class="signIn-form-input">
            <input type="text" v-model="username">
          </div>
        </li>
        <li class="signIn-form-item">
          <div class="signIn-form-label">邮箱</div>
          <div class="signIn-form-input">
            <input type="text" v-model="email">
          </div>
        </li>
        <li class="signIn-form-item">
          <div class="signIn-form-label">密码</div>
          <div class="signIn-form-input">
            <input type="password" v-model="password">
          </div>
        </li>
        <li class="signIn-form-item">
          <div class="signIn-button-submit" @click="singIn">注册</div>
        </li>
        <li class="signIn-form-item">
          <div class="signIn-form-login"><span>已经注册？</span><a @click="goPage('/login')" class="signIn-button-signin" href="javascript:;">去登录</a></div>
        </li>
      </ul>
      <input id="fileImage" class="fileImage" type="file"  accept="image/*" size="60">
    </div>
  </div>
</template>

<script>
import md5 from 'md5'
export default {
  data () {
    return {
      username: '',
      password: '',
      email: '',
      portraitUrl: '',
      discription: ''
    }
  },
  mounted () {
    let fileImageInput = document.getElementById('fileImage')
    fileImageInput.addEventListener('change', () => {
      let fileImage = fileImageInput.files
      let formData = new FormData()
      formData.append('dimg', fileImage[0])
      this.$http.post('/users/updatePortrait', formData).then(res => {
        res = res.body
        if (res.status === '1') {
          alert(res.message)
          this.portraitUrl = res.result.data.portraitUrl
        }
      }, err => {
        console.log(err)
      })
    })
  },
  methods: {
    selectImg () {
      document.getElementById('fileImage').click()
    },
    singIn () {
      let param = {
        username: this.username,
        password: md5(this.password),
        email: this.email,
        portraitUrl: this.portraitUrl
      }
      this.$http.post('/users/signIn', param).then(res => {
        res = res.body
        if (res.status === '1') {
          alert(res.message)
          this.goPage('/login')
        }
      }, err => {
        console.log(err)
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
  .signIn {
    .signIn-head {
      .signIn-portrait {
        width: 130px;
        height: 130px;
        border-radius: 65px;
        border: 2px solid @assist2;
        overflow: hidden;
        margin: 0 auto;
        margin-top: 90px;
        img {
          width: 100%;
        }
        &.selected {
          &:after {
            display: none;
          }
        }
        &:after {
              content: "+";
              text-align: center;
              color: @assist2;
              width: 100%;
              display: block;
              height: 130px;
              line-height: 130px;
              font-size: 60px;
        }
      }
      .signIn-from-discripe {
              &::-webkit-input-placeholder{
                font-weight: bold;
                color: @assist2;
                opacity:1;
              }
              margin-top: 15px;
              text-align:center;
              width:100%;
              .custon-input();
      }
    }
    .signIn-body {
      margin-top: 19px;
        .signIn-form {
            width: 58%;
            margin: 0 auto;
            .signIn-form-item {
              margin-bottom:10px;
              .signIn-form-label {
                font-weight: bold;
                color: @assist2;
                text-align: center;
              }
              .signIn-form-input {
                  border-bottom: 2px solid @assist2;
                  padding: 0px 10px;
                  input {
                    width: 100%;
                    height: 32px;
                    line-height: 32px;
                    text-align: center;
                    font-weight: bold;
                    font-size: 15px;
                    color:@main2;
                    .custon-input();
                  }
              }
              .signIn-button-submit {
                  box-sizing: border-box;
                  height: 46px;
                  line-height: 46px;
                  border-radius: 23px;
                  background: @main1;
                  color: #fff;
                  font-weight: bold;
                  font-size: 16px;
                  text-align: center;

                  margin-top: 45px;
              }
              .signIn-form-login {
                  text-align: center;
                  color: @assist1;
                  .signIn-button-login {
                    font-weight: bold;
                    color: @main2;
                  }
              }
            }
        }
        .fileImage {
              visibility: hidden;
        }
    }
  }
</style>
