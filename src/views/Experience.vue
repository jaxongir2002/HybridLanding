<script setup>
import Navigation from "@/components/Navigation.vue";
import LastSection from "@/components/LastSection.vue";
import Cover from "@/components/Cover.vue";
import ExperienceAbout from "@/components/Experience/ExperienceAbout.vue";
import ExperienceService from "@/components/Experience/ExperienceService.vue";
import ExperienceVideos from "@/components/Experience/ExperienceVideos.vue";
import CommunityCuntacts from "@/components/Community/CommunityCuntacts.vue";
import ExperienceCover from "@/components/Experience/ExperienceCover.vue";


</script>

<template>
  <div  >
<!--    <Navigation/>-->
    <experience-cover style=" padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto"/>
    <ExperienceAbout style=" padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto"/>
    <ExperienceService style=" padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto"/>
    <ExperienceVideos style="padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto"/>
    <CommunityCuntacts/>
    <LastSection style=" padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto"/>
  </div>

</template>

<style scoped lang="scss">

</style>