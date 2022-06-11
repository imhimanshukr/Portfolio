<template>
    <div class="bg-main-white dark:bg-main-dark w-screen h-screen text-para-clr dark:text-white" :class="isDark ? '' : 'dark'" v-if="showSignupPage">
    <div class="flex items-center min-h-screen">
      <div class="flex-1 h-full">
        <div class="flex flex-col items-center">
          <div class="flex items-center justify-center p-6 sm:p-12 md:w-1/2 w-full">
            <div class="w-full">
              <button @click="goBack" class="text-main-green dark:text-main-yellow font-bold uppercase text-4xl"><i class="fa-solid fa-left-long"></i></button>
              <h1 class="mb-4 text-2xl font-bold text-center text-para-clr dark:text-white">
                Log In
              </h1>
              <div class="mt-4">
                <label class="block text-sm">
                  Email
                </label>
                <input type="email"
                  class="w-full px-4 text-black py-2 text-sm border rounded-md focus:border-main-green dark:focus:border-main-yellow focus:outline-none focus:ring-1 focus:ring-main-green dark:focus:ring-main-yellow"
                  placeholder="Email Address" />
              </div>
              <div>
                <label class="block text-sm mt-3">
                  Password
                </label>
                <input
                  class="w-full px-4 py-2 text-black text-sm border rounded-md focus:border-main-green dark:focus:border-main-yellow focus:outline-none focus:ring-1 focus:ring-main-green dark:focus:ring-main-yellow"
                  placeholder="Password" type="password" />
              </div>
              <button
                class="block w-full px-4 py-2 mt-8 text-sm font-medium leading-5 text-center text-white bg-main-green border border-transparent rounded-lg dark:bg-main-yellow focus:outline-none focus:shadow-outline-blue"
                href="#">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
    export default {
        props:{
        isDark: Boolean,
        showSignupPage: Boolean,
    },
    created(){
        console.log("dark: ", this.isDark);
        console.log("signup: ", this.showSignupPage);
    },
    methods:{
        goBack(){
            this.$router.go(-1);
            this.$emit("showSignup", false);
        }
    }
    }
</script>

<style scoped>

</style>