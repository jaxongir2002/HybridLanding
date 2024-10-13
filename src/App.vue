<script setup>
import Lenis from "lenis";
import {onMounted,onBeforeUnmount, ref} from "vue";
import Navigation from "@/components/Navigation.vue";
import Loading from "@/components/Loading.vue";
import WebGLFluidEnhanced from 'webgl-fluid-enhanced';

const showLoader = ref(true);
let simulation = null;
const canvas = ref();

onMounted(() => {
  const lenis = new Lenis();
  lenis.on("scroll", () => {
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  const hasVisited = localStorage.getItem('hasVisited');
  if (hasVisited) {
    showLoader.value = false;
  }

  requestAnimationFrame(raf);
});
const onAnimationComplete = () => {
  localStorage.setItem('hasVisited', 'true');
  showLoader.value = false;
};

onMounted(() => {
  simulation = new WebGLFluidEnhanced(canvas.value);
  simulation.start();
  simulation.setConfig({
    densityDissipation: 1.5,
    velocityDissipation: 0,
    pressure: 0.7,
    curl: 5,
    backgroundColor: "#0E0E0E",
    colorPalette: ['#0037C3', '#7E06BD'],
    bloom: true,
    brightness: 0.35,
  });
});

onBeforeUnmount(() => {
  if (simulation) {
    simulation.stop();
  }
});

setTimeout(() => {
  onAnimationComplete()
}, 7000)
</script>

<template>
  <div class="bg-[#0e0e0e]" v-if="showLoader">
    <Loading/>
  </div>
  <div v-else style="background: #0e0e0e;">
    <canvas id="renderSurface" ref="canvas"></canvas>
    <Navigation/>
    <router-view>
    </router-view>
  </div>

</template>

<style lang="scss">
@media screen and (max-width: 992px) {
  canvas {
    display: none !important;
  }
}
</style>