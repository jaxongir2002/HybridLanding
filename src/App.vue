<script setup>
import Lenis from "lenis";
import {onMounted, ref} from "vue";
import Navigation from "@/components/Navigation.vue";

const activeCanvas = ref(false)
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


setTimeout(() => {
  activeCanvas.value = true
}, 5500)
</script>

<template>
  <div style="background: #0e0e0e;">
    <Navigation v-show="!($route.path ==='/')"/>
    <router-view>
    </router-view>
    <canvas id="renderSurface" class="opacity-0" :class="{'opacity-[1]':activeCanvas}"></canvas>
  </div>
</template>

<style lang="scss">
@media screen and (max-width: 992px){
  canvas{
    display: none !important;
  }
}
</style>