<template>
  <div class="seeking-post-content">
    <div class="seeking-post-content-2">
      <div class="rectangle"></div>
      <div class="group-4">
        <div class="overlap-group-4">
          <textarea placeholder="어떤 팀원을 구하고 있나요?" class="text-wrapper-5"></textarea>
        </div>
      </div>
    </div>
    <img class="writing-detail" src="@/assets/img/writing-detail.svg" />
  </div>
  <div class="button">
    <div class="group-5">
      <div class="overlap-group-5">
        <div class="text-wrapper-6">등록</div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
@media screen and (max-width: 1040px) {
  .rectangle {
    width: 90%;
    /* 화면 너비의 90%로 조정 */
    max-width: 600px;
    /* 최대 너비를 600px로 제한 */
  }

  .group-4 {
    width: 90%;
    /* 화면 너비의 90%로 조정 */
    max-width: 600px;
    /* 최대 너비를 600px로 제한 */
    height: auto;
    /* 높이를 자동으로 조정하여 내용에 맞춤 */
  }

  .writing-detail {
    width: 80%;
    /* 화면 너비의 80%로 조정 */
    max-width: 319px;
    /* 최대 너비를 319px로 제한 */
  }

  .group-5 {
    width: 90%;
    /* 화면 너비의 90%로 조정 */
    max-width: 236px;
    /* 최대 너비를 236px로 제한 */
  }

  .overlap-group-5 {
    width: 100%;
    /* 화면 너비에 맞게 조정 */
  }

  .text-wrapper-6 {
    width: 80%;
    /* 화면 너비의 80%로 조정 */
    font-size: 18px;
    /* 폰트 크기를 줄임 */
  }
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
}
</style>