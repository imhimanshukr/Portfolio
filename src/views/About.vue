<template>
<div class="bg-main-white dark:bg-main-dark h-full md:h-screen lg:h-full text-para-clr dark:text-white about-section px-2 md:px-20 pb-14 md:pb-0" :class="isDark ? '' : 'dark'">
    <h1 class="py-5 md:py-12 text-center font-extrabold uppercase head-title relative">About <span class="text-main-green dark:text-main-yellow">Me</span></h1>
    <div class="mb-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="md:pr-5">
                <p style="line-height:2">I am a highly motivated frontend developer with a passion for creating visually appealing and user-friendly websites and web-based applications. This portfolio showcases my technical skills and experience, highlighting my ability to effectively deliver outstanding web solutions. My goal is to continue learning and growing in the field, and to work on innovative projects that push the boundaries of what's possible on the web.</p>
            </div>
            <div>
                <h1 class="text-2xl pb-6 font-semibold text-para-clr dark:text-white">PERSONAL INFO</h1>
                <div class="flex justify-between pb-3 detail">
                    <div class="left text-2sm">
                        <h2 class="text-para-clr dark:text-gray-300 pb-4">First Name: <span class="text-text-para-clr dark:text-white">Himanshu</span></h2>
                        <h2 class="text-para-clr dark:text-gray-300 pb-4">Address: <span class="text-para-clr dark:text-white">Hyderabad</span></h2>
                        <h2 class="text-para-clr dark:text-gray-300 pb-4">Email: <span class="text-para-clr dark:text-white">himanshu25k7@gmail.com</span></h2>
                        <h2 class="text-para-clr dark:text-gray-300 pb-4">Skype: <span class="text-para-clr dark:text-white">himanshu@skype</span></h2>
                    </div>
                    <div class="right ml-1 md:ml-0">
                        <h2 class="text-para-clr dark:text-gray-300 pb-4">Last Name: <span class="text-para-clr dark:text-white">Kumar</span></h2>
                        <h2 class="text-para-clr dark:text-gray-300 pb-4">Phone: <span class="text-para-clr dark:text-white">+91 9664081383</span></h2>
                        <h2 class="text-para-clr dark:text-gray-300 pb-4">Nationality: <span class="text-para-clr dark:text-white">Indian</span></h2>
                        <h2 class="text-para-clr dark:text-gray-300 pb-4">Languages: <span class="text-para-clr dark:text-white">Hindi, English</span></h2>
                    </div>
                </div>
                <!-- <button class="download-btn-light dark:download-btn-dark" @click="downloadPDF"><span class="btn-text text-para-clr dark:text-white">download cv</span> <span class="download-icon-light dark:download-icon-dark"> <i class="fa-solid fa-download"></i></span> </button> -->
                <a class="download-btn-light dark:download-btn-dark" href="../../Himanshu Kumar.pdf" download><span class="btn-text text-para-clr dark:text-white">download cv</span> <span class="download-icon-light dark:download-icon-dark"> <i class="fa-solid fa-download"></i></span> </a>
            </div>
        </div>
    </div>
    <div>
        <h2 class="text-2xl font-semibold">What <span class="text-main-green dark:text-main-yellow border-b-2">I Do</span></h2>
        <div class="flex justify-between md:flex-row flex-col mt-7">
            <div class="card p-7 mb-2.5 mr-0 md:mr-4 text-left bg-about-card-light dark:bg-about-card-dark" v-for="(item, index) in whatIdo" :key="index">
                <i :class="`fa-solid text-main-green dark:text-main-yellow text-4xl opacity-80 ${item.iconClass}`"></i>
                <h2 class="pb-2 text-2xl py-4 text-para-clr dark:text-white font-medium">{{item.header}}</h2>
                <p>{{item.para}}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            whatIdo: [{
                    iconClass: 'fa-code',
                    header: 'Web Design',
                    para: 'Web Design is the process of creating and planning the look, feel, and functionality of a website.'
                },
                {
                    iconClass: 'fa-laptop-code',
                    header: 'Web Development',
                    para: 'Web development involves the technical aspects of creating and maintaining web-based app.'
                },
                {
                    iconClass: 'fa-shop',
                    header: 'Ecommerce',
                    para: 'E-commerce website enables businesses to sell goods/services to customers via internet.'
                },
            ]
        }
    },
        props:{
            isDark: Boolean
        },
        methods:{
    //         async downloadPDF() {
    //   try {
    //     const response = await axios({
    //       url: '../../Himanshu Kumar.pdf',
    //       method: 'GET',
    //       responseType: 'blob',
    //     });
  
    //     const link = document.createElement('a');
    //     link.href = URL.createObjectURL(new Blob([response.data]));
    //     link.setAttribute('download', 'HimanshuKumar.pdf');
    //     document.body.appendChild(link);
    //     link.click();
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },
//     async downloadPDF() {
//   try {
//     const response = await fetch("../../Himanshu Kumar.pdf", {
//       method: "GET",
//       mode: "cors"
//     });

//     if (!response.ok) {
//       throw new Error("Failed to fetch PDF file");
//     }

//     const pdfBlob = await response.blob();
//     const pdfUrl = URL.createObjectURL(pdfBlob);
//     window.open(pdfUrl);
//   } catch (error) {
//     console.error(error);
//   }
// }

        }
}
</script>

<style scoped>
.about-section {
    font-family: "Poppins", sans-serif;
    width: calc(100vw - 40px);
}

.head-title {
    font-size: 56px;
}

.head-title::after {
    content: "About";
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
.card{
    border-radius: 20px;
}

/*Media Query*/
@media screen and (max-width: 767px) {
    .about-section {
        width: 100vw;
    }

    .head-title {
        font-size: 35px;
    }

    .head-title::after {
        display: none;
    }

    .detail h2 {
        display: flex;
        flex-direction: column;
    }

    .download-btn[data-v-039c5b43]:hover:before {
        transform: translateX(0);
        background-color: #ffb400;
    }
}
</style>
