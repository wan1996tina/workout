<template>
  <div id="app" ref="app">
    <div class="main-content" ref="wrap">
        <router-view/>
    </div>
<!-- 大尺寸選單 -->
    <Menu @data="data" id="menu" ref="menu">
      <b-nav vertical id="nav" class="mx-auto text-center">

        <b-nav-item>
          <router-link to="/">
            <font-awesome-icon :icon="['fas', 'home']"></font-awesome-icon>
            <span v-show="!isBurgerShow">Home</span>
          </router-link>
        </b-nav-item>

        <b-nav-item>
          <router-link to="/workout">
            <font-awesome-icon :icon="['fas', 'dumbbell']"></font-awesome-icon>
            <span v-show="!isBurgerShow">Workout</span>
          </router-link>
        </b-nav-item>

        <b-nav-item>
          <router-link to="/information">
            <font-awesome-icon :icon="['fas', 'info-circle']"></font-awesome-icon>
            <span v-show="!isBurgerShow">About</span>
          </router-link>
        </b-nav-item>

        <b-nav-item>
          <router-link to="/timer">
            <font-awesome-icon :icon="['fas', 'stopwatch']"></font-awesome-icon>
            <span v-show="!isBurgerShow">Timer</span>
          </router-link>
        </b-nav-item>

      </b-nav>
      <h3>{{this.width}}</h3>

      <!-- <router-link to="/">
          <font-awesome-icon :icon="['fas', 'home']"></font-awesome-icon>
      </router-link> -->
    </Menu>

<!-- 小尺寸選單 -->
    <div class="menu-sm">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-navbar-brand href="#" class="text-center">
          <img :src="this.logoSrc" alt="" width="100px">
        </b-navbar-brand>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav id="nav-sm" class="mr-auto">

            <b-nav-item>
              <router-link to="/">
                <font-awesome-icon :icon="['fas', 'home']"></font-awesome-icon>
                <span v-show="!isBurgerShow">Home</span>
              </router-link>
            </b-nav-item>

            <b-nav-item>
              <router-link to="/workout">
                <font-awesome-icon :icon="['fas', 'dumbbell']"></font-awesome-icon>
                <span v-show="!isBurgerShow">Workout</span>
              </router-link>
            </b-nav-item>

            <b-nav-item>
              <router-link to="/information">
                <font-awesome-icon :icon="['fas', 'info-circle']"></font-awesome-icon>
                <span v-show="!isBurgerShow">About</span>
              </router-link>
            </b-nav-item>

            <b-nav-item>
              <router-link to="/timer">
                <font-awesome-icon :icon="['fas', 'stopwatch']"></font-awesome-icon>
                <span v-show="!isBurgerShow">Timer</span>
              </router-link>
            </b-nav-item>

          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="mx-auto">

            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import Menu from './components/Menu'

export default {
  data () {
    return {
      side: 'left',
      currentMenu: 'push',
      isBurgerShow: true,
      width: '',
      logoSrc: './img/logo.png'
    }
  },
  components: {
    Menu
  },
  methods: {
    data (data) {
      this.isBurgerShow = data
    }

  },
  watch: {
    changeWidth () {
      if (this.width === 100) { this.$refs.wrap.width = 100 }
    }
  },
  computed: {
    getWidth () {
      return this.$store.getters.sidebarWidth
    }
  },
  mounted () {
    const width = this.$refs.menu.$refs.sideNav.clientWidth
    this.width = width
    console.log(this.width)
    // console.log(this.$refs.menu.$refs.sideNav)
  }
}
</script>
