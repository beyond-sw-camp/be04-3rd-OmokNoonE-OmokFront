<template>
    <div class="seeking-post-content">
            <div class="seeking-post-content-2">
              <div class="rectangle"></div>
              <div class="group-4">
                <div class="overlap-group-4"><div class="text-wrapper-5">어떤 팀원을 구하고 있나요?</div></div>
              </div>
            </div>
            <img class="writing-detail" src="@/assets/img/writing-detail.svg" />
          </div>
          <div class="button">
            <div class="group-5">
              <div class="overlap-group-5"><div class="text-wrapper-6">등록</div></div>
            </div>
          </div>   
</template>

<script setup>

</script>

<style scoped>
.seeking-post-content {
  align-items: flex-start;
  gap: 10px;
  display: inline-flex;
  flex-direction: column;
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
  width: 963px;
  height: 838px;
  margin-right: -2px;
}

.overlap-group-4 {
  position: relative;
  width: 961px;
  height: 838px;
  background-color: #ffffff;
  border: 1px solid;
  border-color: #a09f9f;
}

.text-wrapper-5 {
  position: absolute;
  width: 245px;
  top: 23px;
  left: 16px;
  font-family: "Outfit", Helvetica;
  font-weight: 400;
  color: #a0a0a0;
  font-size: 20px;
  letter-spacing: 0;
  line-height: normal;
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
  width: 235.97px;
  height: 64.51px;
}

.group-5 {
  width: 238px;
  height: 65px;
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
  width: 47px;
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