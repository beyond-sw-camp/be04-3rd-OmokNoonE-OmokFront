<template>
    <!-- postheader -->
    <div class="postheader">
        <img class="image-3" src="@/assets/img/image-3.svg" />
        <img class="group-3" src="@/assets/img/group.svg" />
        <img class="image-4" src="@/assets/img/more.svg" />
        <div class="element">
            <div class="danger">Spring</div>
        </div>
        <div class="danger-wrapper">
            <div class="danger">Java</div>
        </div>
        <div class="group-4">
            <div class="text-wrapper-7">작성자닉넴</div>
            <img class="ellipse-4" src="@/assets/img/ellipse-583.svg" />
        </div>
        <p class="p">작성일 24.03.18 | 수정일 24.03.18 | 조회수 555</p>
        <div class="frame-8">
            <p class="text-wrapper-8">[팀 오목눈이] MSA 기반 프로젝트 팀원 모집</p>
            <div class="danger-wrapper-2">
                <div class="danger-2">모집중</div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.postheader {
    position: relative;
    width: 1063px;
    height: 128px;
    margin-right: -2px;
}

.image-3 {
    position: absolute;
    width: 1061px;
    height: 2px;
    top: 51px;
    left: 0;
}

.group-3 {
    position: absolute;
    width: 30px;
    height: 30px;
    top: 12px;
    left: 984px;
}

.image-4 {
    position: absolute;
    width: 23px;
    height: 25px;
    top: 14px;
    left: 1031px;
}

.element {
    display: flex;
    width: auto;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 2px 10px;
    position: absolute;
    top: 64px;
    left: 19px;
    background-color: #eeefef;
    border-radius: 25px;
    border: 1px solid;
    border-color: #a7a4a4;
}

.danger {
    position: relative;
    width: fit-content;
    margin-top: -1px;
    font-family: var(--base-body-bold-font-family);
    font-weight: var(--base-body-bold-font-weight);
    color: #918a8a;
    font-size: 14px;
    letter-spacing: 0px;
    line-height: 22px;
    white-space: nowrap;
    font-style: normal;
}

.danger-wrapper {
    display: flex;
    width: auto;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 2px 10px;
    position: absolute;
    top: 64px;
    left: 87px;
    background-color: #eeefef;
    border-radius: 25px;
    border: 1px solid;
    border-color: #a7a4a4;
}

.group-4 {
    position: relative;
    width: 180px;
    height: 36px;
    top: 92px;
    left: 910px;
}

.text-wrapper-7 {
    position: absolute;
    top: 5px;
    left: 48px;
    color: #000000;
    font-size: 20px;
    font-family: "Outfit", Helvetica;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
}

.ellipse-4 {
    position: absolute;
    width: 36px;
    height: 36px;
    top: 0;
    left: 0;
}

.p {
    position: relative;
    width: fit-content;
    top: 20px;
    left: 785px;
    color: #7a7a7a;
    font-size: 13px;
    font-family: "Outfit", Helvetica;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
}

.frame-8 {
    display: flex;
    width: auto;
    align-items: center;
    position: absolute;
    top: 0;
    left: 19px;
    align-items: baseline;
}

.text-wrapper-8 {
    position: relative;
    width: 583px;
    height: 47px;
    margin-top: -1px;
    font-family: "Outfit", Helvetica;
    font-weight: 400;
    color: #000000;
    font-size: 30px;
    letter-spacing: 0;
    line-height: normal;
}

.danger-wrapper-2 {
    display: flex;
    width: auto;
    height: 28px;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 2px 13px;
    position: relative;
    background-color: #5bc065;
    border-radius: 25px;
    left: 10px;
}

.danger-2 {
    position: relative;
    width: fit-content;
    font-family: var(--base-body-bold-font-family);
    font-weight: var(--base-body-bold-font-weight);
    color: white;
    font-size: 14px;
    letter-spacing: 0px;
    line-height: 22px;
    white-space: nowrap;
    font-style: normal;
}
</style>