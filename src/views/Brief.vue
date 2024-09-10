<script setup>
import Register from "@/components/Register.vue";
import LastSection from "@/components/LastSection.vue";
import BriefCover from "@/components/Brief/BriefCover.vue";
import {useAxios} from "@/composable/useAxios.js";
import {ref} from 'vue'


const infoBrief = ref(null);

async function getMethod() {
  const res = await useAxios(`/breifs`)
  infoBrief.value = res.data[0].attributes
}

getMethod()
</script>

<template>
  <div class="screen-width" style=" padding: 34px 40px 34px 40px; max-width: 1440px; margin: auto ">
    <BriefCover :info-brief="infoBrief"/>
    <Register/>
    <LastSection/>
  </div>
</template>

<style scoped lang="scss">

</style>