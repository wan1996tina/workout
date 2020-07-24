<template lang='pug'>
  #workout(ref='info')
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
            lottie-player(src='https://assets7.lottiefiles.com/packages/lf20_DyXIVc.json'  background='transparent' speed='1' style='width: 300px; height: 300px;' loop autoplay)
      b-container.mx-0.mt-5
        h5.m-3 Classification
        div.navbar.bg-light
          b-nav.w-75.mx-auto(tabs justified)
            b-nav-item 運動前暖身
            b-nav-item 肌群鍛鍊
            b-nav-item 伸展與放鬆
            b-nav-item 運動後收操
        h6.ml-3.my-3 運動前暖身
        b-row
          b-col(col sm='3' v-for="(item, index) in list")
            div.poseCard
              p 123

</template>

<script>
export default {
  data () {
    return {
      list: [{ id: 1, title: '頸部' }, { id: 2, title: '頭部' }, { id: 3, title: '123' }, { id: 4, title: '123' }]
    }
  }
}
</script>
