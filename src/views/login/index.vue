<template>
  <div class="loginBgi">
    <el-card class="login-card">
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <el-form style="margin-top:30px" :rules="logfn" :model="logForm" ref="myForm">
        <el-form-item prop="mobile">
          <el-input placeholder="请输入您得手机号" v-model="logForm.mobile"></el-input>
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
        mobile: '',
        code: '',
        cbox: false
      },
      logfn: {
        mobile: [
          { required: true, message: '请输入您的手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入正确得手机号' }
        ],
        code: [
          { required: true, message: '请输入您的验证码' }, {
            pattern: /^\d{6}$/,
            message: '请输入正确得验证码'
          }],
        cbox: [{
          validator: function (rule, value, callback) { // validator是element ui 得一个自定义函数  名字必须是这样
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
      this.$refs.myForm.validate((isOK) => { // validate是一个方法 用来全局检测
        if (isOK) { // 因为检测之后 你并不知道结果需要用返回的参数来判断
          this.$axios({
            url: '/authorizations', // 请求地址
            method: 'post',
            data: this.logForm
          }).then(result => {
            window.localStorage.setItem('user-token', result.data.data.token) // 前端缓存令牌
            this.$router.push('/home') // 跳转到主页
            //  成功以后才会进入到then
          }).catch(() => {
            // elementUI的方法
            this.$message({
              message: '您的手机号或者验证码不正确',
              type: 'warning'
            })
          })
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>//lang="less"  是为了让css可以使用less格式 而scoped是一个属性他得作用是让该页样式只对该页有效果
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
