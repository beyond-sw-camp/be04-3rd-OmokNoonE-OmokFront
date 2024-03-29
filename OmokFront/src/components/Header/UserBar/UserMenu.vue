<template>
    <div class="frame-4">
        <div class="frame-5">
            <div class="text-wrapper-3">닉네임표기</div>
            <img class="polygon" src="@/assets/img/polygon-user-menu.png" />
        </div>
        <div class="frame-6">
            <div class="text-wrapper-4">로그아웃</div>
            <img class="img-2" src="@/assets/img/sign-out-squre-1.svg" />
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>


@media screen and (max-width: 700px) {
.text-wrapper-4 {
    display: none !important;
}
}
@media screen and (max-width: 1250px) {
.frame-5 {
    display: none !important;
}
}



.frame-4 {
    display: inline-flex;
    align-items: flex-start;
    gap: 8px;
    position: relative;
    flex: 0 0 auto;
}

.frame-5 {
    display: flex;
    width: fit-content;
    height: fit-content;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 12px 16px;
    position: relative;
    background-color: #bad7e94c;
    border-radius: 28px;
}

.text-wrapper-3 {
    position: relative;
    width: fit-content;
    font-family: "Outfit", Helvetica;
    font-weight: 400;
    color: #000000;
    font-size: 14px;
    text-align: center;
    letter-spacing: 0;
    line-height: normal;
}

.polygon {
    position: relative;
    width: 6.94px;
    height: 4.14px;
}

.frame-6 {
    display: inline-flex;
    align-items: flex-start;
    width: fit-content;
    height: fit-content;
    gap: 10px;
    padding: 12px 16px;
    position: relative;
    flex: 0 0 auto;
    background-color: #bad7e9;
    border-radius: 28px;
}

.text-wrapper-4 {
    position: relative;
    width: fit-content;
    height: fit-content;
    margin-top: -1px;
    font-family: "Outfit", Helvetica;
    font-weight: 400;
    color: #000000;
    font-size: 14px;
    text-align: center;
    letter-spacing: 0;
    line-height: normal;
}

.img-2 {
    position: relative;
    width: 18px;
    height: 18px;
}
</style>