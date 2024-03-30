<template>
    <!-- section -->
    <div class="section">
        <ListHeader />
        <ListBody :posts="posts"/>
        <ListContent />
    </div>
</template>

<script setup>
import ListHeader from '@/components/Section/SeekingPost/List/ListHeader.vue';
import ListBody from '@/components/Section/SeekingPost/List/ListBody.vue';
import ListContent from '@/components/Section/SeekingPost/List/ListContent.vue';

import { ref, onMounted } from 'vue';
import axios from 'axios';

const posts = ref('[]');

onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:8081/seekingPostList?_sort=-SEEKING_MEMBER_POST_ID');
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