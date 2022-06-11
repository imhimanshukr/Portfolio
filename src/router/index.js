import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
        routes: [
            {
                path: '/',
                component: () => import('../views/Home.vue'),
            },
            {
                path: '/about',
                component: () => import('../views/About.vue')
            },
            {
                path: '/resume',
                component: () => import('../views/Resume.vue')
            },
            {
                path: '/portfolio',
                component: () => import('../views/Portfolio.vue')
            },
            {
                path: '/contact',
                component: () => import('../views/Contact.vue')
            },
            {
                path: '/signup',
                component: () => import('../views/Signup.vue')
            }
        ]
})

export default router;