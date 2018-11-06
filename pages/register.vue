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
          <v-tab class="subheading">用户注册</v-tab>
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
                  @click="getVcodeForRegister">{{ vcodeBtnText }}</v-btn>
              </v-text-field>
            </v-form>
            <v-checkbox
              v-model="checkbox"
              label="同意协议？"/>
          </v-responsive>

        </v-card-text>
        <v-card-actions class="pb-3 pt-0 px-3">
          <v-btn
            :disabled="submitBtnDisabled"
            :loading="loading"
            color="info"
            @click="submit">
            提交
          </v-btn>
          <v-btn
            color="success"
            to="/login">已有账号</v-btn>
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
  name: 'RegisterPage',
  components: {
    LoginContainer
  },
  data() {
    return {
      validUserName: true,
      validPassword: true,
      validVcode: true,
      userName: '18587748417',
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
    vcodeTimerForRegister() {
      return this.$store.state.user.vcodeTimerForRegister
    },
    submitBtnDisabled() {
      return !(this.validUserName && this.validPassword && this.validVcode)
    }
  },
  beforeDestroy() {
    console.log('TCL: beforeDestroy -> timer', this.vcodeTimerForRegister)
    window.clearInterval(timerInterval)
  },
  mounted() {
    if (this.vcodeTimerForRegister && this.vcodeTimerForRegister !== 'null') {
      this.handleTimerInterval('vcodeTimerForRegister')
    }
    // console.log(typeof this.vcodeTimerForRegister);
  },
  methods: {
    ...mapMutations(['setTimer']),
    ...mapActions(['handleRegister']),
    submit() {
      if (
        this.$refs.formUserName.validate() &&
        this.$refs.formPassword.validate() &&
        this.$refs.formVcode.validate()
      ) {
        this.handleRegister({
          userName: this.userName,
          password: this.password,
          vcode: this.vcode
        })
          .then(result => {
            console.log('TCL: handleLogin -> result', result)
            this.$Notice.success('注册成功，请登录')
            this.$router.push({ name: 'login' })
          })
          .catch(err => {
            console.log('TCL: submit -> err', err)
            const msg = err.code ? err.message : err.toString()
            this.$Notice.error(msg)
          })
      }
    },
    async getVcodeForRegister() {
      if (this.$refs.formUserName.validate()) {
        // this.vcodeBtnDisabled = true
        const res = await this.getCode({ userName: this.userName, type: 1 })
        console.log('TCL: async getVcodeForRegister -> res', res)
        // .then(result => {
        //   // console.log("TCL: getVcodeForRegister -> result", result);
        //   if (result.errno === 0) {
        //     if (result.data.code === 0) {
        //       this.$Notice.success(result.data.message)
        //       this.setTimer({
        //         type: 'vcodeTimerForRegister',
        //         timer: new Date()
        //       })
        //       this.vcodeBtnText = `重新获取(${this.vcodeTimer})`
        //       this.handleTimerInterval('vcodeTimerForRegister')
        //     } else {
        //       this.$Notice.error(result.data.message)
        //       this.vcodeBtnDisabled = false
        //     }
        //   } else {
        //     this.$Notice.error(result.errmsg)
        //     this.vcodeBtnDisabled = false
        //   }
        // })
        // .catch(err => {
        //   console.log('TCL: getVcodeForRegister -> err', err)
        //   this.$Notice.error(err.toString())
        //   this.vcodeBtnDisabled = false
        // })
      }
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
