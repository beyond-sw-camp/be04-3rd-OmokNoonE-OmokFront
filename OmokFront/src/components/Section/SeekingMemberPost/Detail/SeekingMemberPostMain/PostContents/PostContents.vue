<template>
    <!-- postcontents -->
    <div class="postcontents">
        <img class="image-5" src="@/assets/img/post-default.svg" />
        <p class="FE-BE-UX-UI">
            <!-- <span class="span">안녕하세요!<br />저희는 현재 웹 개발 프로젝트에 참여할 팀원을 찾고 있습니다. 이 프로젝트는 새로운
                온라인 플랫폼을 구축하는 것으로, 우리의 목표는 사용자들에게 편리한 서비스를 제공하는 것입니다.<br />우리
                팀은 열정적이고 경험이 풍부한 개발자들로 구성되어 있습니다. 함께 일하며 최신 웹 개발 기술을 활용하고
                협력하여 최고의 결과물을 만들고자 합니다.<br />우리 팀에 합류하실 분들은 다음과 같은 조건을 만족해야
                합니다:<br /><br />✔ 팀 구성원<br />FE 개발자 2명<br />BE 개발자 2명<br />UX/UI 디자이너 1명<br /><br />✔ 협업도구<br /></span>
            <span class="text-wrapper-9">오목허브<br /></span>
            <span class="span">Github<br /><br />✔  요구사항<br />프론트엔드 또는 백엔드 웹 개발 경험이 있는 분<br />HTML, CSS,
                JavaScript 등 웹 기술에 대한 이해와 능숙한 활용 가능<br />프로젝트에 주도적으로 참여하고 팀원들과
                소통하는 능력<br /><br /><br />프로젝트에 관심이 있으신 분은 지원 해주세요. 우리 팀에서는 웹 개발
                분야에서 열정적이고 역량 있는 개발자를 기다리고 있습니다!<br />문의 사항이 있으시면 언제든지 연락
                주세요. 함께 멋진 웹 서비스를 만들어나갈 팀원을 기다리고 있습니다.<br />감사합니다!<br /></span> -->
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