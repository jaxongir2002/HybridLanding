<script setup>
import AboutCover from "@/components/About/AboutCover.vue";
import OurServices from "@/components/About/OurServices.vue";
import OurProcess from "@/components/About/OurProcess.vue";
import OurTeam from "@/components/About/OurTeam.vue";
import LastSection from "@/components/LastSection.vue";
import Partners from "@/components/Partners.vue";
import Register from "@/components/Register.vue";
</script>

<template>
  <div class="screen-width" style="padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto">
    <about-cover/>
    <our-services/>
    <OurProcess/>
    <OurTeam/>
    <Partners/>
    <Register/>
    <LastSection/>
  </div>
</template>

<style scoped lang="scss">
</style>