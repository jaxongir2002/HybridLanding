<script setup>
import ExperienceVideos from "@/components/Experience/ExperienceVideos.vue";
import LastSection from "@/components/LastSection.vue";
import CommunityCuntacts from "@/components/Community/CommunityCuntacts.vue";
import LabCover from "@/components/Lab/LabCover.vue";
import LabExperiments from "@/components/Lab/LabExperiments.vue";
</script>

<template>
    <LabCover class="screen-width" style="padding: 34px 40px 34px 40px; max-width: 1440px; margin: auto"/>
    <LabExperiments class="screen-width" style="padding: 34px 40px 34px 40px; max-width: 1440px; margin: auto"/>
    <ExperienceVideos class="screen-width" style="padding: 34px 40px 34px 40px; max-width: 1440px; margin: auto"/>
    <CommunityCuntacts/>
    <LastSection class="screen-width" style="padding: 34px 40px 34px 40px; max-width: 1440px; margin: auto"/>
</template>

<style scoped lang="scss">

</style>