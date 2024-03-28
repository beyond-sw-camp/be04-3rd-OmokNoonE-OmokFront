<template>
    <div class="section">
        <AddSeekingPostHeader/>
        <AddSeekingPostDetail/>
        <AddSeekingPostContent/>
    </div>
</template>

<script setup>
    import AddSeekingPostHeader from '@/components/Section/AddSeekingPost/AddSeekingPostHeader.vue';
    import AddSeekingPostDetail from '@/components/Section/AddSeekingPost/AddSeekingPostDetail.vue';
    import AddSeekingPostContent from '@/components/Section/AddSeekingPost/AddSeekingPostContent.vue';
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