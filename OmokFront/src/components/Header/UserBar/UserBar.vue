<template>
    <div class="frame-2">
        <UserQuickMenu />
        <UserMenu />
        <!-- <GuestMenu /> -->
    </div>
</template>

<script setup>
import UserMenu from './UserMenu.vue';
import UserQuickMenu from './UserQuickMenu.vue';
import GuestMenu from './GuestMenu.vue';
</script>

<style scoped>
.frame-2 {
    display: inline-flex;
    align-items: center;
    gap: 37px;
    position: relative;
    justify-content: flex-end;
    /* 요소들을 컨테이너의 오른쪽에 정렬 */
    flex: 0 0 auto;
}
</style>