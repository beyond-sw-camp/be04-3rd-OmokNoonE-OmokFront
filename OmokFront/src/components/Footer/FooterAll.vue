<template>
    <div class="footer-all">
        <FooterMain />
    </div>
</template>

<script setup>
import FooterMain from './FooterMain/FooterMain.vue';
</script>

<style scoped>
.footer-all {
    bottom: 0;
    /* 하단에 고정 */
    left: 0;
    /* 왼쪽에 고정 */
    width: 100%;
    /* 너비를 화면 전체로 설정 */
    position: relative;
    align-self: stretch;
    width: 100%;
    height: 243px;
    background-color: #bad7e9;
}
</style>