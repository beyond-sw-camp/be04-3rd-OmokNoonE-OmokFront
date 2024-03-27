<template>
    <div id="app">
        <HeaderAll />
        <router-view></router-view> <!-- 현재 라우트에 맞는 컴포넌트를 동적으로 표시 -->
        <FooterAll />
    </div>
</template>

<script setup>
import HeaderAll from './components/Header/HeaderAll.vue';
import FooterAll from './components/Footer/FooterAll.vue';
</script>

<style scoped>
/* 여기에 필요한 스타일을 추가하세요 */
</style>
