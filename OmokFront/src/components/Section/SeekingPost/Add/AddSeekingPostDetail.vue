<template>
        <div class="seeking-post-detail">
            <div class="div-2">
              <div class="text-wrapper-2">태그</div>
              <img class="img" src="@/assets/img/line-24.svg" />
              <div class="frame-2">
                <div class="status-value-danger"><div class="danger">Spring</div></div>
                <div class="status-value-danger"><div class="danger">Java</div></div>
              </div>
              <img class="close-round-duotone" src="@/assets/img/close-round-duotone-1.svg" />
            </div>
            <div class="div-2">
              <div class="text-wrapper-2">모집 팀</div>
              <img class="img" src="@/assets/img/line-24-4.svg" />
              <div class="div-wrapper">
                <div class="overlap-group-2">
                  <div class="danger-wrapper"><div class="danger-2">오목눈이</div></div>
                  <img class="mdi-menu-down" src="@/assets/img/mdi-menu-down.svg" />
                </div>
              </div>
            </div>
            <div class="div-2">
              <div class="text-wrapper-2">모집 인원</div>
              <img class="img" src="@/assets/img/line-24-4.svg" />
              <div class="div-wrapper">
                <div class="overlap-group-2">
                  <div class="danger-wrapper"><div class="danger-2">2</div></div>
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
                    <div class="danger-wrapper2"><div class="danger"></div></div>
                    <div class="text-wrapper-4">2024. 03. 19</div>
                    <img class="date-range" src="@/assets/img/date-range-2.svg" />
                  </div>
                </div>
                <div class="overlap-wrapper">
                  <div class="overlap-group-3">
                    <div class="danger-wrapper2"><div class="danger"></div></div>
                    <div class="text-wrapper-4">2024. 03. 27</div>
                    <img class="date-range" src="@/assets/img/date-range-2.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div class="div-2">
              <div class="text-wrapper-2">모집 상태</div>
              <img class="img" src="@/assets/img/line-24-4.svg" />
              <div class="status-value-danger-2"><div class="danger-3">모집중</div></div>
            </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
@media screen and (max-width: 1040px) {
  .seeking-post-detail {
    gap: 10px; /* 요소들 사이의 간격을 줄임 */
  }

  .div-2 {
    width: 90%; /* 화면 너비의 90%로 조정 */
    max-width: 600px; /* 최대 너비를 600px로 제한 */
  }

  .text-wrapper-2 {
    width: 30%; /* 화면 너비의 30%로 조정 */
    max-width: 100px; /* 최대 너비를 100px로 제한 */
  }

  .img {
  position: relative;
  width: 2px;
  height: 20px;
  margin-top: 3px; /* 이미지를 텍스트에 맞게 위치 조정 */
  margin-left: 10px; /* 이미지와 텍스트 사이 간격 조정 */
}

  .frame-2{
    max-width: 400px; /* 최대 너비를 400px로 제한 */
  }

  .group-2 {
    max-width: 400px; /* 최대 너비를 400px로 제한 */
  }

  .danger-wrapper,
  .overlap-group-2,
  .overlap-group-3,
  .overlap-wrapper {
    width: 100%; /* 화면 너비에 맞게 조정 */
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

.status-value-danger-2 {
  width: 91px;
  position: relative;
  background-color: #5bc065;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 2px 10px;
  border-radius: 25px;
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
}


</style>