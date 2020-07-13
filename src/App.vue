<template>
  <div id="app">
    <div class="slideBg">
        <router-view/>
    </div>

    <Menu @data="data" id="menu">
      <b-nav vertical id="nav" class=" mx-auto text-center">

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
      <!-- <router-link to="/">
          <font-awesome-icon :icon="['fas', 'home']"></font-awesome-icon>
      </router-link> -->
    </Menu>
  </div>
</template>

<script>
import Menu from './components/Menu'

export default {
  data () {
    return {
      side: 'left',
      currentMenu: 'push',
      isBurgerShow: true
    }
  },
  components: {
    Menu
  },
  methods: {
    data (data) {
      this.isBurgerShow = data
    }
  }
}
</script>
