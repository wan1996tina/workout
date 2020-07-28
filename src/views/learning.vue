<template lang="pug">
    .container-fluid.p-0
      .row.h-100
        //- 左半邊
        .col-8.text-center.bg-secondary
          div.video-wrap
            iframe(width='854' height='480' :src='videoSrc' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen)
            .col-9.bg-light.mx-auto.mt-5
              b-nav
                b-nav-item(v-for="(item, index) in this.navItem" @click="change(item.content)") {{item.content}}
              .nav-content(ref='navContent')

        //- 右半邊
        .col-4
          p.step-title 步驟
          //- .row.step-wrap.text-center.justify-content-lg-start
          //-   .col-11.step(v-for="(step,index) in this.steps") {{step}}
          .col-10.mx-auto
            hooper(:settings="this.hooperSettings").hooper-style
              slide.go
                .content slide1
              slide.go1
                .content slide2
              slide.go2
                .content slide3
              slide.go3
                .content slide4
              slide.go4
                .content slide5
              slide.go5
                .content slide6
          .row
            .col.my-5
              a.btn-start.mx-auto 開始鍛鍊
            .col.my-5
              a.btn-add.mx-auto 加入我的清單
          .row
            .col.prev.text-center
              font-awesome-icon(:icon="['fas','arrow-left']")
              a 上一個
            .col.prev.text-center
              a 下一個
              font-awesome-icon(:icon="['fas','arrow-right']")

  </template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  props: {
    vSrc: String
  },
  data () {
    return {
      videoSrc: this.vSrc,
      steps: ['向兩側平舉張開雙手', '雙腳打開與肩同寬', '確認膝蓋與腳尖同樣朝外', '雙膝彎曲成90度', '上半身向右側轉，同時看向右側'],
      hooperSettings: {
        vertical: true,
        itemstoshow: 3,
        centermode: true
      },
      navItem: [{ content: '關於動作' }, { content: '準備什麼?' }, { content: '要注意喔!' }]
    }
  },
  components: {
    Hooper,
    Slide,
    HooperNavigation
  },
  methods: {
    change (content) {
      console.log(this.$refs.navContent)
      this.$refs.navContent.innerHTML = '<p>' + content + '</p>'
    }
  }
}
</script>

<style lang="stylus" scoped>
.nav-content
  width 100%
  height 500px
  background #fff

.go
  background #ffa
.go1
  background #abc
.go2
  background #cba
.go3
  background #aff
.go4
  background #bfb
.go5
  background #fcf

.hooper-style
  border-radius 8px

.content
  margin 10px auto
  width 90%
  height 25%
  background #fff
  border-radius 10px

.container-fluid
  height 100vh
  width 100%
  background #eee
  overflow scroll
.container-fluid::-webkit-scrollbar
  display none

.video-wrap
  padding 30px 0

.step-wrap
  background #fff
  width 70%
  height 80%
  margin 30px auto
  border-radius 25px
  overflow scroll
  padding 30px 0

.step-wrap::-webkit-scrollbar
  display none

.step-title
  text-align center
  color rgb(47,85,151)
  font-size 18px
  margin 30px auto
  background linear-gradient(0deg, rgb(255,255,255) 0, rgb(255,255,255) 100%)
  width 170px
  height 35px
  line-height 35px
  border-radius 20px
  letter-spacing 2px

.step
  background #CAF2F6
  height 60px
  line-height 60px
  border-radius 30px
  font-size 18px
  margin 0 auto

.btn-start
  background rgb(47,85,151)
  display block
  width 200px
  height 50px
  line-height 50px
  color white
  text-align center
  font-size 20px
  border-radius 8px
  letter-spacing 3px
  transition 0.3s

.btn-start:hover
  color #fff
  background rgb(115, 157, 230)
  cursor pointer

.btn-start:hover::before
  content:'GO!GO!GO!'
  position absolute
  top -80%
  left calc(50% - 55px)
  color #000
  font-size 15px

.btn-add
  background #EC5C2E
  display block
  width 200px
  height 50px
  line-height 50px
  color white
  text-align center
  font-size 20px
  border-radius 8px
  letter-spacing 2px
  transition 0.3s

.btn-add:hover
  color #fff
  background #ffb15e
  cursor pointer

.prev
  background #ffffff
  height 170px
  line-height 170px
  font-size 23px
  border-right 1px solid #eee

.next
  background #ffffff
  height 170px
  line-height 170px
  font-size 23px

.next:hover
.prev:hover
  background #E4F3FF
  cursor pointer
</style>
