<script setup>
import ExperienceVideos from "@/components/Experience/ExperienceVideos.vue";
import LastSection from "@/components/LastSection.vue";
import CommunityCuntacts from "@/components/Community/CommunityCuntacts.vue";
import ExperienceAbout from "@/components/Experience/ExperienceAbout.vue";
import StudioCover from "@/components/Studio/StudioCover.vue";
import StudioVideoSlider from "@/components/Studio/StudioVideoSlider.vue";
import {useAxios} from "@/composable/useAxios.js";
import {ref} from 'vue'

const sliderList = ref([]);
const listVideos = ref([]);
const animation = ref(false);

async function getMethod() {
  try {
    const res = await useAxios(`/studios?populate=*`)
    sliderList.value = res.data[0].attributes.slider_video
    listVideos.value = res.data[0].attributes.title
  } catch (e) {
    console.log(e)
  } finally {
    animation.value = true
  }
}

getMethod()
</script>

<template>
  <div>
    <StudioCover class="screen-width" style=" padding: 34px 40px 34px 40px; max-width: 1440px; margin: auto"/>
    <StudioVideoSlider :slider-video="sliderList" class="screen-width"
                       style=" padding: 34px 40px 34px 40px; max-width: 1440px; margin: auto"/>
    <ExperienceAbout v-if="animation" class="screen-width" style=" padding: 34px 40px 34px 40px; max-width: 1440px; margin: auto"/>
    <ExperienceVideos :video="listVideos" class="screen-width"
                      style=" padding: 34px 40px 34px 40px; max-width: 1440px; margin: auto"/>
    <CommunityCuntacts/>
    <LastSection class="screen-width" style=" padding: 34px 40px 34px 40px; max-width: 1440px; margin: auto"/>
  </div>

</template>

<style scoped lang="scss">
</style>