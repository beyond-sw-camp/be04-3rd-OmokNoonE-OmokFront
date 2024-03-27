<template>
    <div class="SMP-header">
        <div class="text-wrapper-7">어떤 팀을 찾고 있나요?</div>
        <div class="view-2">
            <img class="img"  src="@/assets/img/filter.svg">
            <div class="text-wrapper-8">필터 설정</div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.SMP-header {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 35px 62px 10px;
    position: relative;
    align-self: stretch;
    width: 100%;
    flex: 0 0 auto;
}

.text-wrapper-7 {
    position: relative;
    width: fit-content;
    color: #000000;
    font-size: 24px;
    font-family: "Outfit", Helvetica;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
}

.view-2 {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    padding: 8px 18px;
    position: relative;
    flex: 0 0 auto;
    background-color: #bad7e9;
    border-radius: 20px;
}

.text-wrapper-8 {
    position: relative;
    width: fit-content;
    color: #000000;
    font-size: 16px;
    font-family: "Outfit", Helvetica;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
}
</style>