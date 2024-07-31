<script setup>
import Lenis from 'lenis'

const lenis = new Lenis()
lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
</script>

<template>
  <div style="background: #0E0E0E; padding: 34px 40px 34px 40px;">
    <div style="max-width: 1440px; margin:auto">
      <transition name="fade" mode="out-in">
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component"/>
          </keep-alive>
        </router-view>
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .8s ease;
}
.about-container {
  opacity: 0;
  transform: scale(0);
  animation: fade-in .8s linear forwards;
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.8s, transform 0.8s;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: scale(1);
}
</style>