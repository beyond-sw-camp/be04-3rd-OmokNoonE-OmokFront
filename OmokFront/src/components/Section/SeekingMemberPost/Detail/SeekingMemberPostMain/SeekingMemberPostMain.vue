<template>
    <!-- frame-7 -->
    <div class="frame-7">
        <PostHeader />
        <PostContents />
        <Apply />
    </div>
</template>

<script setup>
import PostHeader from './PostHeader/PostHeader.vue';
import PostContents from './PostContents/PostContents.vue';
import Apply from './Apply/Apply.vue';
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
</style>