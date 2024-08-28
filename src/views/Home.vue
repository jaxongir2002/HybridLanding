<script setup>
import AboutCover from "@/components/About/AboutCover.vue";
import OurServices from "@/components/About/OurServices.vue";
import OurProcess from "@/components/About/OurProcess.vue";
import OurTeam from "@/components/About/OurTeam.vue";
import LastSection from "@/components/LastSection.vue";
import AboutParners from "@/components/About/AboutParners.vue";
import AboutRegister from "@/components/About/AboutRegister.vue";
import Partners from "@/components/Partners.vue";
</script>

<template>
  <div class="screen-width" style="padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto">
    <about-cover/>
    <our-services/>
    <OurProcess/>
    <OurTeam/>
    <Partners/>
    <AboutRegister/>
    <LastSection/>
  </div>
</template>

<style scoped lang="scss">

</style>