<script setup>
import { defineAsyncComponent } from 'vue';

const Navigation = defineAsyncComponent(() => import('@/components/Navigation.vue'));
const Cover = defineAsyncComponent(() => import('@/components/Cover.vue'));
const Cards = defineAsyncComponent(() => import('@/components/Cards.vue'));
const Mission = defineAsyncComponent(() => import('@/components/Mission.vue'));
const Magic = defineAsyncComponent(() => import('@/components/Magic.vue'));
const OurWorks = defineAsyncComponent(() => import('@/components/OurWorks.vue'));
const Partners = defineAsyncComponent(() => import('@/components/Partners.vue'));
const Register = defineAsyncComponent(() => import('@/components/Register.vue'));
const LastSection = defineAsyncComponent(() => import('@/components/LastSection.vue'));
const Loading = defineAsyncComponent(() => import('@/components/Loading.vue'));
</script>

<template>
  <div class="container-hybrid">
    <Navigation />
    <Cover />
    <Cards />
    <Mission />
    <Magic />
    <OurWorks />
    <Partners />
    <Register />
    <LastSection />
  </div>
</template>

<style scoped lang="scss">
.container-hybrid {
  background: #0E0E0E;
  width: 100% !important;
}
</style>