<template>
    <footer class="footer-all">
        <FooterUnion />
    </footer>
</template>

<script setup>
import FooterUnion from '@/components/Footer/FooterUnion.vue';
</script>

<style scoped>



@media screen and (max-width: 700px) {
.footer-All{
    padding: 0px 10px 0px 10px !important;
}
}

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
    min-width: 600px;
    background-color: #bad7e9;
}
</style>