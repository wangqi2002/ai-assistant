<template>
    <el-container class="container_box">
        <el-aside class="sidebar_box">
            <div>aside</div>
        </el-aside>
        <el-main class="content_box">
            <Chat></Chat>
        </el-main>
    </el-container>
</template>

<script setup>
import { ref, provide, onMounted } from "vue";

import Chat from "../components/chat/Chats.vue"


onMounted(() => {
});
</script>
<style lang="scss">
* {
    padding: 0;
    margin: 0;
}

.container_box {
    width: 100vw;
    height: 100vh;
    display: flex;

    .sidebar_box {
        height: 100%;
        display: none;
    }

    .content_box {
        flex: 1;
        height: 100%;
        padding: 0;
        overflow: hidden;
    }
}
</style>
