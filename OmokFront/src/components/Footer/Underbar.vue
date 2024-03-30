<template>
    <div class="under-bar">
        <div class="frame-wrapper">
            <div class="group-wrapper">
                <div class="group-4">
                    <div class="overlap-group-4">
                        <img class="line-2" src="@/assets/img/underbar-line.svg" />

                        <div class="element-group">
                            <img class="element" src="@/assets/img/omok-big.png" />
                            <img class="element-2" src="@/assets/img/omok-small.png" />
                            <img class="element-3" src="@/assets/img/omok-small.png" />
                        </div>
                        <p class="text-wrapper-15">Non Copyrighted © 2024 Design and upload by omoknoone</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.under-bar {
    position: relative;
    width: 100%;
    height: 74.91px;
}

.frame-wrapper {
    height: 75px;
}

.group-wrapper {
    display: inline-flex;
    align-items: flex-end;
    position: relative;
    width: 100%;

}

.group-4 {
    position: relative;
    width: 100%;
    height: 74.91px;
    margin-right: -2px;
}

.text-wrapper-15 {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    /* 가로 중앙 정렬을 위한 변형 */
    font-family: "Inter", Helvetica;
    font-weight: 400;
    color: #606466;
    font-size: 14px;
    text-align: center;
    letter-spacing: 0;
    line-height: normal;
}

.overlap-group-4 {
    position: absolute;
    width: 100%;
    height: 35px;
    top: 0;
    left: 0;
}

.line-2 {
    width: 100%;
    height: 1px;
    top: 34px;
    object-fit: cover;
    position: absolute;
    left: 0;
}

.element-group {
    display: flex;
    /* 요소들을 가로로 나열하기 위해 flexbox를 사용 */
    justify-content: flex-end;
    /* 요소들을 컨테이너의 오른쪽에 정렬 */
    align-items: flex-end;
    /* 요소들을 컨테이너의 아래쪽에 정렬 */

}

.element {
    width: 33px;
    height: 35px;
    top: 0;
    left: 1311px;
}

.element-2 {
    width: 24px;
    height: 25px;
    top: 10px;
    left: 1344px;
}

.element-3 {
    width: 24px;
    height: 25px;
    top: 10px;
    left: 1368px;
}
</style>