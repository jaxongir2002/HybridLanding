<script setup>
import Navigation from "@/components/Navigation.vue";
import ExperienceVideos from "@/components/Experience/ExperienceVideos.vue";
import LastSection from "@/components/LastSection.vue";
import CommunityCuntacts from "@/components/Community/CommunityCuntacts.vue";
import LabCover from "@/components/Lab/LabCover.vue";
import LabExperiments from "@/components/Lab/LabExperiments.vue";
</script>

<template>
  <div style=" padding: 34px 40px 34px 40px; max-width: 1440px; margin: auto ">
    <Navigation/>
    <LabCover/>
    <LabExperiments/>
    <ExperienceVideos/>
    <CommunityCuntacts/>
    <LastSection/>
  </div>

</template>

<style scoped lang="scss">

</style>