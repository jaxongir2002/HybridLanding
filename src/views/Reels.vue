<script setup>
import LastSection from "@/components/LastSection.vue";
import Navigation from "@/components/Navigation.vue";
import CoverReels from "@/components/Reels/CoverReels.vue";
import ReelsVideo from "@/components/Reels/ReelsVideo.vue";
import ReelsParners from "@/components/Reels/ReelsParners.vue";
import ReelsRegister from "@/components/Reels/ReelsRegister.vue";
</script>

<template>
  <div  style=" padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto">
    <navigation/>
    <cover-reels/>
    <reels-video/>
    <ReelsParners/>
    <ReelsRegister/>
    <LastSection/>
  </div>

</template>

<style scoped lang="scss">

</style>