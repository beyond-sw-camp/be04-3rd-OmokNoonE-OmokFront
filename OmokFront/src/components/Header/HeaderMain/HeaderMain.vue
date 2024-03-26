<template>
    <div class="frame">
        <TitleAndCategory/>
        <SearchBar/>
        <UserBar/>
    </div>
</template>

<script setup>
import SearchBar from './SearchBar/SearchBar.vue';
import TitleAndCategory from './TitleAndCategory/TitleAndCategory.vue';
import UserBar from './UserBar/UserBar.vue';

</script>

<style scoped>
.frame {
    display: flex;
    width: 90%;
    margin: auto;
    /* 가운데 정렬 */
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;
    position: relative;
    top: 10px;
}
</style>