<template>
    <!-- group-5 -->
    <div class="group-5">
        <img class="group-5" src="@/assets/img/apply.svg">
        <div class="text-wrapper-10">지원하기</div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.group-5 {
    display: flex; /* 수평으로 정렬 */
    justify-content: center; /* 가운데 정렬 */
    position: relative;
    width: fit-content;
    align-items: center;
    height: 75px;
    cursor: pointer;
    margin: 40px 0; 
}

.text-wrapper-10 {
    position: absolute;
    width: fit-content;
    height: 30px;
    align-items: center;
    color: #000000;
    font-size: 26px;
    text-align: center;
    font-family: "Outfit", Helvetica;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    
}
</style>