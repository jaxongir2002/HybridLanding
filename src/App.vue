<script setup>
import Lenis from "lenis";

const lenis = new Lenis();
lenis.on("scroll", (e) => {});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
</script>

<template>
  <div style="background: #0e0e0e; padding: 34px 40px 34px 40px">
    <div style="max-width: 1440px; margin: auto">
      <router-view v-slot="{ Component }">
        <transition name="slide-fade">
          <component :is="Component" />
        </transition>
      </router-view>
      <canvas></canvas>
    </div>
  </div>
</template>

<style lang="scss">
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.router-link-active {
  text-decoration-line: underline;
  line-height: 140%;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0.3;
}
</style>
