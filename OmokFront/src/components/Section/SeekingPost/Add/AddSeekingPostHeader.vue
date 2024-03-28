<template>
  <div class="seeking-post-header">
    <div class="seeking-header">
      <div class="text-wrapper">모집글 작성</div>
      <div class="group">
        <div class="overlap-group-wrapper">
          <div class="overlap-group">
            <textarea class="div" placeholder="제목을 입력하세요."></textarea>
          </div>
        </div>
      </div>
    </div>
    <hr width="100%" color="#d9d9d9" />
  </div>
</template>

<script>
export default {
  name: "SeekingPostHeader",
};
</script>


<style>
@media screen and (max-width: 1040px) {

  .seeking-post-header .group,
  .seeking-post-header .overlap-group,
  .seeking-post-header .overlap-group-wrapper {
    width: 90%;
    /* 화면 너비의 90%로 조정 */
    max-width: 600px;
    /* 최대 너비를 600px로 제한 */
  }

  .seeking-post-header .text-wrapper,
  .seeking-post-header .div {
    width: 100%;
    /* 화면 너비에 맞게 조정 */
    max-width: 600px;
    /* 최대 너비를 600px로 제한 */
  }

  .seeking-post-header .line {
    width: 100%;
    /* 화면 너비에 맞게 조정 */
    max-width: 800px;
    /* 최대 너비를 800px로 제한 */
  }
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