<template>
    <!-- frame-7 -->
    <div class="frame-7">
        <PostHeader :postHeaderProps="postHeaderProps"/>
        <PostContents :content="content"/>
        <Apply />
    </div>
</template>

<script setup>
// import PostHeader from './PostHeader/PostHeader.vue';
import PostHeader from './PostHeader/PostHeader.vue';
import PostContents from './PostContents/PostContents.vue';
import Apply from './Apply/Apply.vue';
import { ref, onMounted, defineProps } from 'vue';
import axios from 'axios';

const postIdProps = defineProps({
    postId: String
});

const posts = [];

const postHeaderProps = ref({});
const content = ref('');


onMounted(async () => {
    try {
        const response = await axios.get("http://localhost:8080/seekingPostDetail");
        posts.value = response.data;
        for (let i = 0; i < posts.value.length; i++) {
            if(posts.value[i].ID == postIdProps['postId']) {
                const postTitle = posts.value[i].TITLE;
                const postTechStack = posts.value[i].TECH_STACK;
                const postNickname = posts.value[i].NICKNAME;
                const postLastModifiedDate = posts.value[i].LAST_MODIFIED_DATE;
                const postIsSeeking = posts.value[i].IS_SEEKING;
                content.value = posts.value[i].CONTENT;

                postHeaderProps.value = {
                    title: postTitle,
                    techStack: postTechStack,
                    nickname: postNickname,
                    lastModifiedDate: postLastModifiedDate,
                    isSeeking: postIsSeeking
                };
            }
        }

    } catch (error) {
        console.error("Error fetching posts:",error);
    }
});

</script>

<style scoped>
.frame-7 {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 61px;
    position: relative;
    top: 68px;
    left: 189px;
}
</style>./PostHeader/PostHeader.vue