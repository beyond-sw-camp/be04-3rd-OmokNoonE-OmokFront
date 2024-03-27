import { createRouter, createWebHistory } from 'vue-router';
import SeekingMemberPostList from '../components/Section/SeekingMemberPost/list/SeekingMemberPostListMain.vue';
import GuestMainPage from '@/components/Section/GuestMainPage/GuestMainPage.vue';
import SeekingMemberPostDetail from '@/components/Section/SeekingMemberPost/Detail/SeekingMemberPostDetailAll.vue';

// import PostList from '../components/Section/SeekingMemberPostList/PostList.vue'; // 가정한 경로

const routes = [
    {
        path: '',
        component: GuestMainPage
    },
    {
        path: '/guestMainPage',
        component: GuestMainPage
    },
    {
        path: '/seekingMemberPostList',
        component: SeekingMemberPostList
    },
    {
        path: '/seekingMemberPostDetail',
        component: SeekingMemberPostDetail
    },
    {
        // path: '/posts',
        // name: 'PostList',
        // component: PostList,
    },
    // 추가 라우트를 여기에 정의할 수 있습니다.
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
