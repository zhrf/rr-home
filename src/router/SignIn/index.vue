<template>
  <div class="signIn">
    <div class="signIn-head" @click="selectImg">
      <img src="./touxiang.jpg" alt="">
    </div>
    <div class="signIn-body">
      <ul class="signIn-form">
        <input id="fileImage" class="fileImage" type="file"  accept="image/*" size="60">
        <img src="http://localhost:10006/images/abc.png" alt="">
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
  mounted () {
    let fileImageInput = document.getElementById('fileImage')
    fileImageInput.addEventListener('change', () => {
      let fileImage = fileImageInput.files
      let formData = new FormData()
      formData.append('dimg', fileImage[0])
      formData.append('mid', 1)
      this.$http.post('http://localhost:10006/users/update', formData).then(response => {
        console.log(response)
      }, response => {
        // error callback
      })
    })
  },
  methods: {
    selectImg () {
      document.getElementById('fileImage').click()
    },
    singIn () {
      console.log(this.username, md5(this.password))
      let param = {
        username: this.username,
        password: md5(this.password)
      }
      this.$http.post('http://localhost:10006/users/signIn', param).then(response => {
        console.log(response)
      }, response => {
        // error callback
      })
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
