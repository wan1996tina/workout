<template lang="pug">
  #home(ref='home')
    b-container.p-0(fluid style='width:100%; position:relative; height:100vh')
      .bg-video
        video(src='~@/assets/video.mp4' autoplay muted loop)
      .d-flex.justify-content-center
        b-col.toolbar(cols='9')
          p.subtitle.d-none Home
        //-登入、註冊、使用者
        b-col.d-flex.justify-content-center.align-items-center(cols='3')
          //-  註冊 button
          div
            input.sign-btn(type='button' value='Sign up' v-if='user.length === 0' v-b-modal.modal-prevent-closing1)
            b-modal#modal-prevent-closing1.d-flex.flex-row(size='lg' :centered='isCenter' footer-class='border-top-0 col-12 mx-auto justify-content-center' hide-footer hide-header)
              b-row.m-3.mt-4
                .col-12.col-md-5.mb-4.pt-3.d-flex.justify-content-center.flex-column.align-items-center(style='background:rgb(255, 227, 224); border-radius:12px;')
                  h3(style='color:rgb(100,100,100);') Nice to meet you!
                  p(style='font-size:12px;color:#aaa;') 歡迎加入我們，一起變健康吧!
                  input.login-btn.m-0.my-3(type='button' value='Log in')

                .col-12.col-md-7
                  b-form(@submit='submit')
                    h3.text-center 註冊
                    //- 姓名
                    b-form-group(
                      :state="formState('name')"
                      label='Name'
                      label-for='name-input'
                      invalid-feedback='姓名格式不符'
                      description='名字可輸入 1 ~ 30 字'
                    )
                      b-form-input#name-input(
                        v-model='name'
                        :state="formState('name')"
                        required
                      )
                    //- 帳號
                    b-form-group(
                      :state="formState('account')"
                      label='Account'
                      label-for='account-input'
                      invalid-feedback='帳號格式不符'
                      description='帳號可輸入 4 ~ 15 字'
                    )
                      b-form-input#account-input(
                        v-model='account'
                        :state="formState('account')"
                        required
                      )
                    //- 密碼
                    b-form-group(
                      :state="formState('password')"
                      label='Password'
                      label-for='password-input'
                      invalid-feedback='請輸入密碼'
                    )
                      b-form-input#password-input(
                        v-model='password'
                        :state="formState('password')"
                        required type='password'
                      )
                    //- 密碼 again
                    b-form-group(
                      :state="formState('password_again')"
                      label='Password Again'
                      label-for='password-input'
                      invalid-feedback='兩次密碼不相同，請重新確認'
                      )
                      b-form-input#password-input(
                        v-model='password_again'
                        :state="formState('password_again')"
                        required
                        type='password'
                      )
                    b-button(type="submit" variant='info') 註冊

          //- 登入 button
          div
            input.login-btn(type='button' value='Log in' v-if='user.length === 0' v-b-modal.modal-prevent-closing)
            //  b-button(v-b-modal.modal-prevent-closing) Open Modal
            b-modal#modal-prevent-closing.d-flex.flex-row(ref='modal' @show='resetModal' @hidden='resetModal' @ok='handleOk' size='lg' :centered='isCenter' footer-class='border-top-0 col-12 mx-auto justify-content-center' hide-header)
              b-row.m-3.mt-4
                .col-12.col-md-5.mb-4.pt-3.d-flex.justify-content-center.flex-column.align-items-center(style='background:rgb(224, 236, 255); border-radius:12px;')
                  h3(style='color:rgb(47,85,151);') Welcome back!
                  p(style='font-size:12px;color:#aaa;') 歡迎回來，這是歡迎訊息…
                  input.login-btn.m-0.my-3(type='button' value='Sign up')
                .col-12.col-md-7(style='height:400px;')
                  b-form(@submit='submit')
                    h3.text-center 登入
                    //-  帳號
                    b-form-group.my-5(
                      :state="formState('user_account')"
                      label='Account'
                      label-for='account-input'
                      invalid-feedback='account is required'
                    )
                      b-form-input#account-input(
                        v-model='user_account'
                        :state="formState('user_account')"
                        required
                      )
                    //-  密碼
                    b-form-group(
                      :state="formState('user_password')"
                      label='Password'
                      label-for='password-input'
                      invalid-feedback='password is required'
                    )
                      b-form-input#password-input(
                        v-model='user_password'
                        :state="formState('user_password')"
                        required type='password'
                      )

          //- 使用者按鈕
          div(v-if='user.length > 0')
            b-button(v-b-toggle.sidebar-right) Toggle Sidebar
            b-sidebar#sidebar-right(title='Sidebar' right)
              .px-3.py-2
                p Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                b-img(src='https://picsum.photos/500/500/?image=54' fluid thumbnail)

      .gradient
      p.t1 healthy mind
      p.t2 in a
      p.t3 healthy body

      //- 橫幅
      //- b-col.banner.my-2(col sm='12' lg='8')
      //-   h1 Dare to be great.
      //-   p Workout at home
      //- .bg-info.my-5(style='width:60%;')
      //-   b-col.card.bg-danger
      //-     .imgWrap
      //-       img.img-fluid(src='https://picsum.photos/300/200/?random=1')
      //-     h5.my-4 第一個

      //- .wrap-hooper.col-7
      //-   hooper(:settings='hooperSettings')
      //-     slide
      //-       .images.img1
      //-         h2 運動前暖身
      //-     slide
      //-       .images.img2
      //-         h2 運動後收操
      //-     slide
      //-       .images.img3
      //-         h2 核心鍛鍊
      //-     slide
      //-       .images.img4
      //-         h2 肩部拉伸
      //-     slide
      //-       .images.img5
      //-         h2 腰部拉伸
      //-     hooper-navigation(slot='hooper-addons')
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
      user_account: '',
      user_password: '',
      // formState: false,
      submittedNames: [],
      hooperSettings: {
        itemsToShow: 3,
        infiniteScroll: true,
        centerMode: true,
        autoPlay: true,
        playSpeed: 2000
      }
    }
  },
  computed: {
    viewWidth () {
      return this.$store.getters.getWidth
    },
    user () {
      return this.$store.getters.user
    }
  },
  methods: {
    formState (type) {
      // 註冊驗證
      if (type === 'name') {
        if (this.name.length < 1 || this.name.length > 30) {
          return false
        } else {
          return true
        }
      } else if (type === 'account') {
        if (this.account.length < 4 || this.account.length > 15) {
          return false
        } else {
          return true
        }
      } else if (type === 'password') {
        if (this.password.length > 0) {
          return true
        } else {
          return false
        }
      } else if (type === 'password_again') {
        if (this.password_again.length > 0 && this.password_again === this.password) {
          return true
        } else {
          return false
        }
      }

      // 登入驗證
      if (type === 'user_account') {

      } else if (type === 'user_password') {

      }
    },
    submit (event) {
      event.preventDefault()
      if (this.account.length < 4 || this.account.length > 15) {
        alert('帳號格式不符')
      } else if (!this.password.length > 0) {
        alert('請輸入密碼')
      }
      this.axios.post(
        process.env.VUE_APP_APIURL + '/users',
        { name: this.name, account: this.account, password: this.password }
      )
        .then(response => {
          const data = response.data
          if (data.success) {
            // 如果回來的資料 success 是 true
            alert('註冊成功')
          } else {
            // 不是就顯示回來的 message
            alert(data.message)
          }
        })
        .catch(error => {
          // 如果回來的狀態不是 200，顯示回來的 message
          alert(error.response.data.message)
        })
    },
    checkFormValidity () {
      // 查看否有條件需要驗證，通過的話回傳 true
      // const valid = this.$refs.form.checkValidity()
      // this.formState = valid
      // return valid
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
<!-- :style="{ width : 'calc(' + viewWidth + '%-96)'}" -->
