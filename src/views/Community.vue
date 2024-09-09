<script setup>
import {ref} from 'vue'
import LastSection from "@/components/LastSection.vue";
import CommunityCover from "@/components/Community/CommunityCover.vue";
import CommunityProcess from "@/components/Community/CommunityProcess.vue";
import CommunityTeam from "@/components/Community/CommunityTeam.vue";
import CommunityBreathLife from "@/components/Community/CommunityBreathLife.vue";
import CommunityCuntacts from "@/components/Community/CommunityCuntacts.vue";
import {useAxios} from "@/composable/useAxios.js";

const communityVideos = ref();
const breath = ref();

async function getMethod() {
  const res = await useAxios(`/communities?populate=*`)
  communityVideos.value = res.data[0].attributes.videos
  breath.value = res.data[0].attributes.breath_video

}

getMethod()
</script>

<template>
  <div>
    <community-cover class="screen-width" style="padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto"/>
    <community-process class="screen-width" style="padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto"/>
    <community-team :videos="communityVideos" class="screen-width" style=" padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto"/>
    <community-breath-life :video="breath" class="screen-width"
                           style=" padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto"/>
    <CommunityCuntacts/>
    <LastSection class="screen-width" style=" padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto"/>
  </div>

</template>

<style scoped lang="scss">

</style>