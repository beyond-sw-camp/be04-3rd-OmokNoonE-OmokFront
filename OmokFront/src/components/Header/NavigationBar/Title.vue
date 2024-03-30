<template>
    <img @click="goMain" class="image" src="@/assets/img/footer-title.png" alt="메인으로 가기" />
</template>

<script setup>
    import { useRouter } from "vue-router";

    const router = useRouter();

    function goMain() {
        router.push(`/main`);
    }
</script>

<style scoped>
    .image {
        position: relative;
        width: 131px;
        height: 58px;
        object-fit: cover;
        cursor: pointer;
    }
</style>