<template>
    <div class="frame-wrapper">
        <AddSeekingPostUnion/>
    </div>
</template>

<script setup>
import AddSeekingPostUnion from '@/components/Section/AddSeekingPost/AddSeekingPostUnion.vue';

</script>

<style scoped>
.frame-wrapper {
    display: inline-flex;
    position: relative;
    justify-content: center;
    width: 100%;
    height: fit-content;
    background-color: lightgray;
}
</style>