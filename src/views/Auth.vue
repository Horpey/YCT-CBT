<template>
  <div class="container-fluid pl-0">
    <div class="row">
      <div class="col-md-6">
        <div
          class="text-center authsidebg"
          style="background: linear-gradient(45deg, #000000d9, transparent),url(/img/custom/lnd.png);"
        >
          <img class="mb-3" src="img/custom/logo.png" alt="logo" height="70" />
          <h3 class="txt-bold txt-theme-dk">GET READY.EXPERIENCE CBT</h3>
          <p class="txt-theme-dk">A CBT Experience plaform</p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="form-auth">
          <tabs fill tabNavClasses="authTab" class="flex-column flex-md-row">
            <div class="cardform">
              <tab-pane title="Sigup">
                <span slot="title">Sign Up</span>
                <form class="pt-3" @submit.prevent="signup">
                  <div class="row">
                    <div class="col-md-6 pr-0">
                      <label class="small mb-1">Full Name</label>
                      <base-input
                        v-model="rfullname"
                        class="mb-3"
                        placeholder=""
                      ></base-input>
                    </div>
                    <div class="col-md-6 pr-0">
                      <label class="small mb-1"
                        >JAMB registeration number</label
                      >
                      <base-input
                        v-model="rjambreg"
                        class="mb-3"
                        placeholder=""
                      ></base-input>
                    </div>
                    <div class="col-md-6 pr-0">
                      <label class="small mb-1">Email Address</label>
                      <base-input
                        v-model="remail"
                        class="mb-3"
                        placeholder=""
                        type="email"
                      ></base-input>
                    </div>
                    <div class="col-md-6 pr-0">
                      <label class="small mb-1">Phone Number</label>
                      <base-input
                        v-model="rphone"
                        class="mb-3"
                        placeholder=""
                      ></base-input>
                    </div>
                    <div class="col-md-6 pr-0">
                      <label class="small mb-1">School</label>
                      <select
                        v-model="rschool"
                        class="form-control mb-3"
                        name=""
                        id=""
                      >
                        <option>School of Technology</option>
                        <option>School of Engineering</option>
                      </select>
                    </div>
                    <div class="col-md-6 pr-0">
                      <label class="small mb-1">Department</label>
                      <select
                        v-model="rdept"
                        class="form-control mb-3"
                        name=""
                        id=""
                      >
                        <option>Computer Science</option>
                        <option>Food and Nutrition</option>
                      </select>
                    </div>
                    <div class="col-md-6 pr-0">
                      <label class="small mb-1">Password</label>
                      <base-input
                        type="password"
                        v-model="rpass"
                        class="mb-3"
                        placeholder="Password"
                      ></base-input>
                    </div>
                    <div class="col-md-6 pr-0">
                      <label class="small mb-1">Confirm Password</label>
                      <base-input
                        type="password"
                        v-model="rconfirmpass"
                        class="mb-3"
                        placeholder="Confirm Password"
                      ></base-input>
                    </div>
                  </div>
                  <!-- 
                  <div class="mb-3 logtxt">
                    <p class="small text-danger mt-0">
                      <span v-if="passwordEmpty">
                        <i class="fa fa-info-circle mr-1"></i>{{ passwordTxt }}
                      </span>
                    </p>
                  </div> -->
                  <div class="mt-5">
                    <button
                      :disabled="btndisable"
                      type="submit"
                      class="btn btn-primary btn-block text-white"
                    >
                      Sign Up
                      <img
                        v-if="loading"
                        class="ml-2"
                        src="img/custom/loaderlight.svg"
                        alt="logo"
                        height="20"
                      />
                    </button>
                    <div class="text-center mt-4">
                      <p class="small">
                        By siging up, you agree to our
                        <a href="#">terms and conditons</a>
                      </p>
                    </div>
                  </div>
                </form>
              </tab-pane>
              <tab-pane>
                <span slot="title">Login</span>
                <form class="pt-3" @submit.prevent="login">
                  <label class="small mb-1">JAMB registeration number</label>
                  <base-input
                    v-model="reg"
                    class="mb-1"
                    placeholder=""
                  ></base-input>

                  <div class="mb-3 logtxt">
                    <p class="small text-danger mb-0 mt-0">
                      <span v-if="regEmpty">
                        <i class="fa fa-info-circle mr-1"></i>{{ regTxt }}
                      </span>
                    </p>
                  </div>
                  <label class="small mb-1">Password</label>
                  <base-input
                    v-model="password"
                    type="password"
                    class="mb-1"
                    placeholder=""
                  ></base-input>
                  <div class="mb-3 logtxt">
                    <p class="small text-danger mt-0">
                      <span v-if="passwordEmpty">
                        <i class="fa fa-info-circle mr-1"></i>{{ passwordTxt }}
                      </span>
                    </p>
                  </div>
                  <div class="mt-5">
                    <button
                      :disabled="btndisable"
                      type="submit"
                      class="btn btn-primary btn-block text-white"
                    >
                      Sign in
                      <img
                        v-if="loading"
                        class="ml-2"
                        src="img/custom/loaderlight.svg"
                        alt="logo"
                        height="20"
                      />
                    </button>
                    <div class="text-center mt-4">
                      <router-link
                        class="text-success small text-dark"
                        to="/auth-password"
                        >Forgot Password</router-link
                      >
                    </div>
                  </div>
                </form>
              </tab-pane>
            </div>
          </tabs>

          <!-- <div class="text-center small" style="margin-top: 80px;">
            <a class="text-dark" href="#">Terms of Use</a> .
            <a class="text-dark" href="#">Privacy Policy</a>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tab from '../components/Tabs/Tab';
import TabPane from '../components/Tabs/TabPane';
import Tabs from '../components/Tabs/Tabs';
import VueNotifications from 'vue-notifications';

// Custom Component
import LoaderLight from './utility/LoaderLight';

export default {
  name: 'auth',
  components: {
    tabs: Tabs,
    'tab-pane': TabPane,
    loader: LoaderLight
  },

  data() {
    return {
      reg: '',
      password: '',
      regEmpty: false,
      passwordEmpty: false,
      loading: false,
      btndisable: false,
      regTxt: '',
      passwordTxt: ''
    };
  },
  methods: {
    login() {
      let reg = this.reg;
      let password = this.password;
      if (this.reg !== '' && this.password !== '') {
        this.regEmpty = false;
        this.passwordEmpty = false;
        // Call Login Action
        this.loading = true;
        this.btndisable = true;
        this.$store
          .dispatch('login', { reg, password })
          .then(resp => {
            this.loading = false;
            this.btndisable = false;
            if (resp.data.status == true) {
              this.showSuccessMsg({ message: 'Login Successful' });
            } else {
              this.showWarnMsg({ message: resp.data.message });

              if (resp.data.message.includes('Jamb')) {
                this.regEmpty = true;
                this.regTxt = resp.data.message;
              } else if (resp.data.message.includes('password')) {
                this.passwordEmpty = true;
                this.passwordTxt = resp.data.message;
              }
            }
          })
          .catch(err => {
            this.loading = false;
            this.btndisable = false;
            this.showErrorMsg({ message: 'Unable to Login' });
          });
      } else {
        if (this.reg == '') {
          this.regEmpty = true;
          this.regTxt = 'Enter your JAMB registeration number to login';
        }
        if (this.password == '') {
          this.passwordEmpty = true;
          this.passwordTxt = 'Enter Password to login';
        }
      }
    }
  },
  notifications: {
    showSuccessMsg: {
      type: VueNotifications.types.success,
      title: '',
      message: "That's the success!"
    },
    showInfoMsg: {
      type: VueNotifications.types.info,
      title: '',
      message: 'Here is some info for you'
    },
    showWarnMsg: {
      type: VueNotifications.types.warn,
      title: '',
      message: "That's the kind of warning"
    },
    showErrorMsg: {
      type: VueNotifications.types.error,
      title: '',
      message: "That's the error"
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../assets/scss/site/style.scss';
.nav-pills .nav-link.active {
  background-color: #00923f !important;
}

.cardform .card-body {
  background-color: red;
  padding-left: 0px !important;
  padding-right: 0px !important;
}

.nav-wrapper {
  padding: 1rem 1.4rem;
}
</style>
