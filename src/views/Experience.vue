<script setup>
import LastSection from "@/components/LastSection.vue";
import ExperienceAbout from "@/components/Experience/ExperienceAbout.vue";
import ExperienceService from "@/components/Experience/ExperienceService.vue";
import ExperienceVideos from "@/components/Experience/ExperienceVideos.vue";
import CommunityCuntacts from "@/components/Community/CommunityCuntacts.vue";
import ExperienceCover from "@/components/Experience/ExperienceCover.vue";
</script>

<template>
  <div>
    <experience-cover class="screen-width" style=" padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto"/>
    <ExperienceAbout class="screen-width" style=" padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto"/>
    <ExperienceService class="screen-width" style=" padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto"/>
    <ExperienceVideos class="screen-width" style="padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto"/>
    <CommunityCuntacts/>
    <LastSection class="screen-width" style=" padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto"/>
  </div>

</template>

<style scoped lang="scss">

</style>