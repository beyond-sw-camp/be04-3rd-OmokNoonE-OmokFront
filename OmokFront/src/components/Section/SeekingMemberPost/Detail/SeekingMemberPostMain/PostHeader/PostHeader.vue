<template>
    <!-- postheader -->
    <div class="postheader">
        <img class="image-3" src="@/assets/img/post-header-line.svg" />
        <img v-if="isBookmarked" @click="toggleBookmark" class="group-3" src="@/assets/img/bookmark-selected.svg" />
        <img v-else @click="toggleBookmark" class="group-3" src="@/assets/img/bookmark-unselect.svg" />
        
        <img @mouseover="mouseOverOpacity" @mouseout="mouseOutOpacity" class="image-4" src="@/assets/img/more.svg" :style="{opacity: imageOpacity}"/>

        <div class="frame-8">
            <p class="text-wrapper-8">{{ headerProps.postHeaderProps.title }}</p>
            <div v-if="isSeeking == 1" class="status-seeking">
                <div class="danger-2">
                    모집중
                </div>
            </div>
            <div v-if="isSeeking == 0" class="status-end">
                <div class="danger-2">
                    모집완료
                </div>
            </div>
        </div>
    </div>
    <div class="element_wrapper">
        <div class="element" v-for="techStack in techStackList" :key="techStack">
            <div class="danger">
                {{ techStack.trim() }}
            </div>
        </div>
        <div class="group-4">
            <!-- <p class="p">작성일 24.03.18 | 수정일 24.03.18 | 조회수 555</p> -->
            <p class="p">작성일 24.03.18 | 수정일 {{ lastModifiedDate }} | 조회수 555</p>
            <div class="text-wrapper-7">{{headerProps.postHeaderProps.nickname}}</div>
            <img class="ellipse-4" src="@/assets/img/profile-default-thumbnail.svg" />
        </div>
    </div>
</template>

<script setup>
import {ref, watch} from 'vue';

const headerProps = defineProps({
    postHeaderProps: []
});

const techStackList = ref([]);
const isSeeking = ref();
const lastModifiedDate = ref('');

watch(headerProps, (newValue, oldValue) => {
    techStackList.value = headerProps.postHeaderProps.techStack.split(',');
    isSeeking.value = headerProps.postHeaderProps.isSeeking;
    lastModifiedDate.value = headerProps.postHeaderProps.lastModifiedDate.replaceAll('-', '.').substr(2);

    console.log("lastModifiedDate :", lastModifiedDate.value);
});

// console.log(headerProps.postHeaderProps.title);
// console.log(headerProps.postHeaderProps.techStack);
// console.log(headerProps.postHeaderProps.nickname);
// console.log(headerProps.postHeaderProps.lastModifiedDate);

// const isBookmarked = ref(북마크 여부를 데이터로 넘겨 받아야 함);
const isBookmarked = ref(false);
const imageOpacity = ref(1.0);

function toggleBookmark() {
    isBookmarked.value = !isBookmarked.value;
}

function mouseOverOpacity() {
    imageOpacity.value = 0.5;
}

function mouseOutOpacity() {
    imageOpacity.value = 1.0;
}
</script>

<style scoped>
.postheader {
    position: relative;
    width: 1063px;
    height: fit-content;
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
    cursor: pointer;
}

.image-4 {
    position: absolute;
    width: 23px;
    height: 25px;
    top: 14px;
    left: 1031px;
    cursor: pointer;
}

.element {
    position: relative;
    display: inline-block;
    width: auto;
    align-items: center;
    justify-content: center;
    /* gap: 10px; */
    padding: 2px 10px;
    left: 10px;
    background-color: #eeefef;
    border-radius: 25px;
    border: 1px solid;
    border-color: #a7a4a4;
    margin-left: 8px;
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
    cursor: default;
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
    cursor: pointer;
}

.ellipse-4 {
    position: absolute;
    width: 36px;
    height: 36px;
    top: 0;
    left: 0;
    cursor: pointer;
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
    height: fit-content;
    margin-top: -1px;
    font-family: "Outfit", Helvetica;
    font-weight: 400;
    color: #000000;
    font-size: 30px;
    letter-spacing: 0;
    line-height: normal;
}

.status-seeking {
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

.status-end {
    display: flex;
    width: auto;
    height: 28px;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 2px 13px;
    position: relative;
    background-color: #2E74DD;
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

.element_wrapper {
    position: relative;
    top: 64px;
    width: 300px;
    height: 40px;
}
</style>