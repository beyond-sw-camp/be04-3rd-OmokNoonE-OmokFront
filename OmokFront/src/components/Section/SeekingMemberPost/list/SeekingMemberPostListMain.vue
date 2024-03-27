<template>
    <!-- section -->
    <div class="section">
        <SessionHeader />
        <SessionBody />
        <SessionContent />
    </div>
</template>

<script setup>
import SessionHeader from './SessionHeader/SessionHeaderDetail.vue';
import SessionBody from './SessionBody/SessionBody.vue';
import SessionContent from './SessionContent/SessionContent.vue';
</script>

<style scoped>
.section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1px;
    position: relative;
    flex: 1;
    align-self: stretch;
    width: 100%;
    flex-grow: 1;
    min-height: 700px;
}
</style>