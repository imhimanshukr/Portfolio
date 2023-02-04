<template>
<div class="bg-main-white dark:bg-main-dark h-full text-para-clr dark:text-white contact-section px-2 md:px-20 pb-20 md:pb-0">
    <h1 class="py-5 md:py-12 text-center font-extrabold uppercase head-title relative">get in <span class="text-main-green dark:text-main-yellow">touch</span></h1>
    <div class="flex justify-between flex-col md:flex-row">
        <div class="md:max-w-sm">
            <h2 class="font-semibold md:pb-4 pb-2" style="font-size: 26px;">DON'T BE SHY !</h2>
            <p class="text-base pb-4">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            <div class="flex items-center justify-between relative font-semibold pb-6">
                <i class="fa-solid block fa-map text-main-green dark:text-main-yellow text-3xl"></i>
                <div class="absolute left-14">
                    <p class="opacity-80 font-normal uppercase text-2sm">Address Point</p>
                    <p class="text-sm">Hitec city , Hyderabad</p>
                </div>
            </div>
            <div class="flex items-center justify-between relative font-semibold pb-6">
                <i class="fa block fa-envelope text-main-green dark:text-main-yellow text-3xl"></i>
                <div class="absolute left-14">
                    <p class="opacity-80 font-normal uppercase text-2sm">MAIL ME</p>
                    <a class="text-sm" href="mailto:himanshu25k7@gmail.com">himanshu25k7@gmail.com</a>
                </div>
            </div>
            <div class="flex items-center justify-between relative font-semibold pb-6">
                <i class="fa block fa-square-phone text-main-green dark:text-main-yellow text-3xl"></i>
                <div class="absolute left-14">
                    <p class="opacity-80 font-normal uppercase text-2sm">call ME</p>
                    <a class="text-sm" href="tel:+91 9664081383">+91 9664081383</a>
                </div>
            </div>
        </div>
        <div class="max-w-3xl w-full">
            <div class="flex flex-col md:flex-row">
                <input type="text" placeholder="Name" v-model="firstName" class="pl-5 md:mt-8 mt-5 block w-full px-3 py-3 bg-about-card-light dark:bg-dark-bg2 border-none rounded-full outline-0 placeholder-gray-500"/>
                <input type="email" placeholder="EMAIL" v-model="email" class="pl-5 md:mt-8 mt-5 block w-full md:ml-3 px-3 py-3 bg-about-card-light dark:bg-dark-bg2 border-none rounded-full outline-0 placeholder-gray-500"/>
            </div>
            <input type="text" placeholder="SUBJECT" v-model="subject" class="pl-5 md:mt-8 mt-5 block w-full px-3 py-3 bg-about-card-light dark:bg-dark-bg2 border-none rounded-full outline-0 placeholder-gray-500"/>
            <textarea rows="5" class="pl-6 py-5 resize-y w-full md:mt-8 mt-5 bg-about-card-light dark:bg-dark-bg2 border-none outline-0 placeholder-gray-500" placeholder="MESSAGE" v-model="message" style="border-radius: 30px;"></textarea>
            <button class="download-btn-light dark:download-btn-dark md:mt-8 mt-5" @click="sendMessage()"><span class="btn-text uppercase text-para-clr text-opacity-70 dark:text-white">send message</span> <span class="download-icon-light dark:download-icon-dark"> <i class="fa-solid fa-paper-plane"></i></span> </button>
        </div>
    </div>
</div>
</template>

<script>
import { useToast } from 'vue-toastification';
const toast = useToast();

export default {
    data(){
        return {
            firstName: "",
            email: "",
            subject: "",
            message: "",
        }
    },
    methods:{
        sendMessage(){
            if(this.firstName.trim() === ""){
                toast.error("Please enter name", {timeout: 2000})
                return;
            }
            if(this.email.trim() === ""){
                toast.error("Please enter email", {timeout: 2000})
                return;
            }
            const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!regex.test(this.email)) {
                toast.error("Invalid email address", {timeout: 2000});
                return;
            }
            if(this.subject.trim() === ""){
                toast.error("Please enter subject", {timeout: 2000})
                return;
            }
            if(this.message.trim() === ""){
                toast.error("Please enter message", {timeout: 2000})
                return;
            }
            toast.success(`Thanks ${this.firstName} for contact!`, {timeout: 2000})
            console.log(this.firstName, this.email, this.subject, this.message);

        }
    }
}
</script>

<style scoped>
.contact-section {
    font-family: "Poppins", sans-serif;
    width: calc(100vw - 40px);
}
.download-btn-light{
    cursor: pointer;
}

.head-title {
    font-size: 56px;
}

.head-title::after {
    content: "contact";
    font-size: 110px;
    left: 50%;
    letter-spacing: 10px;
    line-height: .7;
    position: absolute;
    top: 50%;
    text-transform: uppercase;
    font-weight: 800;
    transform: translate(-50%, -50%);
    color: hsla(0, 0%, 100%, .07);
}
@media screen and (max-width: 767px) {
    .contact-section {
        width: 100vw;
    }
    .head-title {
        font-size: 35px;
    }

    .head-title::after {
        display: none;
    }
}

</style>
