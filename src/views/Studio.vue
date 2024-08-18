<script setup>
import Navigation from "@/components/Navigation.vue";
import ExperienceVideos from "@/components/Experience/ExperienceVideos.vue";
import LastSection from "@/components/LastSection.vue";
import CommunityCuntacts from "@/components/Community/CommunityCuntacts.vue";
import ExperienceAbout from "@/components/Experience/ExperienceAbout.vue";
import StudioCover from "@/components/Studio/StudioCover.vue";
import StudioVideoSlider from "@/components/Studio/StudioVideoSlider.vue";
</script>

<template>
  <Navigation/>
  <StudioCover/>
  <StudioVideoSlider/>
  <ExperienceAbout/>
  <ExperienceVideos/>
  <CommunityCuntacts/>
  <LastSection/>
</template>

<style scoped lang="scss">

</style>