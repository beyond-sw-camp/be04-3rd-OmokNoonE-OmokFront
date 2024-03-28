<template>
    <!-- postcontents -->
    <div class="postcontents">
        <img class="image-5" src="@/assets/img/post-default.svg" />
        <p class="FE-BE-UX-UI">
            <div v-html="contentProps.content.replace(/\n/g, '<br>')"></div>
        </p>
    </div>
</template>

<script setup>
const contentProps = defineProps({
    content: String
});
</script>

<style scoped>
@media screen and (max-width: 1040px) {
.postcontents {
    margin-top: 20px !important;
}

.image-5 {
  width: 80% !important;
  min-width: 500px;
}
}

.postcontents {
    display: inline-flex;
    position: relative;
    align-items: center;
    flex-direction: column;
    margin-top: 2%;
    max-width: 1980px;
    width: 90%;
}

.image-5 {
    position: relative;
    align-items: center;
    width: 80%;
    top: 0;
    left: 0;
}

.FE-BE-UX-UI {
    position: relative;
    align-items: center;
    height: fit-content;
    font-family: "Outfit", Helvetica;
    font-weight: 400;
    color: #000000;
    font-size: 20px;
    margin-top: 40px;
    letter-spacing: 0;
    width: 80%;
    min-width: 500px;
    line-height: normal;
}

/* .span {
    font-family: "Outfit", Helvetica;
    font-weight: 400;
    color: #000000;
    font-size: 20px;
    letter-spacing: 0;
} */

/* .text-wrapper-9 {
    font-weight: 600;
} */
</style>