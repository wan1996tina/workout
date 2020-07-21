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
      b-container.content1
        b-col(cols='4')
          div.num1
          div.text-center.mx-auto.c1-title purpose
</template>
