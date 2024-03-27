<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id" class="post-card">
            <!-- <h5>{{ post }}</h5> -->
            <h5>{{ post.TITLE }}</h5>
            <p>{{ post.TECH_STACK }}</p>
            <p>{{ post.IS_SEEKING }}</p>

        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// posts를 반응형 참조로 선언합니다.
const posts = ref([]);

// 화살표 함수를 사용한 onMounted 훅
onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:8080/seekingPostList');
        posts.value = response.data; // posts 반응형 참조에 데이터 할당
        console.log(posts.value); // 데이터 확인
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
});

</script>

<style scoped>
.post-list {
    display: flex;
    flex-direction: column;
}

.post-card {
    margin-bottom: 1rem;
    padding: 1rem;
    border: 1px solid #ccc;
    /* 경계선 스타일 */
    border-radius: 4px;
    /* 둥근 모서리 */
}
</style>