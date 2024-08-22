<script setup>
import Lenis from "lenis";

import {onMounted} from "vue";
import Navigation from "@/components/Navigation.vue";

onMounted(() => {
  const lenis = new Lenis();
  lenis.on("scroll", (e) => {
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
})

</script>

<template>
  <div style="background: #0e0e0e;">
    <Navigation v-if="!($route.path ==='/')"/>
    <router-view>
    </router-view>
  </div>
</template>

<style lang="scss">

</style>