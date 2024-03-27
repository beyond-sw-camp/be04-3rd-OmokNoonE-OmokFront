<template>
    <!-- section -->
    <div class="section">
        <SessionHeader />
        <SessionBody :posts="posts"/>
        <SessionContent />
    </div>
</template>

<script setup>
import SessionHeader from './SessionHeader/SessionHeaderDetail.vue';
import SessionBody from './SessionBody/SessionBody.vue';
import SessionContent from './SessionContent/SessionContent.vue';

import { ref, onMounted } from 'vue';
import axios from 'axios';

const posts = ref('[]');

onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:58888/seekingPostList');
        posts.value = response.data; // posts 반응형 참조에 데이터 할당
        console.log(posts.value); // 데이터 확인
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
});
</script>

<style scoped>
.section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1px;
    position: relative;
    flex: 1;
    align-self: stretch;
    width: 100%;
    min-width: 600px;
    flex-grow: 1;
    min-height: 700px;
}
</style>