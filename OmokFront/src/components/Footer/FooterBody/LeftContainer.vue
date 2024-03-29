<template>
    <div class="left-container">
        <img class="image-3" src="@/assets/img/title.png" />
        <div class="frame-9">
            <img class="image-4" src="@/assets/img/github-and-notion.svg" />
            <p class="p">
                Lorem ipsum dolor sit amet consectetur. Bibendum consequat laoreet turpis in pellentesque sem id ut.
                Feugiat quam porttitor in augue sed quis pellentesque quam purus.
            </p>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.left-container {
    display: inline-flex;
    align-items: center;
    position: relative;
    flex: 0 0 auto;
}

.image-3 {
    position: relative;
    width: 208px;
    height: 92px;
    object-fit: cover;
}

.frame-9 {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
    position: relative;
    flex: 0 0 auto;
}

.image-4 {
    position: relative;
    flex: 0 0 auto;
}

.p {
    position: relative;
    width: 298px;
    height: 86px;
    font-family: "Inter", Helvetica;
    font-weight: 400;
    color: #525252;
    font-size: 14px;
    letter-spacing: 0;
    line-height: normal;
}
</style>