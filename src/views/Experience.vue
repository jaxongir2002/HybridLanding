<script setup>
import Navigation from "@/components/Navigation.vue";
import LastSection from "@/components/LastSection.vue";
import Cover from "@/components/Cover.vue";
import ExperienceAbout from "@/components/Experience/ExperienceAbout.vue";
import ExperienceService from "@/components/Experience/ExperienceService.vue";
import ExperienceVideos from "@/components/Experience/ExperienceVideos.vue";
import CommunityCuntacts from "@/components/Community/CommunityCuntacts.vue";


</script>

<template>
  <div  style=" padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto">
    <Navigation/>
    <Cover/>
    <ExperienceAbout/>
    <ExperienceService/>
    <ExperienceVideos/>
    <CommunityCuntacts/>
    <LastSection/>
  </div>

</template>

<style scoped lang="scss">

</style>