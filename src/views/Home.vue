<template>
  <div id="home" :style="{ width : 'calc(' + viewWidth + '%-96)'}" ref="home">
    <b-container fluid style="width:95%;">
      <div class=" d-flex justify-content-center">
        <b-col cols="9" class="toolbar">
          <p class="subtitle">Home</p>
        </b-col>
        <b-col cols="3" class="d-flex justify-content-center align-items-center">
          <input type="button" value="Log in" class="login-btn">
          <input type="button" value="Sign up" class="sign-btn">
        </b-col>
      </div>
      <b-col col sm="12" lg="8" class="banner my-2"></b-col>

      <!-- <div class="bg-info my-5" style="width:60%;">
        <b-col class="card bg-danger" >
          <div class="imgWrap">
            <img src="https://picsum.photos/300/200/?random=1" class="img-fluid">
          </div>
          <h5 class="my-4">第一個</h5>
        </b-col>
      </div> -->

      <div class="wrap-hooper col-8 bg-light" >
        <hooper :settings="hooperSettings">
          <slide>
            <div class="images img1">
              <h2>Slider 1</h2>
            </div>
          </slide>
          <slide>
            <div class="images img2">
              <h2>Slider 2</h2>
            </div>
          </slide>
          <slide>
            <div class="images img3">
              <h2>Slider 3</h2>
            </div>
          </slide>
          <slide>
            <div class="images img4">
              <h2>Slider 4</h2>
            </div>
          </slide>
          <slide>
            <div class="images img5">
              <h2>Slider 5</h2>
            </div>
          </slide>
        </hooper>
      </div>

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
    </b-container>
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'
// import VueHorizontalList from '../components/vue-horizontal-list'
export default {
  components: {
    Hooper,
    Slide
    // VueHorizontalList
  },
  data () {
    return {
      hooperSettings: {
        infiniteScroll: false,
        centerMode: true,
        autoPlay: true,
        playSpeed: 3500,
        breakpoints: {
          2400: {
            itemsToShow: 5
          },
          1800: {
            itemsToShow: 4
          },
          1500: {
            itemsToShow: 3
          },
          1100: {
            itemsToShow: 2.5
          },
          0: {
            itemsToShow: 1.5
          }
        }
      }
      // options: {
      //   responsive: [
      //     { end: 576, size: 1 },
      //     { start: 576, end: 768, size: 2 },
      //     { start: 768, end: 992, size: 3 },
      //     { size: 4 }
      //   ],
      //   list: {
      //     // 1200 because @media (min-width: 1200px) and therefore I want to switch to windowed mode
      //     windowed: 1200,

      //     // Because: #app {padding: 80px 24px;}
      //     padding: 24
      //   }
      // },
      // items: [
      //   { title: 'Item 0', content: 'Content item with description' }
      // ]
    }
  },
  computed: {
    viewWidth () {
      return this.$store.getters.getWidth
    }
  }

}
</script>
