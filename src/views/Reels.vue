<script setup>
import {ref} from 'vue'
import LastSection from "@/components/LastSection.vue";
import CoverReels from "@/components/Reels/CoverReels.vue";
import ReelsVideo from "@/components/Reels/ReelsVideo.vue";
import Partners from "@/components/Partners.vue";
import Register from "@/components/Register.vue";
import {useAxios} from "@/composable/useAxios.js";

const ourWorks = ref([]);

async function getOurWorks() {
  const res = await useAxios(`/ourworks?populate=*`)
  ourWorks.value = res.data[0].attributes.videos
}

getOurWorks()
</script>

<template>
  <div class="screen-width" style="padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto">
    <cover-reels/>
    <reels-video :videos="ourWorks"/>
    <Partners/>
    <Register/>
    <LastSection/>
  </div>
</template>

<style scoped lang="scss">``</style>