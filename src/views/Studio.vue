<script setup>
import ExperienceVideos from "@/components/Experience/ExperienceVideos.vue";
import LastSection from "@/components/LastSection.vue";
import CommunityCuntacts from "@/components/Community/CommunityCuntacts.vue";
import ExperienceAbout from "@/components/Experience/ExperienceAbout.vue";
import StudioCover from "@/components/Studio/StudioCover.vue";
import StudioVideoSlider from "@/components/Studio/StudioVideoSlider.vue";
</script>

<template>
  <div>
    <StudioCover style=" padding: 34px 40px 34px 40px; max-width: 1440px; margin: auto"/>
    <StudioVideoSlider style=" padding: 34px 40px 34px 40px; max-width: 1440px; margin: auto"/>
    <ExperienceAbout style=" padding: 34px 40px 34px 40px; max-width: 1440px; margin: auto"/>
    <ExperienceVideos style=" padding: 34px 40px 34px 40px; max-width: 1440px; margin: auto"/>
    <CommunityCuntacts/>
    <LastSection style=" padding: 34px 40px 34px 40px; max-width: 1440px; margin: auto"/>
  </div>

</template>

<style scoped lang="scss">
</style>