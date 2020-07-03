<template>
  <div id="app">
    <div class="slideBg"></div>
        <router-view/>
    <Slide>
    <div class="p-0 slide">
      <b-nav vertical id="nav" class=" mx-auto text-center">
        <b-nav-item>
          <router-link to="/">
            <font-awesome-icon :icon="['fas', 'home']"></font-awesome-icon>
          </router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/workout">
            <font-awesome-icon :icon="['fas', 'dumbbell']"></font-awesome-icon>
          </router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/information">
            <font-awesome-icon :icon="['fas', 'info-circle']"></font-awesome-icon>
          </router-link>
              </b-nav-item>
        <b-nav-item>
          <router-link to="/timer">
            <font-awesome-icon :icon="['fas', 'stopwatch']"></font-awesome-icon>
          </router-link>
        </b-nav-item>
      </b-nav>
    </div>
    </Slide>
    <div class="background"></div>
  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'
export default {
  components: {
    Slide
  }
}
</script>
