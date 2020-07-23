<template lang="pug">
  #information(ref='info')
    b-container(fluid style='width:100%;').p-0
      b-col.toolbar(cols='12')
        p.subtitle.d-none Information
      b-col.banner(cols='11')
        img.woman(src='~@/assets/woman.png')
        h2.info-subtitle Fast.&emsp;Convenient.&emsp;Affordable.
        h2.info-title(class="animate__animated animate__fadeInDown") RELAX
        h2.info-back-title (yourself)
      b-container.text-center(style='width:95%;')
        b-row(class="animate__animated  animate__infinite")
          b-col.more(cols="12") More about us
          div.triangle.mx-auto.mt-2
      //- 目的
      b-container.content1
        div.num1
        div.text-center.mx-auto.c1-title PURPOSE
        h4.box-1-title.mx-auto Dare to be great.
        b-col.box-1(col md="8" lg="10") Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate excepturi deleniti dolorem eaque cumque! Vitae quos ex repellat. Cupiditate officiis soluta quidem provident voluptatem laudantium tempore quia corporis obcaecati praesentium. Ad ab omnis earum quod nesciunt quaerat assumenda. Quo vel similique laborum necessitatibus eligendi omnis hic, maxime beatae, quae dolorem asperiores perferendis.
      //- 適用對象
      b-container.content1
        div.num2
        div.text-center.mx-auto.c1-title APPLICABLE
        h4.box-1-title.mx-auto
        //- 建議
      b-container.contact
        b-col.num3(cols='12')
        div.text-center.mx-auto.num3-title SUGGESTION
        h4.box-1-title.mx-auto
        b-row.info
          b-col(col md='4' sm='12').text-center
            font-awesome-icon(:icon="['fas','phone']")
            h4 PHONE
            p phone 02-2912-3456
          b-col(col md='4' sm='12').text-center
            font-awesome-icon(:icon="['fas','map-marker-alt']")
            h4 ADDRESS
            p  100台北市中正區廣州街15號
          b-col(col md='4' sm='12').text-center
            font-awesome-icon(:icon="['far','envelope']")
            h4 EMAIL
            p workout@123mail.com
        b-row.form.justify-content-center
          b-col.col-6.my-2
            input.d-block.ml-auto(type='text' placeholder="Your name")
          b-col.col-6.my-2
            input.d-block.mr-auto(type='text' placeholder="Your e-mail")
          b-col.col-12.my-2
            input.d-block.mx-auto(type='text' placeholder="Subject")
          b-col.col-12.my-2
            textarea.d-block.mx-auto(placeholder="Message" rows="5" maxlength="300")
          button.ct-submit SEND MESSAGE
      b-container(fluid).footer.text-center
        b-row.w-25.icons
          b-col.col
            div.icon-wrap
              font-awesome-icon(:icon="['fab','facebook-f']")
          b-col.col
            div.icon-wrap
              font-awesome-icon(:icon="['fab','instagram']")
          b-col.col
            div.icon-wrap
              font-awesome-icon(:icon="['fab','twitter']")
          b-col.col
            div.icon-wrap
              font-awesome-icon(:icon="['fab','youtube']")
          b-col.col
            div.icon-wrap
              font-awesome-icon(:icon="['fab','pinterest-p']")
        h6 Terms & Conditions  Privacy Policy
        h6 Copyright &copy; 2020 Flaunter, Ltd. All rights reserved. Site credit.
</template>

<script>
export default {
  watch: {
    height () {
      const num3Bg = document.getElementsByClassName('num3')[0]
      window.addEventListener('scroll', function () {
        const value = window.scrollY
        console.log(value)

        num3Bg.style.backgroundPosition = (value * 1 + 200) + 'px' + ' ' + +'px'
      }, true)
    }
  }
}
</script>
