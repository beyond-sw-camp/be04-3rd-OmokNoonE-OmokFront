<template>
    <!-- frame-wrapper -->
    <div class="frame-wrapper">
        <SeekingMemberPostMain :postId="postId"/>
    </div>
</template>

<script setup>
    import SeekingMemberPostMain from './SeekingMemberPostMain/SeekingMemberPostMain.vue';
    import { useRoute } from 'vue-router';

    // const postId = useRoute().params.id;
    const postId = 40;
</script>

<style scoped>
.frame-wrapper {
    position: relative;
    width: 1438px;
    height: 1724px;
    left: 0;
}
</style>