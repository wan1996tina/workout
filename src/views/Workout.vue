<template lang='pug'>
  #workout(ref='info')
    //- learning(:v-src="this.video")
    b-container(fluid style='width:95%;')
      b-col.toolbar(cols='12')
        p.subtitle workout
      h5.m-4 Newest
      b-col.banner.my-2.p-5(col sm='12' lg='7')
        b-row.w-100
          b-col(col sm='8')
            h1.title Use it or lose it.
          //- img(src='~@/assets/dec.gif' width='300px')
          b-col(cols sm='4')
            lottie-player(src='https://assets7.lottiefiles.com/packages/lf20_DyXIVc.json' background='transparent' speed='1' style='width: 300px; height: 300px;' loop autoplay)
      b-container.mx-0.mt-5
        h5.m-3 Classification
        div.navbar(id='navBar')
          b-nav.w-75.mx-auto(tabs justified)
            b-nav-item(href="#navBar") 運動前暖身
            b-nav-item(href="#warmUp") 肌群鍛鍊
            b-nav-item(href="#workOut") 伸展與放鬆
            b-nav-item(href="#relax") 運動後收操
        h6.mx-auto.my-5.class-sub 運動前暖身
        b-row(id='warmUp')
          b-col(col sm='3' v-for="(item, index) in warmUp" @click='learningPage(item)')
            div.poseCard.d-flex.justify-content-center.align-items-end.my-3
              p {{item.title}}
        h6.mx-auto.my-5.class-sub 核心肌群鍛鍊
        b-row(id='workOut')
          b-col(col sm='3' v-for="(item, index) in workOut" @click='learningPage(item)')
            div.poseCard.poseCard2.d-flex.justify-content-center.align-items-end.my-3
              p {{item.title}}
        h6.mx-auto.my-5.class-sub 日常伸展放鬆
        b-row(id='relax')
          b-col(col sm='3' v-for="(item, index) in relax" @click='learningPage(item)')
            div.poseCard.d-flex.justify-content-center.align-items-end.my-3
              p {{item.title}}
        h6.mx-auto.my-5.class-sub 運動後收操
        b-row
          b-col(col sm='3' v-for="(item, index) in coolDown" @click='learningPage(item)')
            div.poseCard.poseCard2.d-flex.justify-content-center.align-items-end.my-3
              p {{item.title}}
</template>

<script>
import learning from './learning'
export default {
  components: {
    learning
  },
  data () {
    return {
      warmUp: [
        { id: 1, title: '頸部暖身', video: 'https://www.youtube.com/embed/2NOsE-VPpkE' },
        { id: 2, title: '肩部暖身', video: 'https://www.youtube.com/embed/6jHsraw2NIk' },
        { id: 3, title: '腰部暖身', video: 'https://www.youtube.com/embed/B1RCxifPna8' },
        { id: 4, title: '腿部暖身', video: 'https://www.youtube.com/embed/MoW1hXjDA4I' },
        { id: 5, title: '關節暖身', video: 'https://www.youtube.com/embed/XkY94p8kZlg' }
      ],
      workOut: [
        { id: 1, title: '船姿', video: '//content.jwplatform.com/players/Ogf9PZR3-lS2TCn6U.html' },
        { id: 2, title: '椅式', video: '//content.jwplatform.com/players/yhT39ZFn-lS2TCn6U.html' },
        { id: 3, title: '海豚式平板支撐', video: '' },
        { id: 4, title: '四柱式', video: '' },
        { id: 4, title: 'Butterfly Sit Up', video: 'https://www.youtube.com/embed/ZLyOWSPnVrM' }
      ],
      relax: [
        { id: 1, title: '頸部', video: '' },
        { id: 2, title: '肩部', video: '' },
        { id: 3, title: '腰部', video: '' },
        { id: 4, title: '背部', video: '' },
        { id: 5, title: '胸部', video: '' },
        { id: 6, title: '髖關節', video: '' }
      ],
      coolDown: [
        { id: 1, title: '坐式內縮肌伸展', subtitle: 'Seated Groin Stretch', video: 'https://www.youtube.com/embed/ZADA5EzIj_k' },
        { id: 2, title: '臀大肌伸展', subtitle: 'gluteus stretch', video: 'https://www.youtube.com/embed/gE6mJ0VjK7Y' },
        { id: 3, title: '小腿伸展', subtitle: 'calf stretch', video: 'https://www.youtube.com/embed/f1HzSAuB-Vw' },
        { id: 4, title: '股四頭肌、大腿前側伸展', subtitle: 'quadriceps stretch', video: 'https://www.youtube.com/embed/eZO-bKdmFFM' },
        { id: 5, title: '肩膀、三角肌伸展', subtitle: 'deltoid stretch', video: 'https://www.youtube.com/embed/D5nT2l7HgRY' },
        { id: 6, title: '上背伸展', subtitle: 'upper back stretch', video: 'https://www.youtube.com/embed/w96TnIZ45WE' },
        { id: 7, title: '下背伸展', subtitle: 'lower back stretch', video: 'https://www.youtube.com/embed/-neG3e2KHyU' }
      ],
      video: 'https://www.youtube.com/embed/sTANio_2E0Q',
      learningData: [
        { index: '0', src: 'https://www.youtube.com/embed/sTANio_2E0Q' },
        { index: '0', src: 'https://www.youtube.com/embed/sTANio_2E0Q' },
        { index: '0', src: 'https://www.youtube.com/embed/sTANio_2E0Q' },
        { index: '0', src: 'https://www.youtube.com/embed/sTANio_2E0Q' },
        { index: '0', src: 'https://www.youtube.com/embed/sTANio_2E0Q' }
      ]
    }
  },
  methods: {
    learningPage (data) {
      console.log(data.video)
      this.$router.push({ name: 'Learning', params: { index: data.id, vSrc: data.video, title: data.title } })
    }
  }
}
</script>
