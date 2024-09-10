<script setup>
import LastSection from "@/components/LastSection.vue";
import ExperienceAbout from "@/components/Experience/ExperienceAbout.vue";
import ExperienceService from "@/components/Experience/ExperienceService.vue";
import ExperienceVideos from "@/components/Experience/ExperienceVideos.vue";
import CommunityCuntacts from "@/components/Community/CommunityCuntacts.vue";
import ExperienceCover from "@/components/Experience/ExperienceCover.vue";
import {useAxios} from "@/composable/useAxios.js";
import {ref} from 'vue';

const installationsList = ref([])
async function getMethod() {
  const res = await useAxios(`/installations?populate=*`)
  installationsList.value = res.data[0].attributes.installation_videos
}

getMethod()
</script>

<template>
  <div>
    <experience-cover class="screen-width" style=" padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto"/>
    <ExperienceAbout class="screen-width" style=" padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto"/>
    <ExperienceService class="screen-width" style=" padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto"/>
    <ExperienceVideos :video="installationsList" class="screen-width" style="padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto"/>
    <CommunityCuntacts/>
    <LastSection class="screen-width" style=" padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto"/>
  </div>

</template>

<style scoped lang="scss">

</style>