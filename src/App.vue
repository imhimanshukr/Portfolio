<template>
<div class="app relative bg-main-white dark:bg-main-dark" :class="isDark ? '' : 'dark'" ref="maincontainer">
    <div class="fixed z-50 border-0 top-1 bg-dark-bg2 dark:bg-main-white p-3 rounded-md rounded-tr-none rounded-br-none" style="right: 0px;">
        <i class="fa-solid fa-gear animate-spin spin-slow text-main-white dark:text-dark-bg2 text-4xl cursor-pointer" @click="showSettings = !showSettings; showBrightRange=false;"></i>
        <div class="flex w-32 drop-shadow-md" v-if="showSettings">
            <span class="material-icons material-symbols-outlined block text-dark-vg2 dark:text-white mr-2 rounded-full w-10 h-10 text-center bg-main-white dark:bg-dark-bg2 text-3sm cursor-pointer" style="line-height: 40px;" @click="isDark = !isDark; showSettings = false; showBrightRange=false;">{{isDark? 'dark_mode' : 'light_mode'}}</span>
            <!-- <router-link class="material-icons material-symbols-outlined block text-dark-vg2 dark:text-white rounded-full w-10 h-10 text-center bg-main-white dark:bg-dark-bg2 text-3sm cursor-pointer" style="line-height: 40px;" to="/signup" @click="showSignupPage = true; hideSideBar=true; showSettings=false; showBrightRange = false;">admin_panel_settings</router-link> -->
            <i class="material-icons material-symbols-outlined block text-dark-vg2 dark:text-white rounded-full w-10 h-10 text-center bg-main-white dark:bg-dark-bg2 text-3sm cursor-pointer" style="line-height: 40px;" @click="showBrightRange = !showBrightRange">brightness_medium</i>
        </div>
            <div class="brightness-box" v-if="showBrightRange">
                <i class="far fa-sun"></i>
                <input type="range" id="range" class="bg-main-green dark:bg-main-yellow" min="20" max="100" v-model="brightnessValue" @change="changeBrightness">
                <i class="fas fa-sun"></i>
            </div>
    </div>
    <router-view :isDark="isDark" @showSignup="showSignup($event)" :showSignupPage="showSignupPage" />
    <SideBar :isDark="isDark" v-if="!hideSideBar" />
</div>
</template>

<script>
import SideBar from './components/Sidebar.vue';
export default {
    data() {
        return {
            showSettings: false,
            isDark: false,
            showSignupPage: false,
            hideSideBar: false,
            showBrightRange: false,
            brightnessValue: 100,
        }
    },
    created() {
        this.showSignupPage = false;
    },
    components: {
        SideBar,
    },
    methods: {
        showSignup(triggerVal) {
            this.hideSideBar = triggerVal
        },
        changeBrightness() {
            this.$refs.maincontainer.style.filter = "brightness(" + this.brightnessValue + "%)";
        }
    },
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
}

.app {
    display: flex;
    flex-direction: row-reverse;
}

button {
    font-family: 'Fira sans', sans-serif;
    cursor: pointer;
    appearance: none;
    border: none;
    outline: none;
    background: none;
}

.brightness-box {
    max-width: 400px;
    height: 40px;
    background: #f9f9f9;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
}

.brightness-box i {
    margin: 0 10px;
}

#range {
    width: 100%;
    -webkit-appearance: none;
    height: 3px;
    outline: none;
}

#range::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 22px;
    height: 22px;
    background: #333;
    border-radius: 50%;
    cursor: pointer;
}

@media screen and (max-width: 767px) {
    .app {
        align-items: baseline;
        justify-content: space-evenly;
        flex-direction: column;
    }
}
</style>
