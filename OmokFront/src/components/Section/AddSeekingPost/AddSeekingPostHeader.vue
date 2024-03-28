<template>
    <div class="seeking-post-header">
      <div class="seeking-header">
        <div class="text-wrapper">모집글 작성</div>
        <div class="group">
          <div class="overlap-group-wrapper">
            <div class="overlap-group">
              <div class="div">제목을 입력하세요.</div>
            </div>
          </div>
        </div>
      </div>
      <hr width="100%" color="#d9d9d9"/>
    </div>
  </template>
  
  <script>
  export default {
    name: "SeekingPostHeader",
  };
  </script>
  
  
  <style>
   .seeking-post-header {
    align-items: center;
    display: inline-flex;
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
    color: #a0a0a0;
    font-family: "Outfit", Helvetica;
    font-size: 24px;
    font-weight: 400;
    left: 11px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 13px;
    white-space: nowrap;
    width: 245px;
  }
  
  .seeking-post-header .line {
    height: 2px;
    position: relative;
    width: 1061px;
  }
  
  </style>
  