<template>
    <div class="postheader">
        <div class="postheader-upper">
            <div class="title-and-status">
                <p class="title">{{ headerProps.postHeaderProps.title }}</p>
                <div v-if="isSeeking == 1" class="status-seeking">
                    <div class="is-seeking">모집중</div>
                </div>
                <div v-if="isSeeking == 0" class="status-end">
                    <div class="is-seeking">종료</div>
                </div>
            </div>
            <div class="menu">
                <img v-if="isBookmarked" @click="toggleBookmark" class="group-3" src="@/assets/img/bookmark-selected.svg" />
                <img v-else @click="toggleBookmark" class="group-3" src="@/assets/img/bookmark-unselect.svg" />
                <!-- <img class="group-3" src="@/assets/img/bookmark-selected.svg" /> -->
                <img @mouseover="mouseOverOpacity" @mouseout="mouseOutOpacity" class="image-3" src="@/assets/img/more.svg" :style="{opacity: imageOpacity}" />
            </div>
        </div>
        <img class="image-4" src="@/assets/img/post-header-line.svg" />
        <div class="postheader-under">
            <div class="tech-skills">
                <div class="element" v-for="techStack in techStackList" :key="techStack">
                    <div class="danger">
                        {{ techStack.trim() }}
                    </div>
                </div>
            </div>
            <div class="info">
                <p class="info-text">작성일 24.03.18 | 수정일 {{ lastModifiedDate }} | 조회수 555</p>
                <div class="writer-info">
                    <img class="profile-img" src="@/assets/img/profile-default-thumbnail.svg" />
                    <div class="writer-nickname">{{ headerProps.postHeaderProps.nickname }}</div>
                </div>
            </div>
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
@media screen and (max-width: 1040px) {
.title {
  font-size: 25px !important;
}
}

.postheader {
  display: inline-flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  width: 80%;
  min-width: 700px;
  height: fit-content;
  align-items: center;
  gap: 0px;
}

.postheader-upper {
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: space-between; 
  width: 95%;
  margin: 1% 0px -15px 0px;
}

.title-and-status {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  position: relative;
  flex: 0 0 auto;
}

.title {
  position: relative;
  width: fit-content;
  font-family: "Outfit", Helvetica;
  font-weight: 400;
  color: #000000;
  font-size: 30px;
  letter-spacing: 0;
  line-height: normal;
}

.status-seeking {
  display: inline-flex;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 10px;
  padding: 4px 10px 2px;
  position: relative;
  flex: 0 0 auto;
  background-color: #5bc065;
  border-radius: 25px;
}

.status-end {
  display: inline-flex;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 10px;
  padding: 4px 10px 2px;
  position: relative;
  flex: 0 0 auto;
  background-color: #C24242;
  border-radius: 25px;
}

.is-seeking {
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-family: var(--base-body-bold-font-family);
  font-weight: var(--base-body-bold-font-weight);
  color: white;
  font-size: var(--base-body-bold-font-size);
  letter-spacing: var(--base-body-bold-letter-spacing);
  line-height: var(--base-body-bold-line-height);
  white-space: nowrap;
  font-style: var(--base-body-bold-font-style);
}

.menu {
  position: relative;
  width: fit-content;
  min-width: 63px;
  margin-left: 30px;
  align-items: center;
  justify-content: flex-end;
}

.group-3 {
  position: relative;
  flex: 1;
  flex-grow: 1;
  height: 30px;
  margin-right: 10px;
  cursor: pointer;
}

.image-3 {
  position: relative;
  flex: 0 0 auto;
  cursor: pointer;
}

.image-4 {
  position: relative;
  width: 98%;
  flex: 1;
  align-self: center;
  flex-grow: 1;
}

.postheader-under {
  display: inline-flex;
  justify-content: space-between; /* 좌우 정렬 */
  align-items: flex-start;
  width: 95%;
  margin-top: 10px;
  flex: 0 0 auto;
}

.tech-skills {
  display: inline-flex;
  align-items: flex-start;
  gap: 10px;
  position: relative;
  flex: 0 0 auto;
}

.element {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 2px 10px;
  position: relative;
  flex: 0 0 auto;
  background-color: #eeefef;
  border-radius: 25px;
  border: 1px solid;
  border-color: #a7a4a4;
  cursor: default;
}

.danger {
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-family: var(--base-body-bold-font-family);
  font-weight: var(--base-body-bold-font-weight);
  color: #918a8a;
  font-size: var(--base-body-bold-font-size);
  letter-spacing: var(--base-body-bold-letter-spacing);
  line-height: var(--base-body-bold-line-height);
  white-space: nowrap;
  font-style: var(--base-body-bold-font-style);
}

.info {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  flex: 0 0 auto;
}

.info-text {
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-family: "Outfit", Helvetica;
  font-weight: 400;
  color: #7a7a7a;
  font-size: 13px;
  letter-spacing: 0;
  line-height: normal;
}

.writer-info {
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 12px;
  position: relative;
  flex: 0 0 auto;
}

.profile-img {
  position: relative;
  flex: 1;
  flex-grow: 1;
  height: 36px;
  cursor: pointer;
}

.writer-nickname {
  position: relative;
  width: fit-content;
  font-family: "Outfit", Helvetica;
  font-weight: 400;
  color: #000000;
  font-size: 20px;
  text-align: right;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
}
</style>