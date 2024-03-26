<template>
    <div class="frame-10">
        <div class="div-2">
            <div class="text-wrapper-8">Website Links</div>
            <div class="text-wrapper-9">Home</div>
            <div class="text-wrapper-10">About</div>
        </div>
        <div class="div-2">
            <div class="text-wrapper-11">Services</div>
            <div class="text-wrapper-12">Architecture</div>
            <div class="text-wrapper-13">Buildings</div>
        </div>
        <div class="developers">
            <div class="text-wrapper-14">Developers</div>
            <div class="text-wrapper-12">Fetures</div>
            <div class="text-wrapper-13">Testomonials</div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
@media screen and (max-width: 1440px) {
.frame-10 {
    display: none !important;
}
}

.frame-10 {
    display: inline-flex;
    align-items: flex-start;
    gap: 64px;
    position: relative;
    flex: 0 0 auto;
    height: 115px;

}

.div-2 {
    position: relative;
    width: 151px;
}

.text-wrapper-8 {
    position: absolute;
    width: 145px;
    top: 0;
    left: 0;
    font-family: "Inter", Helvetica;
    font-weight: 600;
    color: #1e1e1e;
    font-size: 20px;
    letter-spacing: 0;
    line-height: normal;
}

.text-wrapper-9 {
    position: absolute;
    width: 98px;
    height: 48px;
    top: 39px;
    left: 0;
    font-family: "Inter", Helvetica;
    font-weight: 400;
    color: #525252;
    font-size: 14px;
    letter-spacing: 0;
    line-height: normal;
}

.text-wrapper-10 {
    position: absolute;
    width: 98px;
    height: 48px;
    top: 87px;
    left: 0;
    font-family: "Inter", Helvetica;
    font-weight: 400;
    color: #525252;
    font-size: 14px;
    letter-spacing: 0;
    line-height: normal;
}

.text-wrapper-11 {
    position: absolute;
    width: 85px;
    top: 0;
    left: 0;
    font-family: "Inter", Helvetica;
    font-weight: 600;
    color: #1e1e1e;
    font-size: 20px;
    text-align: center;
    letter-spacing: 0;
    line-height: normal;
}

.text-wrapper-12 {
    position: absolute;
    width: 145px;
    height: 48px;
    top: 39px;
    left: 0;
    font-family: "Inter", Helvetica;
    font-weight: 400;
    color: #525252;
    font-size: 14px;
    letter-spacing: 0;
    line-height: normal;
}

.text-wrapper-13 {
    position: absolute;
    width: 145px;
    height: 48px;
    top: 87px;
    left: 0;
    font-family: "Inter", Helvetica;
    font-weight: 400;
    color: #525252;
    font-size: 14px;
    letter-spacing: 0;
    line-height: normal;
}

.developers {
    position: relative;
    width: 151px;
    height: 134.88px;
    margin-right: -6px;
}

.text-wrapper-14 {
    position: absolute;
    width: 117px;
    top: 0;
    left: 0;
    font-family: "Inter", Helvetica;
    font-weight: 600;
    color: #1e1e1e;
    font-size: 20px;
    letter-spacing: 0;
    line-height: normal;
}
</style>