<script setup>
import ExperienceVideos from "@/components/Experience/ExperienceVideos.vue";
import LastSection from "@/components/LastSection.vue";
import CommunityCuntacts from "@/components/Community/CommunityCuntacts.vue";
import LabCover from "@/components/Lab/LabCover.vue";
import LabExperiments from "@/components/Lab/LabExperiments.vue";
import {ref} from "vue";
import {useAxios} from "@/composable/useAxios.js";

const mainVideo = ref([]);
const listVideos = ref([]);
async function getMethod() {
  const res = await useAxios(`/labs?populate=*`)
  mainVideo.value = res.data[0].attributes.lab_main
  listVideos.value = res.data[0].attributes.main_list_videos
}

getMethod()
</script>

<template>
    <LabCover class="screen-width" style="padding: 34px 40px 34px 40px; max-width: 1440px; margin: auto"/>
    <LabExperiments :main_video="mainVideo" class="screen-width" style="padding: 34px 40px 34px 40px; max-width: 1440px; margin: auto"/>
    <ExperienceVideos :video="listVideos" class="screen-width" style="padding: 34px 40px 34px 40px; max-width: 1440px; margin: auto"/>
    <CommunityCuntacts/>
    <LastSection class="screen-width" style="padding: 34px 40px 34px 40px; max-width: 1440px; margin: auto"/>
</template>

<style scoped lang="scss">

</style>