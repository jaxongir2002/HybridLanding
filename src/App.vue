<script setup>
import Lenis from "lenis";
import {onMounted, ref} from "vue";
import Navigation from "@/components/Navigation.vue";
import Loading from "@/components/Loading.vue";

const showLoader = ref(true);

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

setTimeout(() => {
  onAnimationComplete()
}, 7000)
</script>

<template>
  <div class="bg-[#0e0e0e]" v-if="showLoader">
    <Loading/>
  </div>
  <div v-else style="background: #0e0e0e;">
    <Navigation/>
    <router-view>
    </router-view>
    <canvas id="renderSurface" class="opacity-1"></canvas>
  </div>
</template>

<style lang="scss">
@media screen and (max-width: 992px) {
  canvas {
    display: none !important;
  }
}
</style>