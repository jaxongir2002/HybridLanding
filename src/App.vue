<script setup>
import Lenis from "lenis";
import {onMounted, ref} from "vue";
import Navigation from "@/components/Navigation.vue";

const activeCanvas = ref(false);
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
    <canvas id="renderSurface" class="opacity-1"></canvas>
  </div>
</template>

<style lang="scss">
@media screen and (max-width: 992px){
  canvas{
    display: none !important;
  }
}
</style>