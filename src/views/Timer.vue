<template lang='pug'>
  #timer(ref='info')
    b-container.p-0.m-0(fluid style='width:100%;')
      h1.timer-title {{currentText}}
      #clock.d-flex.justify-content-center
        .clockBg
          b-col(cols='4').numBg
            h1 {{ time_min }}
          .mx-5
            .dot
            .dot
          b-col(cols='4').numBg
            h1 {{ time_sec }}
          b-row.timer-tools.align-items-center.flex-column
            div
              router-link(to="" v-b-toggle.sidebar-backdrop).m-3
                font-awesome-icon(:icon="['fas', 'plus']")
            div
              router-link(to="" v-b-toggle.sidebar-backdrop).m-3
                font-awesome-icon(:icon="['fas', 'cog']")
            div
              router-link(to="/list" v-b-toggle.sidebar-backdrop).m-3
                font-awesome-icon(:icon="['fas', 'list-ul']")
      br
      .d-flex.flex-row
        b-btn.mx-1(variant='outline-dark' size='lg' v-if='status != 1' @click='start' style='z-index:2;')
          font-awesome-icon(:icon="['fas','play']")
        b-btn.mx-1(variant='outline-dark' size='lg' v-if='status == 1' @click='pause' style='z-index:2;')
          font-awesome-icon(:icon="['fas','pause']")
        b-btn.mx-1(variant='outline-dark' size='lg' v-if='current.length > 0 || todos.length > 0' @click='finish(true)' style='z-index:2;')
          font-awesome-icon(:icon="['fas','step-forward']")
      div
        //- b-button(v-b-toggle.sidebar-backdrop) options
        b-sidebar#sidebar-backdrop(title='' right)
          .add-item-block.px-3.py-2
            div.d-flex
              b-button.mr-2.btn-addTimer(variant="info")
                font-awesome-icon(:icon="['fas', 'plus']")
              b-form-input(placeholder="Add a new timer...")
            div.d-flex.flex-column
              h5 計時步驟
              b-row.p-3
                b-col.p-0(cols='10')
                  b-form-select(v-model='selected' :options='variants')
                b-col(cols='2')
                  b-button(variant="light")
                    font-awesome-icon(:icon="['fas', 'plus']")

            //- b-form-group(label='計時步驟')
            //-   b-form-select(v-model='selected' :options='variants')
</template>
      <!-- <div class="clock_shadow">
        <div class="shadow_in"></div>
        <vep
        :progress="progressNow"
        :size="this.vepData.size"
        :line="this.vepData.line"
        :thickness="this.vepData.thickness"
        :emptyThickness="this.vepData.emptyThickness"
        :color="this.vepData.color"
        :animation="this.vepData.animation"
        fontColor='rgb(0,0,0)'
        fontSize='1.5rem'
        :legend="false"
        >
          <span slot="legend-caption" style="font-size: 2.5rem; color: #000;">
          <span>{{ time_min }}</span>
          <span class="mx-2">:</span>
          <span>{{ time_sec }}</span>
          </span>
        </vep>
      </div> -->
<script>
export default {
  data () {
    return {
      selected: null,
      variants: [{ value: null, text: '' }],
      // 0 = 停止
      // 1 = 播放
      // 2 = 暫停
      status: 0,
      timer: 0,
      vepData: {
        size: 300,
        line: 'butt',
        thickness: 20,
        emptyThickness: 20,
        color: '#FAA273',
        fontcolor: '#000000',
        fontSize: '60px',
        gradient: {
          radial: false,
          colors: [
            {
              color: '#f12711',
              offset: 0,
              opacity: 1
            },
            {
              color: '#f5af19',
              offset: 100,
              opacity: 1
            }
          ]
        },
        animation: 'default 200 200'
      }
    }
  },
  computed: {
    currentText () {
      return this.current.length > 0 ? this.current : this.todos.length > 0 ? '開始鍛鍊' : '目前沒有事項'
    },
    timetext () {
      let m = Math.floor(this.timeleft / 60)
      let s = Math.floor(this.timeleft % 60)
      if (m / 10 <= 0) {
        m = '0' + m
      }
      if (s / 10 > 0) {
        s = '0' + s
      }
      return `${m}:${s}`
    },
    time_min () {
      let m = Math.floor(this.timeleft / 60)
      if (m / 10 <= 0) {
        m = '0' + m
      }
      return m
    },
    time_sec () {
      let s = Math.floor(this.timeleft % 60)
      if (s / 10 > 0) {
        s = '0' + s
      }
      return s
    },
    alarm () {
      return this.$store.getters.alarm
    },
    timeleft () {
      return this.$store.getters.timeleft
    },
    current () {
      return this.$store.getters.current
    },
    todos () {
      return this.$store.getters.todos
    },
    progressNow () {
      return this.$store.getters.progressNow
    },
    anim: function () {
      return {
        dispaly: 'block',
        backgroundColor: 'rgba()',
        width: '',
        height: ''
      }
    }
  },
  methods: {
    start () {
      if (this.status === 2) {
        // 暫停後繼續
        this.status = 1
        const move = 100 / this.timeleft
        this.timer = setInterval(() => {
          this.$store.commit('countdown', move)
          if (this.timeleft <= 0) {
            this.finish(false)
            this.$store.commit('reset')
          }
        }, 1000)
      } else {
        // 開始新倒數
        if (this.todos.length > 0) {
          this.$store.commit('start')
          this.status = 1
          const move = 100 / this.timeleft
          this.timer = setInterval(() => {
            this.$store.commit('countdown', move)
            // this.$store.commit('showProgress', move)
            // console.log(this.$store.getters.progressNow)
            if (this.timeleft <= 0) {
              // setTimeout(() => {
              this.finish(false)
              this.$store.commit('reset')
              // }, 200)
            }
          }, 1000)
        }
      }
    },
    finish (skip) {
      clearInterval(this.timer)
      this.status = 0
      this.$store.commit('finish')

      if (!skip) {
        const audio = new Audio()
        audio.src = './alarms/' + this.alarm
        audio.play()
      }
      if (this.todos.length > 0) {
        this.start()
      } else {
        alert('結束')
      }
    },
    pause () {
      clearInterval(this.timer)
      this.status = 2
    }
  }
}
</script>
