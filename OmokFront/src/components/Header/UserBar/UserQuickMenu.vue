<template>
    <div class="frame-3">
        <div class="img">
            <div class="overlap-group">
                <div class="ellipse"></div>
                <img class="ellipse-2" src="@/assets/img/ellipse-47-1.svg" />
                <img class="ellipse-3" src="@/assets/img/ellipse-48-1.svg" />
            </div>
            <div class="overlap">
                <img class="subtract" src="@/assets/img/subtract-2.svg" />
                <img class="subtract-2" src="@/assets/img/subtract-3.svg" />
                <img class="rectangle" src="@/assets/img/rectangle-4160-1.svg" />
            </div>
        </div>
        <img class="img" src="@/assets/img/package-box-alt.svg" />
        <img class="img" src="@/assets/img/bookmark-unselect.svg" />
    </div>
</template>

<script setup>

</script>

<style scoped>
@media screen and (max-width: 1540px) {
    .frame-3 {
        display: none !important;
    }
}
.frame-3 {
    display: inline-flex;
    align-items: flex-start;
    gap: 39px;
    position: relative;
    flex: 0 0 auto;
}

.img {
    position: relative;
    width: 30px;
    height: 30px;
}

.overlap-group {
    position: absolute;
    width: 20px;
    height: 10px;
    top: 5px;
    left: 5px;
}

.ellipse {
    position: absolute;
    width: 6px;
    height: 6px;
    top: 0;
    left: 5px;
    border-radius: 5px;
    border: 2px solid;
    border-color: var(--lineicon);
}

.ellipse-2 {
    position: absolute;
    width: 8px;
    height: 8px;
    top: 2px;
    left: 12px;
}

.ellipse-3 {
    position: absolute;
    width: 8px;
    height: 8px;
    top: 2px;
    left: 0;
}

.overlap {
    position: absolute;
    width: 24px;
    height: 8px;
    top: 16px;
    left: 3px;
}

.subtract {
    position: absolute;
    width: 10px;
    height: 7px;
    top: 0;
    left: 14px;
}

.subtract-2 {
    width: 10px;
    height: 7px;
    left: 0;
    position: absolute;
    top: 0;
}

.rectangle {
    width: 14px;
    height: 8px;
    left: 5px;
    position: absolute;
    top: 0;
}
</style>