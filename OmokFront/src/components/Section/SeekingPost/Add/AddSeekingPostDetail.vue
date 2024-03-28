<template>
  <div class="seeking-post-header">
    <div class="seeking-header">
      <div class="text-wrapper">모집글 작성</div>
      <div class="group">
        <div class="overlap-group-wrapper">
          <div class="overlap-group">
            <textarea class="div" placeholder="제목을 입력하세요." v-model="title"></textarea>
          </div>
        </div>
      </div>
    </div>
    <hr width="100%" color="#d9d9d9" />
  </div>
  <div class="seeking-post-detail">
    <div class="div-2">
      <div class="text-wrapper-2">태그</div>
      <img class="img" src="@/assets/img/line-24.svg" />
      <div class="frame-2">
        <div @click="toggleTag(tag.name)" v-for="tag in tags" :key="tag.id">
          <div v-if="!tag.isSelected" class="status-value-danger">
            <div class="danger">{{ tag.name }}</div>
          </div>
          <div v-else class="status-value-danger-selected">
            <div class="danger-selected">{{ tag.name }}</div>
          </div>
        </div>
      </div>
      <img class="close-round-duotone" src="@/assets/img/close-round-duotone-1.svg" />
    </div>
    <div class="div-2">
      <div class="text-wrapper-2">모집 팀</div>
      <img class="img" src="@/assets/img/line-24-4.svg" />
      <div class="div-wrapper">
        <div class="overlap-group-2">
          <select class="select-team" v-model="selectedTeam" @click="selectTeam">
            <option v-for="projectTeam in projectTeamList" :value="projectTeam" :key="projectTeam.id">{{ projectTeam }}
            </option>
          </select>
          <img class="mdi-menu-down" src="@/assets/img/mdi-menu-down.svg" />
        </div>
      </div>
    </div>
    <div class="div-2">
      <div class="text-wrapper-2">모집 인원</div>
      <img class="img" src="@/assets/img/line-24-4.svg" />
      <div class="div-wrapper">
        <div class="overlap-group-2">
          <!-- <div class="danger-wrapper">
            <div class="danger-2">2</div>
          </div> -->
          <select class="select-number" v-model="currentNumber" @click="selectTeam">
            <option v-for="number in seekingNumbers" :value="number" :key="number.id">{{ number }}</option>
          </select>
          <img class="mdi-menu-down" src="@/assets/img/mdi-menu-down-1.svg" />
        </div>
      </div>
    </div>
    <div class="div-2">
      <div class="text-wrapper-2">모집 기간</div>
      <img class="img" src="@/assets/img/line-24-4.svg" />
      <div class="group-2">
        <div class="text-wrapper-3">~</div>
        <div class="group-3">
          <div class="overlap-group-3">
            <div class="danger-wrapper2">
              <div class="danger"></div>
            </div>
            <div class="text-wrapper-4">2024. 03. 19</div>
            <img class="date-range" src="@/assets/img/date-range-2.svg" />
          </div>
        </div>
        <div class="overlap-wrapper">
          <div class="overlap-group-3">
            <div class="danger-wrapper2">
              <div class="danger"></div>
            </div>
            <div class="text-wrapper-4">2024. 03. 29</div>
            <img class="date-range" src="@/assets/img/date-range-2.svg" />
          </div>
        </div>
      </div>
    </div>
    <div class="div-2">
      <div class="text-wrapper-2">모집 상태</div>
      <img class="img" src="@/assets/img/line-24-4.svg" />
      <div v-if="isSeeking" class="status-value-danger-seeking" @click="toggleSeeking">
        <div class="danger-3">모집중</div>
      </div>
      <div v-else class="status-value-danger-end" @click="toggleSeeking">
        <div class="danger-3">종료</div>
      </div>
    </div>
  </div>
  <div class="seeking-post-content">
    <div class="seeking-post-content-2">
      <div class="rectangle"></div>
      <div class="group-4">
        <div class="overlap-group-4">
          <textarea placeholder="어떤 팀원을 구하고 있나요?" class="text-wrapper-5" v-model="content"></textarea>
        </div>
      </div>
    </div>
    <img class="writing-detail" src="@/assets/img/writing-detail.svg" />
  </div>
  <div class="button">
    <div class="group-5">
      <!-- <div class="overlap-group-5" @click="emit(addPost)" > -->
      <div class="overlap-group-5" @click="addNewPost">
        <div class="text-wrapper-6" @mouseover="mouseoverHandler" @mouseout="mouseoutHandler"
          :style="{ color: fontColor }">등록</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref } from 'vue';
import { useRouter } from "vue-router";

const router = useRouter();

/* 제목 */
const title = ref('');

/* 태그 */
const tags = ref([
  { name: 'Spring', isSelected: false },
  { name: 'Vue', isSelected: false },
  { name: 'Java', isSelected: false },
  { name: 'React', isSelected: false },
  { name: 'JavaScript', isSelected: false },
  { name: 'mariaDB', isSelected: false },
  { name: 'Oracle', isSelected: false },
]);
const selectedTags = ref([]);

function toggleTag(tagName) {
  for (let i = 0; i < tags.value.length; i++) {
    if (tags.value[i].name == tagName) {
      tags.value[i].isSelected = !tags.value[i].isSelected;
      if (tags.value[i].isSelected) {
        selectedTags.value.push(tags.value[i].name);
      } else {
        for (let j = 0; j < selectedTags.value.length; j++) {
          if (selectedTags.value[i] === tagName) {
            selectedTags.value.splice(i, 1);
          }
        }
      }
    }
  }
}

/* 모집 팀 */
const projectTeamList = ref(['오목눈이', 'if(1=1)', 'this.e조', '새싹쓰리', '불4조', '6CanDoIt']);
const selectedTeam = ref('오목눈이')

/* 모집 인원 */
const seekingNumbers = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
const currentNumber = ref(2);

/* 모집 기간 - 보류 */

/* 모집 상태 */
const isSeeking = ref(true);

function toggleSeeking() {
  isSeeking.value = !isSeeking.value;
}

/* 날짜 */
let today = new Date();

let todayFormatted = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();

/* 내용 */
const content = ref('');

/* 등록 버튼 */
const fontColor = ref('#ffffff');
function mouseoverHandler() {
  fontColor.value = '#000000';
}

function mouseoutHandler() {
  fontColor.value = '#ffffff';
}


/* POST 요청 */
const emit = defineEmits(['newPost']);

const addPost = ref({});

function addNewPost() {
  let techStackStrings = selectedTags.value.join(', ');

  addPost.value = {
    ID: 99,
    TITLE: title.value,
    CONTENT: content.value,
    TECH_STACK: techStackStrings,
    IS_SEEKING: isSeeking.value,
    NICKNAME: "오모기",
    LAST_MODIFIED_DATE: todayFormatted
  };

  console.log("하위 컴포넌트",addPost.value);
  emit('newPost', addPost);

  router.push(`/seekingpost`);
}


</script>

<style scoped>
@media screen and (max-width: 1040px) {
  .seeking-post-detail {
    gap: 10px;
    /* 요소들 사이의 간격을 줄임 */
  }

  .div-2 {
    width: 90%;
    /* 화면 너비의 90%로 조정 */
    max-width: 600px;
    /* 최대 너비를 600px로 제한 */
  }

  .text-wrapper-2 {
    width: 30%;
    /* 화면 너비의 30%로 조정 */
    max-width: 100px;
    /* 최대 너비를 100px로 제한 */
  }

  .img {
    position: relative;
    width: 2px;
    height: 20px;
    margin-top: 3px;
    /* 이미지를 텍스트에 맞게 위치 조정 */
    margin-left: 10px;
    /* 이미지와 텍스트 사이 간격 조정 */
  }

  .frame-2 {
    max-width: 400px;
    /* 최대 너비를 400px로 제한 */
  }

  .group-2 {
    max-width: 400px;
    /* 최대 너비를 400px로 제한 */
  }

  .danger-wrapper,
  .overlap-group-2,
  .overlap-group-3,
  .overlap-wrapper {
    width: 100%;
    /* 화면 너비에 맞게 조정 */
  }
}


.seeking-post-detail {
  align-items: flex-start;
  gap: 15px;
  display: inline-flex;
  flex-direction: column;
  position: relative;
  flex: 0 0 auto;
}

.div-2 {
  display: flex;
  width: 961px;
  align-items: center;
  gap: 24px;
  position: relative;
  flex: 0 0 auto;
}

.text-wrapper-2 {
  position: relative;
  width: 107px;
  font-family: "Roboto", Helvetica;
  font-weight: 500;
  color: #000000;
  font-size: 14px;
  text-align: right;
  letter-spacing: 0;
  line-height: 22px;
}

.img {
  position: relative;
  width: 2px;
  height: 20px;
}

.frame-2 {
  align-items: flex-start;
  gap: 6px;
  display: inline-flex;
  position: relative;
  flex: 0 0 auto;
}

.status-value-danger {
  display: flex;
  width: 61.75px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 2px 10px;
  position: relative;
  background-color: #eeefef;
  border-radius: 25px;
  border: 1px solid;
  border-color: #a7a4a4;
  cursor: pointer;
}

.status-value-danger-selected {
  display: flex;
  width: 61.75px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 2px 10px;
  position: relative;
  background-color: #BAD7E9;
  border-radius: 25px;
  border: 1px solid;
  border-color: #a7a4a4;
  cursor: pointer;
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
  cursor: pointer;
}

.danger-selected {
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-family: var(--base-body-bold-font-family);
  font-weight: var(--base-body-bold-font-weight);
  color: #ffffff;
  font-size: var(--base-body-bold-font-size);
  letter-spacing: var(--base-body-bold-letter-spacing);
  line-height: var(--base-body-bold-line-height);
  white-space: nowrap;
  font-style: var(--base-body-bold-font-style);
  cursor: pointer;
}

.close-round-duotone {
  position: relative;
  width: 33.94px;
  height: 33.94px;
}

.div-wrapper {
  position: relative;
  width: 142px;
  height: 26px;
}

.overlap-group-2 {
  position: relative;
  height: 26px;
  border-radius: 25px;
}

.danger-wrapper {
  width: 142px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #eeefef;
  border: 1px solid;
  border-color: #a7a4a4;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 2px 10px;
  border-radius: 25px;
}

.danger-wrapper2 {
  width: 142px;
  height: 26px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #eeefef;
  border: 1px solid;
  border-color: #a7a4a4;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 2px 10px;
  border-radius: 25px;
}

.danger-2 {
  color: #4e4d4d;
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-family: var(--base-body-bold-font-family);
  font-weight: var(--base-body-bold-font-weight);
  font-size: var(--base-body-bold-font-size);
  letter-spacing: var(--base-body-bold-letter-spacing);
  line-height: var(--base-body-bold-line-height);
  white-space: nowrap;
  font-style: var(--base-body-bold-font-style);
}

.mdi-menu-down {
  position: absolute;
  width: 21px;
  height: 24px;
  top: 1px;
  left: 113px;
}

.group-2 {
  position: relative;
  width: 317px;
  height: 26px;
}

.text-wrapper-3 {
  position: absolute;
  top: 3px;
  left: 153px;
  font-family: var(--base-body-bold-font-family);
  font-weight: var(--base-body-bold-font-weight);
  color: #918a8a;
  font-size: var(--base-body-bold-font-size);
  letter-spacing: var(--base-body-bold-letter-spacing);
  line-height: var(--base-body-bold-line-height);
  white-space: nowrap;
  font-style: var(--base-body-bold-font-style);
}

.group-3 {
  position: absolute;
  width: 144px;
  height: 26px;
  top: 0;
  left: 0;
}

.overlap-group-3 {
  position: relative;
  width: 142px;
  height: 26px;
  border-radius: 25px;
}

.text-wrapper-4 {
  position: absolute;
  top: 2px;
  left: 22px;
  font-family: var(--base-body-bold-font-family);
  font-weight: var(--base-body-bold-font-weight);
  color: #918a8a;
  font-size: var(--base-body-bold-font-size);
  letter-spacing: var(--base-body-bold-letter-spacing);
  line-height: var(--base-body-bold-line-height);
  white-space: nowrap;
  font-style: var(--base-body-bold-font-style);
}

.date-range {
  position: absolute;
  width: 19px;
  height: 19px;
  top: 3px;
  left: 114px;
}

.overlap-wrapper {
  position: absolute;
  width: 144px;
  height: 26px;
  top: 0;
  left: 173px;
}

.status-value-danger-seeking {
  width: 91px;
  position: relative;
  background-color: #5bc065;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 2px 10px;
  border-radius: 25px;
  cursor: pointer;
}

.status-value-danger-end {
  width: 91px;
  position: relative;
  background-color: #ff5252;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 2px 10px;
  border-radius: 25px;
  cursor: pointer;
}

.danger-3 {
  color: var(--lightwhite);
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-family: var(--base-body-bold-font-family);
  font-weight: var(--base-body-bold-font-weight);
  font-size: var(--base-body-bold-font-size);
  letter-spacing: var(--base-body-bold-letter-spacing);
  line-height: var(--base-body-bold-line-height);
  white-space: nowrap;
  font-style: var(--base-body-bold-font-style);
  color: white;
  cursor: pointer;
}

.select-team {
  width: 142px;
  height: 28px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #eeefef;
  border: 1px solid;
  border-color: #a7a4a4;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 2px 10px;
  border-radius: 25px;
  appearance: none;
  color: #918a8a;
}

.select-number {
  width: 142px;
  height: 28px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #eeefef;
  border: 1px solid;
  border-color: #a7a4a4;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 2px 10px;
  border-radius: 25px;
  appearance: none;
  color: #918a8a;
  text-align: center;
}


.seeking-post-content {
  align-items: flex-start;
  gap: 10px;
  display: inline-flex;
  flex-direction: column;
  width: fit-content;
  position: relative;
  flex: 0 0 auto;
}

.seeking-post-content-2 {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  flex: 0 0 auto;
}

.rectangle {
  position: relative;
  width: 961px;
  height: 63px;
  background-color: #fafafa;
  border: 1px solid;
  border-color: #acacac;
}

.group-4 {
  position: relative;
  width: 961px;
  height: 838px;
  margin-right: -2px;
  border: 1px solid;
  border-color: #acacac;
}

.overlap-group-4 {
  position: relative;
  width: fit-content;
  height: fit-content;
  background-color: #ffffff;
  border: 1px solid;
  border-color: #a09f9f;
  flex: 0, 0, auto;
}


.text-wrapper-5 {
  position: absolute;
  width: 300px;
  top: 23px;
  left: 16px;
  font-family: "Outfit", Helvetica;
  font-weight: 400;
  font-size: 20px;
  letter-spacing: 0;
  line-height: normal;
  width: 920px;
  height: 790px;
  border: none;
  color: black;
  resize: none;
}

.writing-detail {
  position: absolute;
  width: 319px;
  height: 31px;
  top: 15px;
  left: 27px;
}

.button {
  position: relative;
  width: fit-content;
  height: fit-content;
}

.group-5 {
  width: fit-content;
  height: fit-content;
}

.overlap-group-5 {
  position: relative;
  width: 236px;
  height: 65px;
  background-image: url(@/assets//img/rectangle-4248.svg);
  background-size: 100% 100%;
  cursor: pointer;
}

.text-wrapper-6 {
  position: absolute;
  width: fit-content;
  top: 16px;
  left: 94px;
  font-family: "Outfit", Helvetica;
  font-weight: 400;
  color: #000000;
  font-size: 24px;
  letter-spacing: 0;
  line-height: normal;
  cursor: pointer;
}


.seeking-post-header {
  align-items: center;
  display: inline-flex;
  widows: fit-content;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 25px;
  position: relative;
}

.seeking-post-header .seeking-header {
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 33px;
  position: relative;
}

.seeking-post-header .text-wrapper {
  color: #000000;
  font-family: "Outfit", Helvetica;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  width: fit-content;
}

.seeking-post-header .group {
  height: 51px;
  position: relative;
  width: 961px;
}

.seeking-post-header .overlap-group-wrapper {
  height: 51px;
  width: 963px;
}

.seeking-post-header .overlap-group {
  background-color: #ffffff;
  border: 1px solid;
  border-color: #a09f9f;
  height: 51px;
  position: relative;
  width: 961px;
}

.seeking-post-header .div {
  color: #000000;
  font-family: "Outfit", Helvetica;
  font-size: 24px;
  font-weight: 400;
  left: 11px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 8px;
  white-space: nowrap;
  width: 930px;
  height: 32px;
  border-width: 0px;
  resize: none;
}

.seeking-post-header .line {
  height: 2px;
  position: relative;
  width: 1061px;
}
</style>