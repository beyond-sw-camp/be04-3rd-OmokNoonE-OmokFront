import { createRouter, createWebHistory } from 'vue-router';

// import PostList from '../components/Section/SeekingMemberPostList/PostList.vue'; // 가정한 경로

const routes = [
    {
        // path: '/posts',
        // name: 'PostList',
        // component: PostList,
    },
    // 추가 라우트를 여기에 정의할 수 있습니다.
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
