<script setup>
import Register from "@/components/Register.vue";
import Navigation from "@/components/Navigation.vue";
import LastSection from "@/components/LastSection.vue";
import BriefCover from "@/components/Brief/BriefCover.vue";
</script>

<template>
  <div  style=" padding: 34px 40px 34px 40px; max-width: 1440px; margin: auto ">
    <navigation/>
    <BriefCover/>
    <Register/>
    <LastSection/>
  </div>

</template>

<style scoped lang="scss">

</style>