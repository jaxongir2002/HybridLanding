<script setup>
import Cover from "@/components/Cover.vue";
import Cards from "@/components/Cards.vue";
import Mission from "@/components/Mission.vue";
import Magic from "@/components/Magic.vue";
import OurWorks from "@/components/OurWorks.vue";
import Register from "@/components/Register.vue";
import LastSection from "@/components/LastSection.vue";
import Partners from "@/components/Partners.vue";
import {useAxios} from "@/composable/useAxios.js";
import {ref} from 'vue'

const missionVideo = ref();
const ourWorks = ref([]);
const cardsVideo = ref([]);
const videoText = ref('');

async function getMethod() {
  const res = await useAxios(`/landings?populate=*`)
  missionVideo.value = res.data[0].attributes.about_us
  cardsVideo.value = res.data[0].attributes.Second_section_3_videos
  videoText.value = res.data[0].attributes.video_magic
}

getMethod()
async function getOurWorks() {
  const res = await useAxios(`/ourworks?populate=*`)
  ourWorks.value = res.data[0].attributes.videos
}

getOurWorks()
</script>

<template>
  <div class="container-hybrid screen-width" style="padding: 34px 40px 34px 40px; max-width: 1440px; margin: auto">
    <Cover/>
    <Cards :list-cards="cardsVideo"/>
    <Mission :video="missionVideo"/>
    <Magic :video="videoText"/>
    <OurWorks :videos="ourWorks"/>
    <Partners/>
    <Register/>
    <LastSection/>
  </div>
</template>

<style scoped lang="scss">
.container-hybrid {
  background: #0E0E0E;
  width: 100% !important;
}
</style>