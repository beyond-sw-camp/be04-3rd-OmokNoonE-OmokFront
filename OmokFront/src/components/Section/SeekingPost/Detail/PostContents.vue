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
.postcontents {
    position: relative;
    width: 866px;
    height: 1240px;
}

.image-5 {
    position: absolute;
    width: 864px;
    height: 488px;
    top: 0;
    left: 0;
}

.FE-BE-UX-UI {
    position: absolute;
    width: 809px;
    top: 535px;
    left: 21px;
    font-family: "Outfit", Helvetica;
    font-weight: 400;
    color: #000000;
    font-size: 20px;
    letter-spacing: 0;
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