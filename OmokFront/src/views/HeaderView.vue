<template>
    <header class="header">
        <HeaderUnion />
    </header>
</template>

<script setup>
import HeaderUnion from '@/components/Header/HeaderUnion.vue';

</script>

<style scoped>

@media screen and (max-width: 700px) {
.header{
    padding: 0px 10px 0px 10px !important;
}

}
.header {
    position: relative;
    align-self: stretch;
    width: 100%;
    min-width: 600px;
    height: 78px;
    background-color: #ffffff;
    border-top-style: none;
    border-right-style: none;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-left-style: none;
    border-color: #0000004c;
}
</style>