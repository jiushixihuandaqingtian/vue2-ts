<template>
  <div>
    <el-card class="login-form-layout">
      <el-form ref="loginForm"
               auto-complete="on"
               :model="loginForm"
               :rules="loginRules"
               label-position="left">
        <div style="text-align: center">
          <svg-icon icon-class="login-mall" style="width: 56px;height: 56px;color: #409EFF"></svg-icon>
        </div>
        <h2 class="login-title color-main">
          mall-admin-web
        </h2>
        <el-form-item prop="username">
          <el-input v-model="loginForm.username"
                    name="username"
                    type="text"
                    auto-complete="on"
                    placeholder="请输入用户名">
          <span slot="prefix">
            <svg-icon icon-class="user" class="color-main"></svg-icon>
          </span>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password"
                    name="password"
                    :type="pwdType"
                    auto-complete="on"
                    placeholder="请输入密码"
                    @keyup.enter.native="handleLogin">
          <span slot="prefix">
            <svg-icon icon-class="password" class="color-main"></svg-icon>
          </span>
            <span slot="suffix" @click="showPwd">
            <svg-icon icon-class="eye" class="color-main"></svg-icon>
          </span>
          </el-input>
        </el-form-item>
        <el-form-item style="margin-bottom: 60px;text-align: center">
          <el-button style="width: 45%" type="primary" :loading="loading" @click.native.prevent="handleLogin">
            登录
          </el-button>
          <el-button style="width: 45%" type="primary" @click.native.prevent="handleTry">
            获取体验账号
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <img :src="loginCenterBg" class="login-center-layout">
    <el-dialog
      title="公众号二维码"
      :visible.sync="dialogVisible"
      :show-close="false"
      :center="true"
      width="30%">
      <div style="text-align: center">
        <span class="font-title-large"><span class="color-main font-extra-large">关注公众号</span>回复<span
          class="color-main font-extra-large">体验</span>获取体验账号</span>
        <br>
        <img src="http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/banner/qrcode_for_macrozheng_258.jpg" width="160"
             height="160" style="margin-top: 10px">
      </div>
      <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dialogConfirm">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { setSupport, getSupport, setCookie, getCookie } from '@/utils/support'
import loginCenterBg from '@/assets/images/login_center_bg.png'

  @Component
export default class Login extends Vue {
    loginForm: any = { username: '', password: '' };

    loginRules: any = {};

    loading: boolean = false;

    pwdType: string = 'password';

    loginCenterBg:any = loginCenterBg;

    dialogVisible: boolean = false;

    supportDialogVisible: boolean = false;

    created() {
      this.loginForm.username = getCookie('username')
      this.loginForm.password = getCookie('password')
      if (this.loginForm.username === undefined || this.loginForm.username == null || this.loginForm.username === '') {
        this.loginForm.username = 'admin'
      }
      if (this.loginForm.password === undefined || this.loginForm.password == null) {
        this.loginForm.password = ''
      }
    }

    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    }

    handleLogin() {
      this.loading = true
      this.$store.dispatch('Login', this.loginForm).then(() => {
        this.loading = false
        setCookie('username', this.loginForm.username, 15)
        setCookie('password', this.loginForm.password, 15)
        this.$router.push({ path: '/' })
      }).catch(() => {
        this.loading = false
      })
    }

    handleTry() {
      this.dialogVisible = true
    }

    dialogConfirm() {
      this.dialogVisible = false
      setSupport(true)
    }
}
</script>

<style scoped>
  .login-form-layout {
    position: absolute;
    left: 0;
    right: 0;
    width: 360px;
    margin: 140px auto;
    border-top: 10px solid #409EFF;
  }

  .login-title {
    text-align: center;
  }

  .login-center-layout {
    background: #409EFF;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    margin-top: 200px;
  }
</style>
