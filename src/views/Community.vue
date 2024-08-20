<script setup>
import LastSection from "@/components/LastSection.vue";
import Navigation from "@/components/Navigation.vue";
import CommunityCover from "@/components/Community/CommunityCover.vue";
import CommunityProcess from "@/components/Community/CommunityProcess.vue";
import CommunityTeam from "@/components/Community/CommunityTeam.vue";
import CommunityBreathLife from "@/components/Community/CommunityBreathLife.vue";
import CommunityCuntacts from "@/components/Community/CommunityCuntacts.vue";
</script>

<template>
  <div  >
    <navigation style=" padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto"/>
    <community-cover style=" padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto"/>
    <community-process style=" padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto"/>
    <community-team style=" padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto"/>
    <community-breath-life style=" padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto"/>
    <CommunityCuntacts/>
    <LastSection style=" padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto"/>
  </div>

</template>

<style scoped lang="scss">

</style>