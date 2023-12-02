<template>
  <div
    class="app relative bg-main-white dark:bg-main-dark"
    :class="isDark ? '' : 'dark'"
  >
    <div
      class="fixed z-50 border-0 top-1 bg-dark-bg2 dark:bg-main-white p-3 rounded-md rounded-tr-none rounded-br-none"
      style="right: -1px"
    >
      <!-- <i
        class="fa-solid fa-gear animate-spin spin-slow text-main-white dark:text-dark-bg2 text-4xl cursor-pointer"
        @click="showSettings = !showSettings"
      ></i> -->
      <i
          class="fa-regular fa-lightbulb block text-dark-vg2 dark:text-white rounded-full w-10 h-10 text-center bg-main-white dark:bg-dark-bg2 text-3sm cursor-pointer"
          style="line-height: 40px"
          @click="
            isDark = !isDark;
            showSettings = false;
          "
        ></i>
      <!-- <div class="flex justify-between w-32 drop-shadow-md" v-if="showSettings">
        <i
          class="fa-regular fa-lightbulb block text-dark-vg2 dark:text-white rounded-full w-10 h-10 text-center bg-main-white dark:bg-dark-bg2 text-3sm cursor-pointer"
          style="line-height: 40px"
          @click="
            isDark = !isDark;
            showSettings = false;
          "
        ></i>
        <router-link
          class="fa-solid fa-user-gear block text-dark-vg2 dark:text-white rounded-full w-10 h-10 text-center bg-main-white dark:bg-dark-bg2 text-3sm cursor-pointer"
          style="line-height: 40px"
          to="/signup"
          @click="
            showSignupPage = true;
            hideSideBar = true;
            showSettings = false;
          "
        ></router-link>
        <i
          class="fa-regular fa-sun block text-dark-vg2 dark:text-white rounded-full w-10 h-10 text-center bg-main-white dark:bg-dark-bg2 text-3sm cursor-pointer"
          style="line-height: 40px"
        ></i>
      </div> -->
    </div>
    <router-view
      :isDark="isDark"
      @showSignup="showSignup($event)"
      :showSignupPage="showSignupPage"
    />
    <SideBar :isDark="isDark" v-if="!hideSideBar" />
  </div>
</template>

<script>
import SideBar from "./components/Sidebar.vue";

export default {
  data() {
    return {
      showSettings: false,
      isDark: false,
      showSignupPage: false,
      hideSideBar: false,
    };
  },
  created() {
    this.showSignupPage = false;
  },
  components: {
    SideBar,
  },
  methods: {
    showSignup(triggerVal) {
      this.hideSideBar = triggerVal;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
}

.app {
  display: flex;
  flex-direction: row-reverse;
}

button {
  font-family: "Fira sans", sans-serif;
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}
@media screen and (max-width: 767px) {
  .app {
    align-items: baseline;
    justify-content: space-evenly;
    flex-direction: column;
  }
}
</style>
