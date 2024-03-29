<script setup>
import HeaderAll from './views/HeaderView.vue';
import FooterAll from './views/FooterView.vue';

import { RouterView } from 'vue-router';
</script>

<template>
    <HeaderAll/>
    <RouterView/>
    <FooterAll/>
</template>

<style scoped>

</style>
