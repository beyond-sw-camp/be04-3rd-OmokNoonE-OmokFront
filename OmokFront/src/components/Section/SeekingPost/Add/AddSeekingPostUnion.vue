<template>
    <div class="section">
        <AddSeekingPostDetail @newPost="addNewPost"/>
    </div>
</template>

<script setup>
    import AddSeekingPostDetail from '@/components/Section/SeekingPost/Add/AddSeekingPostDetail.vue';
    import axios from 'axios';

    async function addNewPost(newPost) {
      console.log("Union에서 값 받음");
      console.log(newPost.value);
      try {
        const response = await axios.post("http://localhost:8080/seekingPostDetail", newPost.value, {
          header: {
            "Context-Type": "multipart/form-data",
          }
        });
      } catch(error) {
        console.error("Error add new posts:",error);
      }
    }
</script>

<style scoped>
@media screen and (max-width: 1040px) {
  .section {
    width: 90%; /* 화면 너비의 90%로 조정 */
    max-width: 600px; /* 최대 너비를 600px로 제한 */
  }
}

.section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    position: relative;
    align-self: center;
    width: fit-content;
    margin: 50px;
    padding: 30px;
    min-height: 700px;
    background-color: white;
    border-radius: 30px;
}
</style>