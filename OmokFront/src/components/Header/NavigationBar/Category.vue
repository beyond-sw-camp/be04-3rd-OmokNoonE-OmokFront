<template>
    <div class="category">
        <div class="group">
            <div class="group-2">
                <div @click="goSeekingPost" class="text-wrapper">모집글</div>
                <img class="line" src="@/assets/img/selected-line.svg" />
            </div>
        </div>
        <div class="text-wrapper-2">프로젝트</div>
        <div class="text-wrapper-2">공지사항</div>
        <div class="text-wrapper-2">게시판</div>
    </div>
</template>

<script setup>
    import { useRouter } from "vue-router";

    const router = useRouter();

    function goSeekingPost() {
        router.push(`/seekingpost`);
    }
</script>

<style scoped>


@media screen and (max-width: 1140px) {
.category {
    display: none !important;
}
}

.category {
    display: inline-flex;
    align-items: center;
    gap: 39px;
    position: relative;
    flex: 0 0 auto;
}

.group {
    position: relative;
    width: 49.4px;
    height: 23.43px;
}

.group-2 {
    position: relative;
    width: 51px;
    height: 23px;
}

.text-wrapper {
    position: absolute;
    top: 0;
    left: 5px;
    font-family: "Outfit", Helvetica;
    font-weight: 400;
    color: #1e1e1e;
    font-size: 14px;
    text-align: center;
    letter-spacing: 0;
    line-height: normal;
    cursor: pointer;
}

.line {
    width: 49px;
    height: 2px;
    top: 21px;
    position: absolute;
    left: 0;
}

.text-wrapper-2 {
    position: relative;
    width: fit-content;
    opacity: 0.5;
    font-family: "Outfit", Helvetica;
    font-weight: 400;
    color: #1e1e1e;
    font-size: 14px;
    text-align: center;
    letter-spacing: 0;
    line-height: normal;
}
</style>