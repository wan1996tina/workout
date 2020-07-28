<template>
<!-- :style="{ width : 'calc(' + viewWidth + '%-96)'}" -->
  <div id="home"  ref="home">
    <b-container fluid style="width:100%; position:relative; height:100vh" class="p-0">
      <div class='bg-video'>
        <video src="~@/assets/video.mp4" autoplay muted loop></video>
      </div>
      <div class=" d-flex justify-content-center">
        <b-col cols="9" class="toolbar">
          <p class="subtitle d-none">Home</p>
        </b-col>
        <!-- 登入、註冊、使用者 -->
        <b-col cols="3" class="d-flex justify-content-center align-items-center">
          <!-- 註冊 button -->
          <div>
            <input type="button" value="Sign up" class="sign-btn" v-b-modal.modal-prevent-closing1>

            <b-modal id="modal-prevent-closing1"
              ref="modal"
              title=""
              @show="resetModal"
              @hidden="resetModal"
              @ok="handleOk"
              size="lg"
              :centered='isCenter'
              class='d-flex flex-row'
              footer-class="border-top-0 col-12 mx-auto justify-content-center"
              hide-header
            >
              <b-row class="m-3 mt-4">

              <div
                class="col-12 col-md-5 mb-4 pt-3 d-flex justify-content-center flex-column align-items-center"
                style="background:rgb(255, 227, 224); border-radius:12px;">

                <h3 style="color:rgb(100,100,100);">Nice to meet you!</h3>
                <p style="font-size:12px;color:#aaa;">歡迎加入我們，一起變健康吧!
                </p>
                <input type="button" value="Log in" class="login-btn m-0 my-3">
              </div>

              <div class="col-12 col-md-7">
              <form ref="form" @submit.stop.prevent="handleSubmit">

                <h3 class="text-center">註冊</h3>
                <!-- 姓名 -->
                <b-form-group
                  :state="formState"
                  label="Name"
                  label-for="name-input"
                  invalid-feedback="Name is required"
                >
                  <b-form-input
                    id="name-input"
                    v-model="name"
                    :state="formState"
                    required
                  ></b-form-input>
                </b-form-group>

                <!-- 帳號 -->
                <b-form-group
                  :state="formState"
                  label="Account"
                  label-for="account-input"
                  invalid-feedback="account is required"
                >
                  <b-form-input
                    id="account-input"
                    v-model="account"
                    :state="formState"
                    required
                  ></b-form-input>
                </b-form-group>

                <!-- 密碼 -->
                <b-form-group
                  :state="formState"
                  label="Password"
                  label-for="password-input"
                  invalid-feedback="password is required"
                >
                  <b-form-input
                    id="password-input"
                    v-model="password"
                    :state="formState"
                    required
                    type="password"
                  ></b-form-input>
                </b-form-group>

                <!-- 密碼 again -->
                <b-form-group
                  :state="formState"
                  label="Password Again"
                  label-for="password-input"
                  invalid-feedback="password is required"
                >
                  <b-form-input
                    id="password-input"
                    v-model="password_again"
                    :state="formState"
                    required
                    type="password"
                  ></b-form-input>
                </b-form-group>

              </form>
              </div>
              </b-row>

            </b-modal>
          </div>

          <!-- 登入 button -->
          <div>
            <input type="button" value="Log in" class="login-btn" v-b-modal.modal-prevent-closing>
            <!-- <b-button v-b-modal.modal-prevent-closing>Open Modal</b-button> -->

            <b-modal id="modal-prevent-closing"
              ref="modal"
              title=""
              @show="resetModal"
              @hidden="resetModal"
              @ok="handleOk"
              size="lg"
              :centered='isCenter'
              class='d-flex flex-row'
              footer-class="border-top-0 col-12 mx-auto justify-content-center"
              hide-header
            >
              <b-row class="m-3 mt-4">

              <div
                class="col-12 col-md-5 mb-4 pt-3 d-flex justify-content-center flex-column align-items-center"
                style="background:rgb(224, 236, 255); border-radius:12px;">

                <h3 style="color:rgb(47,85,151);">Welcome back!</h3>
                <p style="font-size:12px;color:#aaa;">歡迎回來，這是歡迎訊息…</p>
                <input type="button" value="Sign up" class="login-btn m-0 my-3">
              </div>

              <div class="col-12 col-md-7" style="height:400px;">
              <form ref="form" @submit.stop.prevent="handleSubmit">

                <h3 class="text-center">登入</h3>

                <!-- 帳號 -->
                <b-form-group
                  :state="formState"
                  label="Account"
                  label-for="account-input"
                  invalid-feedback="account is required"
                  class="my-5"
                >
                  <b-form-input
                    id="account-input"
                    v-model="account"
                    :state="formState"
                    required
                  ></b-form-input>
                </b-form-group>

                <!-- 密碼 -->
                <b-form-group
                  :state="formState"
                  label="Password"
                  label-for="password-input"
                  invalid-feedback="password is required"
                >
                  <b-form-input
                    id="password-input"
                    v-model="password"
                    :state="formState"
                    required
                    type="password"
                  ></b-form-input>
                </b-form-group>

              </form>
              </div>
              </b-row>

            </b-modal>
          </div>

          <!-- 使用者按鈕 -->
          <div>
            <b-button v-b-toggle.sidebar-right>Toggle Sidebar</b-button>
            <b-sidebar id="sidebar-right" title="Sidebar" right>
              <div class="px-3 py-2">
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
                  in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                </p>
                <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
              </div>
            </b-sidebar>
          </div>

        </b-col>
      </div>

      <div class='gradient'></div>
      <p class='t1'>healthy mind</p>
      <p class='t2'>in a</p>
      <p class='t3'> healthy body</p>

      <!-- 橫幅 -->
      <!-- <b-col col sm="12" lg="8" class="banner my-2">
        <h1>Dare to be great.</h1>
        <p>Workout at home</p>
      </b-col> -->

      <!-- <div class="bg-info my-5" style="width:60%;">
        <b-col class="card bg-danger" >
          <div class="imgWrap">
            <img src="https://picsum.photos/300/200/?random=1" class="img-fluid">
          </div>
          <h5 class="my-4">第一個</h5>
        </b-col>
      </div> -->

      <!-- <div class="wrap-hooper col-7" >
        <hooper :settings="hooperSettings">
          <slide>
            <div class="images img1">
              <h2>運動前暖身</h2>
            </div>
          </slide>
          <slide>
            <div class="images img2">
              <h2>運動後收操</h2>
            </div>
          </slide>
          <slide>
            <div class="images img3">
              <h2>核心鍛鍊</h2>
            </div>
          </slide>
          <slide>
            <div class="images img4">
              <h2>肩部拉伸</h2>
            </div>
          </slide>
          <slide>
            <div class="images img5">
              <h2>腰部拉伸</h2>
            </div>
          </slide>
          <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </hooper>
      </div> -->

    </b-container>
  </div>
</template>

<script>
// import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
// import 'hooper/dist/hooper.css'

// import VueHorizontalList from '../components/vue-horizontal-list'
export default {
  components: {
    // Hooper,
    // Slide,
    // HooperNavigation
    // VueHorizontalList
  },
  data () {
    return {
      isCenter: true,
      name: '',
      account: '',
      password: '',
      password_again: '',
      formState: null,
      submittedNames: [],
      hooperSettings: {
        itemsToShow: 3,
        infiniteScroll: true,
        centerMode: true,
        autoPlay: true,
        playSpeed: 2000
      },
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  computed: {
    viewWidth () {
      return this.$store.getters.getWidth
    }
  },
  methods: {
    checkFormValidity () {
      // 查看否有條件需要驗證，通過的話回傳 true
      const valid = this.$refs.form.checkValidity()
      this.formState = valid
      return valid
    },
    resetModal () {
      // 清空表單資料
      this.name = ''
      this.account = ''
      this.password_again = ''
      this.password = ''
      this.formState = null
    },
    handleOk (bvModalEvt) {
      // 按下 ok 的時候，先暫停預設動作
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit () {
      // Exit when the form isn't valid
      // 是否通過驗證
      if (!this.checkFormValidity()) {
        return
      }
      // 把名字顯示在網頁上
      // Push the name to submitted names
      // this.submittedNames.push(this.name)
      // 把 modal隱藏
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    }
  }

}
</script>
