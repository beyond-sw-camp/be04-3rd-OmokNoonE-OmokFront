import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        // path: ['', '/guestMain'],
        path: '/',
        alias: ['/main', '/index'],
        // component: GuestMainPage
        component: () => import("../views/GuestMainView.vue")
    },
    // {
    //     path: '/guestMainPage',
    //     component: GuestMainPage
    // },
    {
        path: '/seekingpost',
        component: () => import("../views/SeekingPostListView.vue")
    },
    {
        path: '/seekingpost/:id',
        component: () => import("../views/SeekingPostDetailView.vue")
    },
    // 추가 라우트를 여기에 정의할 수 있습니다.
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
