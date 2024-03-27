<template>
    <div class="frame-8">
        <LeftContainer />
        <RightContainer />
    </div>
</template>

<script setup>
import LeftContainer from './LeftContainer.vue';
import RightContainer from './RightContainer.vue';

</script>

<style scoped>

@media screen and (max-width: 700px) {
.frame-8 {
    padding: 0px 0px 0px 0px !important;
}
}

.frame-8 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 5% 0px 5%;
    position: relative;
    align-self: stretch;
    width: 90%;
    flex: 0 0 auto;
}
</style>