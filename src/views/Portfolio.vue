<template>
<div class="bg-main-white dark:bg-main-dark h-full :h-screen text-para-clr dark:text-white portfolio-section px-2 md:px-20 pb-24 md:mb-0" :class="isDark ? '' : 'dark'">
    <h1 class="py-5 md:py-12 text-center font-extrabold uppercase head-title relative">My <span class="text-main-green dark:text-main-yellow">Portfolio</span></h1>
    <div style="min-height: 73vh">
        <ul class="flex justify-center flex-wrap">
            <li class="text-para-clr dark:text-white mx-2 md:mx-5 mb-1 font-semibold uppercase cursor-pointer hover:text-main-green dark:hover:text-main-yellow" :class="{'text-main-green dark:text-main-yellow': selectedTab === 0}" @click="selectedTab = 0">All</li>
            <li class="text-para-clr dark:text-white mx-2 md:mx-5 font-semibold uppercase cursor-pointer hover:text-main-green dark:hover:text-main-yellow" v-for="(tab, index) in tabDetail" :key="index" :class="{'dark:text-main-yellow': selectedTab === tab.tabId}" @click="selectedTab = tab.tabId">{{tab.tabName}}</li>
        </ul>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-5">
                <a v-for="(item, index) in projectDetail" :key="index" class="project-item text-black relative font-semibold shadow-md h-56 rounded drop-shadow-md" :class="(selectedTab=== item.tabId || selectedTab === 0) ? 'block' : 'hidden'" :style="`background: url('${item.thumbnail}') no-repeat; background-size: cover !important;`" :href="item.url" target="_blank">
                    <div class="project-desc text-white absolute top-2.5 left-2.5">
                        <h4 class="text-3xl">{{item.projectName}}</h4>
                        <p class="text-sm">{{item.tabName}}</p>
                    </div>
                </a>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            // tabs: [{
            //         tabId: 1,
            //         tabName: 'All'
            //     },
            //     {
            //         tabId: 2,
            //         tabName: 'Templates',
            //     },
            //     {
            //         tabId: 3,
            //         tabName: 'React Js',
            //     },
            //     {
            //         tabId: 4,
            //         tabName: 'Vue Js'
            //     },
            //     {
            //         tabId: 5,
            //         tabName: 'games'
            //     },
            // ],
            projectDetail: [{
                    tabId: 1,
                    tabName: "Templates",
                    projectName: 'Hospital',
                    url: "https://imhimanshukr.github.io/cityHospital/",
                    thumbnail: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                },
                {
                    tabId: 1,
                    tabName: "Templates",
                    projectName: 'Kovid-19',
                    url: "https://imhimanshukr.github.io/kovid-19/",
                    thumbnail: "https://cdn.downtoearth.org.in/library/large/2022-01-03/0.35869500_1641208915_p12-13dlpix-istock-1222436349.jpg"
                },
                {
                    tabId: 1,
                    tabName: "Templates",
                    projectName: 'Foodies',
                    url: "https://imhimanshukr.github.io/foodies/",
                    thumbnail: "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg"
                },
                {
                    tabId: 1,
                    tabName: "Templates",
                    projectName: 'Oellfare',
                    url: "https://imhimanshukr.github.io/oellfare/",
                    thumbnail: "https://vrittifoundation.org/wp-content/uploads/2021/10/partnership-NGO-2.jpg"
                },
                {
                    tabId: 2,
                    tabName: 'React Js',
                    projectName: 'Evento',
                    url: "https://imhimanshukr.github.io/evento/",
                    thumbnail: "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                },
                {
                    tabId: 2,
                    tabName: 'React Js',
                    projectName: 'MI Clone',
                    url: "https://miclonehms.netlify.app/",
                    thumbnail: "https://bsmedia.business-standard.com/_media/bs/img/article/2020-06/30/full/1593533232-6474.jpg?im=Resize,width=480"
                },
                {
                    tabId: 3,
                    projectName: 'Twitter Clone',
                    tabName: 'Vue Js',
                    url: "https://twitterhms.netlify.app/",
                    thumbnail: "https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/6304a2578abd315b18c8f6e9_twitter-logo.png"
                },
                {
                    tabId: 4,
                    projectName: 'On the way...',
                    tabName: 'Games',
                    url: "#0",
                    thumbnail: "https://images.all-free-download.com/images/graphiclarge/error_404_page_not_found_6845510.jpg"
                },
            ],
            tabDetail: [],
            selectedTab: 0,
        }
    },
    props:{
        isDark: Boolean
    },
    created() {
        let tabid = Array.from(new Set(this.projectDetail.map((item) => item.tabId)));
        this.tabDetail = tabid.map((id) => ({
            tabId: id,
            tabName: this.projectDetail.find((item) => item.tabId === id).tabName,
        }));
        console.log("tab: ", this.tabDetail);
    },
    activated() {
        let tabid = Array.from(new Set(this.projectDetail.map((item) => item.tabId)));
        this.tabDetail = tabid.map((id) => ({
            tabId: id,
            tabName: this.projectDetail.find((item) => item.tabId === id).tabName,
        }));
        console.log("tab: ", this.tabDetail);
    },
}
</script>

<style scoped>
.portfolio-section {
    font-family: "Poppins", sans-serif;
    width: calc(100vw - 40px);
}

.head-title {
    font-size: 56px;
}

.head-title::after {
    content: "works";
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

.project-item {
    overflow: hidden;
}

.project-item::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .65);
    pointer-events: none;
    opacity: 0.3;
    transition: all .55s;
}

.project-desc {
    z-index: 10;
}

@media screen and (max-width: 767px) {
    .portfolio-section {
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
