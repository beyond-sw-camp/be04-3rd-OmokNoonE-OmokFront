<template>
    <div class="SMP-content">
        <div class="ellipse"></div>
        <img class="image-3" src="@/assets/img/plus.svg">
    </div>
</template>

<script setup>

</script>

<style scoped>
.SMP-content {
    display: inline-flex;
    align-items: flex-start;
    gap: 10px;
    position: fixed;
    bottom: 30%;
    right: 10%;
}

.ellipse {
    position: relative;
    width: 72px;
    height: 73px;
    background-color: #b5d4e7;
    border-radius: 36px/36.5px;
}

.image-3 {
    position: absolute;
    width: 36px;
    height: 41px;
    top: 16px;
    left: 18px;
}
</style>