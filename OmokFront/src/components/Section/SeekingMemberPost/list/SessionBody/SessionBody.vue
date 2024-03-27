<template>
    <div class="SMP-body">
        <div class="posts">
            <div class="SMP-card">
                <div class="SMP-thumbnail">
                    <img class="img-2" src="@/assets/img/thumbnail.svg">
                    <div class="SMP-status">
                        <div class="is-seeking">모집중</div>
                    </div>
                </div>
                <div class="SMP-details">
                    <div class="details-header">
                        <div class="tech-stack">
                            <div class="danger-wrapper">
                                <div class="danger">Spring</div>
                            </div>
                            <div class="danger-wrapper">
                                <div class="danger">Java</div>
                            </div>
                        </div>
                        <div class="bookmark"><img class="img-2" src="@/assets/img/bookmark-selected.svg"></div>
                    </div>
                    <div class="title">
                        <p class="title-text">팀 오목눈이에서 백엔드 개발자 구인 합니다</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.SMP-body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 11px;
    padding: 7px 54px;
    position: relative;
    flex: 1;
    align-self: stretch;
    width: 100%;
    flex-grow: 1;
    background-color: #ffffff;
}

.posts {
    display: inline-flex;
    align-items: flex-start;
    justify-content: center;
    gap: 11px;
    position: relative;
    flex: 0 0 auto;
}

.SMP-card {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    padding: 10px;
    position: relative;
    flex: 0 0 auto;
    background-color: #e0eef7;
    border-radius: 10px;
}

.SMP-thumbnail {
    display: flex;
    flex-direction: column;
    height: 208px;
    align-items: flex-start;
    gap: 10px;
    position: relative;
    align-self: stretch;
    width: 100%;
}

.img-2 {
    position: relative;
    flex: 1;
    align-self: stretch;
    width: 100%;
    flex-grow: 1;
}

.SMP-status {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 2px 10px;
    position: absolute;
    top: 172px;
    left: 249px;
    background-color: #5bc065;
    border-radius: 25px;
}

.is-seeking {
    position: relative;
    width: fit-content;
    margin-top: -1px;
    font-family: var(--base-body-bold-font-family);
    font-weight: var(--base-body-bold-font-weight);
    color: var(--lightwhite);
    font-size: var(--base-body-bold-font-size);
    letter-spacing: var(--base-body-bold-letter-spacing);
    line-height: var(--base-body-bold-line-height);
    white-space: nowrap;
    font-style: var(--base-body-bold-font-style);
}

.SMP-details {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    position: relative;
    flex: 0 0 auto;
}

.details-header {
    display: inline-flex;
    align-items: flex-end;
    gap: 177px;
    padding: 5px 0px 0px;
    position: relative;
    flex: 0 0 auto;
}

.tech-stack {
    display: inline-flex;
    align-items: flex-start;
    gap: 5px;
    position: relative;
    flex: 0 0 auto;
}

.danger-wrapper {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 2px 10px;
    position: relative;
    flex: 0 0 auto;
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

.bookmark {
    display: flex;
    flex-direction: column;
    width: 25.01px;
    height: 24px;
    align-items: flex-end;
    gap: 10px;
    position: relative;
}

.title {
    display: inline-flex;
    align-items: flex-start;
    gap: 10px;
    padding: 0px 0px 0px 5px;
    position: relative;
    flex: 0 0 auto;
}

.title-text {
    position: relative;
    width: fit-content;
    margin-top: -1px;
    font-family: "Outfit", Helvetica;
    font-weight: 400;
    color: #000000;
    font-size: 15px;
    letter-spacing: 0;
    line-height: normal;
}
</style>