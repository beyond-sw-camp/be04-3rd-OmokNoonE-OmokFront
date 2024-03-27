<template>
    <div class="category-outter">
        <Title/>
        <Category/>
    </div>
</template>

<script setup>
import Category from './Category.vue';
import Title from './Title.vue';
</script>

<style scoped>
.category-outter {
    display: inline-flex;
    align-items: center;
    gap: 39px;
    position: relative;
    flex: 0 0 auto;
}
</style>