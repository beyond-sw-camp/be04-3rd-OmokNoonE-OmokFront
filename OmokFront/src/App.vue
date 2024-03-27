<script setup>
import HeaderAll from './components/Header/HeaderAll.vue';
import FooterAll from './components/Footer/FooterAll.vue';
import SeekingMemberPostDetailAll from './components/Section/SeekingMemberPost/Detail/SeekingMemberPostDetailAll.vue';

import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <HeaderAll/>
    <RouterView/>
    <FooterAll/>
</template>

<style scoped>

</style>
