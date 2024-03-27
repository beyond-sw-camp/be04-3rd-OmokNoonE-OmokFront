<template>
    <div class="frame-7">
        <FooterBody />
        <Underbar />
    </div>
</template>

<script setup>
import FooterBody from './FooterBody/FooterBody.vue';
import Underbar from './Underbar.vue';
</script>

<style scoped>
.frame-7 {
    display: flex;
    flex-direction: column;
    width: 90%;
    /* margin: 0 auto; */
    /* 가운데 정렬 */
    align-items: center;
    position: relative;
    top: 25px;
    left: 20px;
}
</style>