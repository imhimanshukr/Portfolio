<template>
<div class="bg-main-white dark:bg-main-dark h-full text-para-clr dark:text-white resume-section px-2 md:px-20 pb-14 md:pb-0">
    <h1 class="py-5 md:py-12 text-center font-extrabold uppercase head-title relative">My <span class="text-main-green dark:text-main-yellow">Resume</span></h1>
    <div>
        <h2 class="text-2xl font-semibold mb-5"><span class="text-main-green dark:text-main-yellow border-b-2">Skills</span></h2>
        <div class="grid md:grid-cols-2 grid-cols-1">
            <div v-for="(skill, index) in skillData" :key="index" class="mb-4 mx-6">
                <div class="flex justify-between">
                    <h3 class="uppercase">{{skill.skillName}}</h3>
                    <p>{{skill.skillPercentage}}%</p>
                </div>
                <div class="bg-gray-200 rounded-full">
                    <div class="bg-main-green dark:bg-main-yellow text-xs font-medium text-blue-100 h-3 text-center p-0.5 leading-none rounded-full" :style="`width: ${skill.skillPercentage}%`"></div>
                </div>
            </div>
        </div>
    </div>
    <div>
        <h2 class="text-2xl font-semibold mt-8 mb-5"><span class="text-main-green dark:text-main-yellow border-b-2 capitalize">Experience & education</span></h2>
    </div>
    <div class="grid md:grid-cols-2 grid-cols-1 exp-edu">
        <div class="education">
            <div v-for="(item, index) in experience" :key="index" class="relative pl-5 pr-14 mb-8 resume-box after:border-l after:border-gray-300 dark:after:border-dark-bg2">
                <div class="icon bg-main-green dark:bg-main-yellow">
                    <i class="fa-solid text-white fa-briefcase"></i>
                </div>
                <div class="ml-10">
                    <span class="time uppercase text-para-clr dark:text-white bg-exp-light-time-bg dark:bg-exp-dark-time-bg">{{item.duration}}</span>
                    <h5 class="text-lg uppercase mt-2 mb-2.5"> {{item.position}}<span class="place open-sans-font">{{item.companyName}}</span></h5>
                    <p class="m-0 text-para-clr dark:text-yellow-50 text-sm">{{item.para}}</p>
                </div>
            </div>
        </div>
        <div class="education">
            <div class="relative pl-5 pr-14 mb-8 resume-box after:border-l after:border-gray-300 dark:after:border-dark-bg2" v-for="(item, index) in education" :key="index">
                <div class="icon bg-main-green dark:bg-main-yellow">
                    <i class="fa-solid text-white fa-graduation-cap"></i>
                </div>
                <div class="ml-10">
                    <span class="time uppercase text-para-clr dark:text-white bg-exp-light-time-bg dark:bg-exp-dark-time-bg">{{item.year}}</span>
                    <h5 class="text-lg uppercase mt-2 mb-2.5">{{item.educationName}} <span class="place open-sans-font">{{item.orgName}}</span></h5>
                    <p class="m-0 text-para-clr dark:text-yellow-50 text-sm">{{item.para}}</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            skillData: [{
                    skillName: "html",
                    skillPercentage: "80"
                },
                {
                    skillName: "css",
                    skillPercentage: "85"
                },
                {
                    skillName: "javascript",
                    skillPercentage: "70"
                },
                {
                    skillName: "bootstrap",
                    skillPercentage: "80"
                },
                {
                    skillName: "Vue js",
                    skillPercentage: "85"
                },
                {
                    skillName: "Vuetify",
                    skillPercentage: "75"
                },
                {
                    skillName: "React js",
                    skillPercentage: "60"
                },
                {
                    skillName: "Tailwind css",
                    skillPercentage: "65"
                },
            ],
            experience: [
                {
                    duration: "Mar 2023 - Present",
                    position: "Software Engineer",
                    companyName: "Iorta Technology Solutions",
                    // para: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit",
                },
                {
                    duration: "Apr 2022 - Feb 2023",
                    position: "Frontend developer",
                    companyName: "Speedlabs",
                    // para: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit",
                },
                {
                    duration: "Dec 2021 - Feb 2021",
                    position: "Web Designer intern",
                    companyName: "KmvSoftwares pvt LTD",
                    // para: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit"
                },
            ],
            education: [{
                    year: "2021",
                    educationName: "BACHELOR DEGREE",
                    orgName: "RAJSTHAN TECHNICAL UNIVERSITY",
                    // para: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit",
                },
                {
                    year: "2017",
                    educationName: "INTERMEDIATE",
                    orgName: "M.L.S.M COLLEGE",
                    // para: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit"
                },
                {
                    year: "2015",
                    educationName: "MATRICULATION",
                    orgName: "JESUS & MARY ACADEMY",
                    // para: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit"
                },
            ],
        }
    },
}
</script>

<style scoped>
.resume-section {
    font-family: "Poppins", sans-serif;
    width: calc(100vw - 40px);
    -webkit-user-select: none;
    -moz-user-select: -moz-none;
    -ms-user-select: none;
    user-select: none;
}

.head-title {
    font-size: 56px;
}

.head-title::after {
    content: "Resume";
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

.progress-div {
    width: 400px;
}

/*Education */
.exp-edu {
    margin-left: 30px;
}

.education .resume-box .icon {
    width: 40px;
    height: 40px;
    position: absolute;
    left: 0;
    right: 0;
    line-height: 40px;
    text-align: center;
    z-index: 1;
    border-radius: 50%;
    color: #fff;
}

.education .resume-box:after {
    content: "";
    position: absolute;
    top: 40px;
    left: 20px;
    bottom: 0;
}

.education .resume-box .time {
    font-size: 12px;
    padding: 5px 12px;
    display: inline-block;
    margin-bottom: 12px;
    border-radius: 20px;
    font-weight: 600;
    opacity: .8;
    margin-top: 8px;
    box-shadow: 0px 10px 10px rgb(0 0 0 / 10%);
}

.education .resume-box .place {
    opacity: .8;
    font-weight: 600;
    font-size: 15px;
    position: relative;
    padding-left: 26px;
}

.education .resume-box .place:before {
    position: absolute;
    content: "";
    width: 10px;
    height: 2px;
    background-color: #fff;
    left: 7px;
    top: 9px;
    opacity: .8;
}

/*Media Query*/
@media screen and (max-width: 767px) {
    .resume-section {
        width: 100vw;
    }

    .head-title {
        font-size: 35px;
    }

    .head-title::after {
        display: none;
    }

    .about-section {
        width: 100%;
    }

    .progress-div {
        width: 150px;
    }
}
</style>
