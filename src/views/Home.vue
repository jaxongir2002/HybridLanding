<script setup>
import AboutCover from "@/components/About/AboutCover.vue";
import OurServices from "@/components/About/OurServices.vue";
import OurProcess from "@/components/About/OurProcess.vue";
import OurTeam from "@/components/About/OurTeam.vue";
import LastSection from "@/components/LastSection.vue";
import Partners from "@/components/Partners.vue";
import Register from "@/components/Register.vue";
import {useAxios} from "@/composable/useAxios.js";
import {onMounted, ref} from 'vue'

const description = ref('');
const cards = ref([]);
const team = ref([]);
const animation = ref(false)

async function getMethod() {
  try {
    const res = await useAxios(`/abouts?populate=*`)
    description.value = res.data[0]?.attributes.main_description
    cards.value = res.data[0]?.attributes.videos
    team.value = res.data[0]?.attributes.video
  } catch (e) {
    console.log("Error fetching method: ", e);
  }
  finally {
    animation.value = true
  }
}


onMounted(getMethod)

</script>

<template>
  <div class="screen-width" style="padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto">
    <about-cover :description="description"/>
    <our-services :cards="cards"/>
    <OurProcess v-if="animation"/>
    <OurTeam :items="team"/>
    <Partners/>
    <Register/>
    <LastSection/>
  </div>
</template>

<style scoped lang="scss">
</style>