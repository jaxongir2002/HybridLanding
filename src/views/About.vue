<script setup>
import Navigation from "@/components/Navigation.vue";
import Cover from "@/components/Cover.vue";
import Cards from "@/components/Cards.vue";
import Mission from "@/components/Mission.vue";
import Magic from "@/components/Magic.vue";
import OurWorks from "@/components/OurWorks.vue";
import Partners from "@/components/Partners.vue";
import Register from "@/components/Register.vue";
</script>

<template>
  <div class="container-hybrid">
    <Navigation/>
    <Cover/>
    <Cards/>
    <Mission/>
    <Magic/>
    <OurWorks/>
    <Partners/>
    <Register/>
  </div>

</template>

<style scoped lang="scss">
.container-hybrid {
  background: #000000;
  width: 100% !important;
}
</style>