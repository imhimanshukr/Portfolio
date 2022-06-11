<template>
<aside class="bg-main-white dark:bg-main-dark h-screen w-20 flex items-center fixed left-0 z-10" :class="isDark ? '' : 'dark'" v-if="showSignup === false">
    <div class="mt-1.5 md:mt-5 flex md:block">
        <div>
            <div class="flex flex-col w-full">
                <div class="wrapper flex flex-row md:flex-col">
                    <router-link class="button-lightmode dark:button-md dark:sm:button z-10" :class="menuLink.title" v-for="(menuLink, index) in menuLinks" :key="index" :to="menuLink.to" @click="defaultId = menuLink.id">
                        <div class="icon" :class="defaultId === menuLink.id ? 'bg-main-green dark:bg-main-yellow' : ''">
                            <span><i class="fa-solid text-white" :class="menuLink.iconClass"></i></span>
                        </div>
                        <span class="title">{{menuLink.title}}</span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</aside>
</template>

<script>
export default {
    name: 'SideBar',
    data() {
        return {
            showMenu: false,
            menuLinks: [{
                    id: 1,
                    to: '/',
                    iconClass: 'fa-house',
                    title: 'Home'
                },
                {
                    id: 2,
                    to: '/about',
                    iconClass: 'fa-user',
                    title: 'About'
                },
                {
                    id: 3,
                    to: '/resume',
                    iconClass: 'fa-graduation-cap',
                    title: 'Resume'
                },
                {
                    id: 4,
                    to: '/portfolio',
                    iconClass: 'fa-briefcase',
                    title: 'Portfolio'
                },
                {
                    id: 5,
                    to: '/contact',
                    iconClass: 'fa-comments',
                    title: 'Contact'
                },
            ],
            defaultId: 1,
            showMenuText: false,
        }
    },
    update() {
        console.log("showMenuText: ", this.showMenuText);
    },
    props:{
        isDark: Boolean,
        showSignup: Boolean,
    },
}
</script>

<style scoped>
* {
    list-style: none;
}

.bg-sidebar {
    background: #10121B;
    position: relative;
}

.menu-bg {
    background-color: #2B2A2A;
}

.mright-18 {
    margin-right: 18px;
}

.paddingLeft-18 {
    padding-left: 20px;
}

/********************/
/* Light mode */
.button-lightmode {
    display: inline-block;
    margin: 0 5px;
    overflow: hidden;
    background: #2b2a2a;
    border-radius: 30px;
    cursor: pointer;
    box-shadow: 0px 10px 10px rgb(0 0 0 / 10%);
    transition: all 0.3s ease-out;
    width: 50px;
    height: 50px;
    margin: 10px 25px;
}
.button-lightmode.router-link-active {
    background: #72b626;
}

.button-lightmode:hover {
    color: white;
    background: #72b626;
}
.button-lightmode.Home:hover {
    width: 128px;
}

.button-lightmode.About:hover {
    width: 135px;
}

.button-lightmode.Resume:hover {
    width: 146px;
}

.button-lightmode.Portfolio:hover {
    width: 177px;
}

.button-lightmode.Contact:hover {
    width: 158px;
}

.button-lightmode .icon {
    display: inline-block;
    height: 50px;
    width: 50px;
    text-align: center;
    border-radius: 50%;
    box-sizing: border-box;
    line-height: 50px;
    transition: all 0.3s ease-out;
}

.button-lightmode:hover .icon {
    background: #72b626;
}

.button-lightmode .icon span {
    font-size: 17px;
    text-align: center;
    font-weight: 500;
    line-height: 50px;
    transition: all 0.3s ease-out;
    color: white;
    margin-left: 1px;
}

.button-lightmode .title {
    color: white;
    letter-spacing: 2px;
    font-size: 17px;
    line-height: 53px;
    text-transform: uppercase;
    font-weight: 500;
    line-height: 50px;

}

@media screen and (max-width: 767px) {
    aside {
        height: auto;
        justify-content: space-evenly;
        position: fixed;
        bottom: 0;
        overflow: hidden;
        /*background: #111111;*/
        z-index: 1;
        width: 100vw;
    }

    .wrapper {
        flex-direction: row;
        justify-content: space-between;
        width: 100vw;
        padding: 0 10px;
    }
    .button-lightmode {
        margin: 5px  !important;
    }

    .button-lightmode.Home:hover,
    .button-lightmode.About:hover,
    .button-lightmode.Resume:hover,
    .button-lightmode.Portfolio:hover,
    .button-lightmode.Contact:hover {
        width: 50px;
    }
}
/*
@media screen and (max-width: 300px) {
    .button-lightmode {
        width: 40px;
        height: 40px;
    }

    .button-lightmode .icon {
        width: 40px;
        height: 40px;
        line-height: 40px;
    }

    .button-lightmode .icon span {
        line-height: 40px;
    }

    .button-lightmode.Home:hover,
    .button-lightmode.About:hover,
    .button-lightmode.Resume:hover,
    .button-lightmode.Portfolio:hover,
    .button-lightmode.Contact:hover {
        width: 40px;
    }

}*/
</style>
