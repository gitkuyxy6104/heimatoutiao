<template>
  <div class="loginBgi">
    <el-card class="login-card">
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <el-form style="margin-top:30px" :rules="logfn" :model="logForm" ref="myForm">
        <el-form-item prop="phone">
          <el-input placeholder="请输入您得手机号" v-model="logForm.phone"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input style="width:65%" placeholder="请输入您得验证码" v-model="logForm.code"></el-input>
          <el-button style="float:right" plain>获取验证码</el-button>
        </el-form-item>
        <el-form-item prop="cbox">
          <el-checkbox v-model="logForm.cbox">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%" @click="login_t">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      logForm: {
        phone: '',
        code: '',
        cbox: false
      },
      logfn: {
        phone: [
          { required: true, message: '请输入您的手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入正确得手机号' }
        ],
        code: [
          { required: true, message: '请输入您的验证码' }, {
            pattern: /^\d{6}$/,
            message: '请输入正确得验证码'
          }],
        cbox: [{
          validator: function (rule, value, callback) {
            if (value) {
              callback()
            } else {
              callback(new Error('请同意协议'))
            }
          }
        }]
      }
    }
  },
  methods: {
    login_t () {
      this.$refs.myForm.validate(function (isOK) {
        if (isOK) {
          //  认为前端校验登录表单成功
          console.log('前端校验成功,发送用户名和密码到后台去校验')
        }
      })
    }
  }
}
</script>

<style lang="less">
.loginBgi {
  height: 100vh;
  background-image: url("../../assets/img/login_bg.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-card {
    width: 440px;
    height: 340px;
    .title {
      text-align: center;
      img {
        height: 44px;
      }
    }
  }
}
</style>
