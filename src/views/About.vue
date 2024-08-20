<script setup>
import Navigation from "@/components/Navigation.vue";
import Cover from "@/components/Cover.vue";
import Cards from "@/components/Cards.vue";
import Mission from "@/components/Mission.vue";
import Magic from "@/components/Magic.vue";
import OurWorks from "@/components/OurWorks.vue";
import Register from "@/components/Register.vue";
import LastSection from "@/components/LastSection.vue";
import Partners from "@/components/Partners.vue";

</script>

<template>
  <div class="container-hybrid" style=" padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto">
    <Navigation/>
    <Cover/>
    <Cards/>
    <Mission/>
    <Magic/>
    <OurWorks/>
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