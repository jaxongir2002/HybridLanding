<script setup>
import LastSection from "@/components/LastSection.vue";
import CoverReels from "@/components/Reels/CoverReels.vue";
import ReelsVideo from "@/components/Reels/ReelsVideo.vue";
import ReelsRegister from "@/components/Reels/ReelsRegister.vue";
import Partners from "@/components/Partners.vue";
</script>

<template>
  <div class="screen-width" style=" padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto">
    <cover-reels/>
    <reels-video/>
    <Partners/>
    <ReelsRegister/>
    <LastSection/>
  </div>
</template>

<style scoped lang="scss">

</style>