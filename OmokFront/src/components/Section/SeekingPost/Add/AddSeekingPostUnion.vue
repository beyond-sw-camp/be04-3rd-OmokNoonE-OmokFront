<template>
    <div class="section">
        <AddSeekingPostHeader/>
        <AddSeekingPostDetail/>
        <AddSeekingPostContent/>
    </div>
</template>

<script setup>
    import AddSeekingPostHeader from '@/components/Section/SeekingPost/Add/AddSeekingPostHeader.vue';
    import AddSeekingPostDetail from '@/components/Section/SeekingPost/Add/AddSeekingPostDetail.vue';
    import AddSeekingPostContent from '@/components/Section/SeekingPost/Add/AddSeekingPostContent.vue';
</script>

<style scoped>
@media screen and (max-width: 1040px) {
  .section {
    width: 90%; /* 화면 너비의 90%로 조정 */
    max-width: 600px; /* 최대 너비를 600px로 제한 */
  }
}

.section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    position: relative;
    align-self: center;
    width: fit-content;
    margin: 50px;
    padding: 30px;
    min-height: 700px;
    background-color: white;
    border-radius: 30px;
}
</style>