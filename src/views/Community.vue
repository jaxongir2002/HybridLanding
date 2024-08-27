<script setup>
import LastSection from "@/components/LastSection.vue";
import CommunityCover from "@/components/Community/CommunityCover.vue";
import CommunityProcess from "@/components/Community/CommunityProcess.vue";
import CommunityTeam from "@/components/Community/CommunityTeam.vue";
import CommunityBreathLife from "@/components/Community/CommunityBreathLife.vue";
import CommunityCuntacts from "@/components/Community/CommunityCuntacts.vue";
</script>

<template>
  <div>
    <community-cover class="screen-width" style="padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto"/>
    <community-process class="screen-width" style="padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto"/>
    <community-team class="screen-width" style=" padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto"/>
    <community-breath-life class="screen-width" style=" padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto"/>
    <CommunityCuntacts/>
    <LastSection class="screen-width" style=" padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto"/>
  </div>

</template>

<style scoped lang="scss">

</style>