<template lang="pug">
  #information(ref='info')
    b-container(fluid style='width:95%;')
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
        h4.box-1-title.mx-auto Dare to be great.
        b-col.box-1(col md="8" lg="10") Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate excepturi deleniti dolorem eaque cumque! Vitae quos ex repellat. Cupiditate officiis soluta quidem provident voluptatem laudantium tempore quia corporis obcaecati praesentium. Ad ab omnis earum quod nesciunt quaerat assumenda. Quo vel similique laborum necessitatibus eligendi omnis hic, maxime beatae, quae dolorem asperiores perferendis.
        //- 建議
      b-container.content1
        div.num3
        div.text-center.mx-auto.c1-title SUGGESTION
        h4.box-1-title.mx-auto Dare to be great.
        div.form
          b-form-group.mb-0
            b-row
              b-col(col md="3")
                font-awesome-icon(:icon="['far', 'envelope']")
              b-col(col md='7')
                b-form-group(label-cols-sm='2' label='Street:' label-align-sm='right' label-for='nested-street')
                  b-col.col-sm-5
                    b-form-input#nested-street
                b-form-group(label-cols-sm='2' label='City:' label-align-sm='right' label-for='nested-city')
                  b-col.col-sm-5
                    b-form-input#nested-city
                b-form-group(label-cols-sm='2' label='State:' label-align-sm='right' label-for='nested-state')
                  b-col.col-sm-5
                    b-form-input#nested-state
                b-form-group(label-cols-sm='2' label='Country:' label-align-sm='right' label-for='nested-country')
                  b-col.col-sm-5
                    b-form-input#nested-country
                b-form-group.mb-0(label-cols-sm='2' label='Ship via:' label-align-sm='right')
                  b-col.col-sm-5
                    b-form-radio-group.pt-2(:options='[\'Air\', \'Courier\', \'Mail\']')
</template>
