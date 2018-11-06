<template>
  <login-container>
    <v-flex
      xs12
      sm5
      lg4>
      <v-card>
        <v-tabs
          v-model="loginTab"
          class="pa-3">
          <v-tab class="subheading">密码登录</v-tab>
          <v-tab class="subheading">短信登录</v-tab>
        </v-tabs>
        <v-divider/>
        <v-card-text>
          <v-responsive :aspect-ratio="16/10">
            <v-form
              ref="formUserName"
              v-model="validUserName"
              :style="{ width: '100%' }"
              lazy-validation>
              <v-text-field
                v-model="userName"
                :rules="userNameRules"
                label="用户名"
                placeholder="请输入手机号码"
                color="info"
                height="54"
                counter
                required
                @keyup.enter="submit"/>
            </v-form>
            <v-form
              v-show="loginTab === 0"
              ref="formPassword"
              v-model="validPassword"
              :style="{ width: '100%' }"
              lazy-validation>
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                :type="passwordVisible ? 'text' : 'password'"
                label="密码"
                placeholder="请输入密码"
                color="info"
                height="54"
                counter
                required
                @keyup.enter="submit">
                <v-btn
                  slot="append"
                  icon
                  depressed
                  @click="passwordVisible = !passwordVisible"><v-icon>{{ passwordVisible ? 'visibility_off' : 'visibility' }}</v-icon></v-btn>
              </v-text-field>
            </v-form>
            <v-form
              v-show="loginTab === 1"
              ref="formVcode"
              v-model="validVcode"
              :style="{ width: '100%' }"
              lazy-validation>
              <v-text-field
                v-model="vcode"
                :rules="vcodeRules"
                label="验证码"
                placeholder="请输入验证码"
                color="info"
                counter
                height="54"
                required
                @keyup.enter="submit">
                <v-btn
                  slot="append"
                  :disabled="vcodeBtnDisabled"
                  depressed
                  @click="getVcodeForLogin">{{ vcodeBtnText }}</v-btn>
              </v-text-field>
            </v-form>
            <v-checkbox
              v-model="checkbox"
              label="7天内自动登录"/>
          </v-responsive>

        </v-card-text>
        <v-card-actions class="pb-3 pt-0 px-3">
          <v-btn
            :disabled="submitBtnDisabled"
            :loading="loading"
            color="info"
            @click="submit">
            登录
          </v-btn>
          <v-btn
            color="success"
            to="/register">注册</v-btn>
          <v-btn
            color="error"
            flat>忘记密码?</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </login-container>
</template>

<script>
import LoginContainer from '~/components/login/container'
import { mapMutations, mapActions } from 'vuex'
// import { getVcode } from '@/api/user'
let timerInterval
const dayjs = require('dayjs')
export default {
  name: 'LoginPage',
  components: {
    LoginContainer
  },
  data() {
    return {
      validUserName: true,
      validPassword: true,
      validVcode: true,
      userName: '',
      userNameRules: [
        v => !!v || '手机号码必填',
        v =>
          /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(
            v
          ) || '请输入正确的手机号码'
      ],
      password: '',
      passwordRules: [v => !!v || '密码必填'],
      passwordVisible: false,
      vcode: '',
      vcodeRules: [v => !!v || '短信验证码必填'],
      checkbox: true,
      loading: false,
      loginTab: 0,
      vcodeBtnText: '获取验证码',
      vcodeTimer: 60,
      vcodeBtnDisabled: false
    }
  },
  computed: {
    vcodeTimerForLogin() {
      return this.$store.state.user.vcodeTimerForLogin
    },
    submitBtnDisabled() {
      if (this.loginTab === 0) {
        return !(this.validUserName && this.validPassword)
      } else return !(this.validUserName && this.validVcode)
    }
  },
  beforeDestroy() {
    console.log('TCL: beforeDestroy -> timer', this.vcodeTimerForLogin)
    window.clearInterval(timerInterval)
  },
  mounted() {
    if (this.vcodeTimerForLogin && this.vcodeTimerForLogin !== 'null') {
      this.handleTimerInterval('vcodeTimerForLogin')
    }
    // console.log(typeof this.vcodeTimerForLogin);
  },
  methods: {
    ...mapMutations(['setTimer']),
    ...mapActions(['handleLogin', 'getUserInfo']),
    submit() {
      if (this.loginTab === 0) {
        if (
          this.$refs.formUserName.validate() &&
          this.$refs.formPassword.validate()
        ) {
          this.handleLogin({
            userName: this.userName,
            password: this.password,
            vcode: this.vcode,
            type: 'staticIndex'
          })
            .then(result => {
              console.log('TCL: handleLogin -> result', result)
              this.getUserInfo()
                .then(result => {
                  this.$Notice.success(`欢迎您，${result.userName}`)
                  this.$router.push({ name: 'home' })
                })
                .catch(err => {
                  console.log('TCL: getUserInfo -> err', err)
                  const msg = err.code ? err.errmsg : err.toString()
                  this.$Notice.error(msg)
                })
            })
            .catch(err => {
              console.log('TCL: submit -> err', err)
              const msg = err.code ? err.message : err.toString()
              this.$Notice.error(msg)
            })
        }
      } else {
        if (
          this.$refs.formUserName.validate() &&
          this.$refs.formVcode.validate()
        ) {
          this.handleLogin({
            userName: this.userName,
            password: this.password,
            vcode: this.vcode,
            type: 'quickLogin'
          })
        }
      }
    },
    // async handleLogin({ type }) {
    //   await login({
    //     userName: this.userName,
    //     password: this.password,
    //     vcode: this.vcode,
    //     type
    //   })
    //     .then(result => {
    //       console.log("TCL: handleLogin -> result", result);
    //       getUserInfo()
    //         .then(result => {
    //           console.log("TCL: handleGetUserInfo -> result", result);
    //         })
    //         .catch(err => {
    //           console.log("TCL: handleGetUserInfo -> err", err);
    //         });
    //     })
    //     .catch(err => {
    //       console.log("TCL: handleLogin -> err", err);
    //     });
    // },
    async getVcodeForLogin() {
      if (this.$refs.formUserName.validate()) {
        this.vcodeBtnDisabled = true
        await getVcode({ userName: this.userName, type: 2 })
          .then(result => {
            // console.log("TCL: getVcodeForLogin -> result", result);
            if (result.errno === 0) {
              if (result.data.code === 0) {
                this.$Notice.success(result.data.message)
                this.setTimer({
                  type: 'vcodeTimerForLogin',
                  timer: new Date()
                })
                this.vcodeBtnText = `重新获取(${this.vcodeTimer})`
                this.handleTimerInterval('vcodeTimerForLogin')
              } else {
                this.$Notice.error(result.data.message)
                this.vcodeBtnDisabled = false
              }
            } else {
              this.$Notice.error(result.errmsg)
              this.vcodeBtnDisabled = false
            }
          })
          .catch(err => {
            console.log('TCL: getVcodeForLogin -> err', err)
            this.$Notice.error(err.toString())
            this.vcodeBtnDisabled = false
          })
      }
      // this.setTimer({
      //   type: "vcodeTimerForLogin",
      //   timer: new Date()
      // });
      // this.vcodeBtnDisabled = true;
      // this.vcodeBtnText = `重新获取(${this.vcodeTimer})`;
      // this.handleTimerInterval("vcodeTimerForLogin");
    },
    handleTimerInterval(type) {
      this.$nextTick(() => {
        this.vcodeBtnDisabled = true
        timerInterval = window.setInterval(() => {
          const diff =
            this.vcodeTimer - dayjs(new Date()).diff(this[type], 'second')
          // console.log("TCL: handleTimerInterval -> diff", diff);
          this.vcodeBtnText =
            diff < 10 ? `重新获取(0${diff})` : `重新获取(${diff})`
          if (diff < 1) {
            this.vcodeBtnDisabled = false
            this.vcodeBtnText = '获取验证码'
            this.setTimer({
              type,
              timer: null
            })
            window.clearInterval(timerInterval)
          }
        }, 1000)
      })
    }
  }
}
</script>
