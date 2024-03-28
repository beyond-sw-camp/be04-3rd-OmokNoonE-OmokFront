<template>
    <div class="SMP-body">
        <div class="posts" v-if="props.posts">
            <div class="SMP-card" v-for="post in pagePost" :key="posts.SEEKING_MEMBER_POST_ID">
                <div class="SMP-thumbnail">
                    <img @click="goDetailPage(post.SEEKING_MEMBER_POST_ID)" class="img-2"
                        src="@/assets/img/thumbnail.svg">
                    <div class="SMP-status" v-if="post.IS_SEEKING">
                        <div class="is-seeking">모집중</div>
                    </div>
                    <div class="SMP-status-red" v-if="!post.IS_SEEKING">
                        <div class="is-seeking">종료</div>
                    </div>
                </div>
                <div class="SMP-details">
                    <div class="details-header">
                        <div class="tech-stack" v-if="post.TECH_STACK">
                            <div class="danger-wrapper" v-for="stack in post.TECH_STACK.split(',')" :key="stack">
                                <div class="danger">{{ stack.trim() }}</div>
                            </div>
                        </div>
                        <div class="bookmark">
                            <img class="img-2" v-if="post.IS_BOOKMARK" src="@/assets/img/bookmark-selected.svg">
                            <img class="img-2" v-if="!post.IS_BOOKMARK" src="@/assets/img/bookmark-unselect.svg">
                        </div>
                    </div>
                    <div class="title">
                        <p @click="goDetailPage(posts.SEEKING_MEMBER_POST_ID)" class="title-text">{{ post.TITLE }}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div class="btn-group">
        <button @click="goBack" class="btn-left"><</button>
        <button @click="nextPage" class="btn-right">></button>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const props = defineProps({
    posts: Array
})

/* 페이징 처리 */
const pagePost = ref([]);
const index = ref(0);
const next = ref(12);

watch(props, (newValue, oldValue) => {
    console.log("총 모집글 수:", props.posts.length);

    pagePost.value = props.posts.slice(index.value, next.value);
    console.log(pagePost.value);
});

async function goBack() {
    if (!(index.value <= 0)) {
        index.value -= 12;
        next.value -= 12;
        await updatePagePost(index.value, next.value);
        console.log("goBack():", index.value, next.value);
    }
}

async function nextPage() {
    const total = props.posts.length;
    if (!(next.value >= total)) {
        index.value += 12;
        next.value += 12;
        await updatePagePost(index.value, next.value);
        console.log("nextPage():", index.value, next.value);
    }
}

async function updatePagePost(index, next) {
    console.log("pagePost.value.slice(index, next):", props.posts.slice(index, next));
    pagePost.value = props.posts.slice(index, next);
}


function goDetailPage(postId) {
    router.push(`/seekingpost/${postId}`);
}

</script>

<style scoped>
.SMP-body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 11px;
    padding: 0.1% 4%;
    position: relative;
    flex: 1;
    align-self: stretch;
    margin: 2% 0px 2% 0px;
    width: 90%;
    flex-grow: 1;
    background-color: #ffffff;
}

.posts {
    display: inline-flex;
    align-items: flex-start;
    flex-wrap: wrap;
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
    cursor: pointer;
}

.SMP-status {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 2px 10px;
    position: absolute;
    top: 173px;
    right: 8px;
    background-color: #5bc065;
    border-radius: 25px;
}

.SMP-status-red {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 2px 10px;
    position: absolute;
    top: 173px;
    right: 8px;
    background-color: #C24242;
    border-radius: 25px;
}

.is-seeking {
    position: relative;
    width: fit-content;
    margin-top: -1px;
    font-family: var(--base-body-bold-font-family);
    font-weight: 500;
    color: white;
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
    width: 100%;
    gap: 10px;
    position: relative;
    flex: 0 0 auto;
}

.details-header {
    display: inline-flex;
    align-items: flex-end;
    width: 100%;
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
    margin-left: auto;

}

.title {
    max-width: 300px;
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
    font-weight: bold;
    color: #000000;
    font-size: 15px;
    letter-spacing: 0;
    line-height: normal;
    cursor: pointer;
}

.btn-group {
    position: fixed;
    align-self: center;
}

.btn-left {
    position: fixed;
    border: none;
    font-size: 50px;
    background-color: #e0eef7;
    left: 5%;
    top: 32%;
    width: 50px;
    height: 28%;
    border-radius: 10%;
}

.btn-right {
    position: fixed;
    border: none;
    font-size: 50px;
    background-color: #e0eef7;
    right: 5%;
    top: 32%;
    width: 50px;
    height: 28%;
    border-radius: 10%;
}
</style>