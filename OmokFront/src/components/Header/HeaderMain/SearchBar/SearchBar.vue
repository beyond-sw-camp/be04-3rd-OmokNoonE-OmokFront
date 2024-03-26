<template>
    <div class="view-wrapper">
        <div class="view">
            <div class="overlap-2">
                <div class="overlap-group-wrapper">
                    <div class="overlap-group-2">
                        <img class="image-2" src="@/assets/img/image.svg" />
                        <div class="rectangle-2">
                        </div>
                        <div class="rectangle-3"></div>
                    </div>
                </div>
                <div id="search" class="group-3">
                    <div class="text-wrapper-5">
                        <input type="text" placeholder="내용을 입력하세요" v-model.trim="contents">
                    </div>
                    <div class="text-wrapper-6">카테고리</div>
                    <img class="polygon-2" src="@/assets/img/polygon-1-1.svg" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
@media screen and (max-width: 660px) {
.view-wrapper{
    margin-right: 10%;
    margin-left: 5%;
}
}
.view-wrapper {
    position: inline-flex;
    align-items: flex-start;
    width: 298px;
    height: 37px;
    top: 10px;
    left: 810px;
}

.view {
    height: 37px;
}

.overlap-2 {
    position: relative;
    width: 320px;
    height: 37px;
}

.overlap-group-wrapper {
    position: absolute;
    width: 320px;
    height: 37px;
    top: 0;
    left: 0;
}

.overlap-group-2 {
    position: relative;
    height: 37px;
}

.rectangle-2 {
    width: 221px;
    height: 37px;
    left: 99px;
    background-color: #bad7e9;
    border-radius: 0px 8px 8px 0px;
    opacity: 0.2;
    position: absolute;
    top: 0;
}

.rectangle-3 {
    width: 99px;
    height: 37px;
    left: 0;
    background-color: #bad7e9;
    border-radius: 0px 8px 8px 0px;
    transform: rotate(-180deg);
    position: absolute;
    top: 0;
}

.image-2 {
    justify-content: flex-end;
    /* 요소들을 컨테이너의 오른쪽에 정렬 */
    position: relative;
    left: 90%;
    width: 20px;
    height: 20px;
    top: 8px;
    color: black;
}

.group-3 {
    position: absolute;
    width: 273px;
    height: 18px;
    top: 10px;
    left: 15px;
}

.text-wrapper-5 {
    position: absolute;
    width: 168px;
    top: 0;
    left: 101px;
    opacity: 0.3;
    font-family: "Outfit", Helvetica;
    font-weight: 400;
    color: #1e1e1e;
    font-size: 14px;
    letter-spacing: 0;
    line-height: normal;
}

.text-wrapper-6 {
    position: absolute;
    top: 0;
    left: 0;
    font-family: "Outfit", Helvetica;
    font-weight: 400;
    color: #000000;
    font-size: 14px;
    letter-spacing: 0;
    line-height: normal;
}

.polygon-2 {
    position: absolute;
    width: 7px;
    height: 4px;
    top: 9px;
    left: 68px;
}
</style>