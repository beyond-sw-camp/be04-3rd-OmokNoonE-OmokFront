<template>
    <div class="guestmenu-outter">
        <div class="guestmenu-inner">
            <div class="regist">
                <div class="text-wrapper-3">회원가입</div>
            </div>
            <div class="login">
                <img class="img" src="@/assets/img/sign-in-squre.png">
                <div class="text-wrapper-4">로그인</div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.guestmenu-outter {
    align-items: center;
    gap: 37px;
    display: inline-flex;
    position: relative;
    flex: 0 0 auto;
}

.guestmenu-inner {
    align-items: flex-start;
    gap: 8px;
    display: inline-flex;
    position: relative;
    flex: 0 0 auto;
}

.regist {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 11px 20px;
    position: relative;
    flex: 0 0 auto;
    background-color: #bad7e94c;
    border-radius: 28px;
}

.text-wrapper-3 {
    position: relative;
    width: fit-content;
    margin-top: -1px;
    color: #000000;
    font-size: 14px;
    text-align: center;
    font-family: "Outfit", Helvetica;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
}

.login {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 8px 16px;
    position: relative;
    flex: 0 0 auto;
    background-color: #bad7e9;
    border-radius: 28px;
}

.img {
    position: relative;
    width: 24px;
    height: 24px;
}

.text-wrapper-4 {
    position: relative;
    width: fit-content;
    color: #000000;
    font-size: 14px;
    text-align: center;
    font-family: "Outfit", Helvetica;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
}
</style>