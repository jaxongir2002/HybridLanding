<script setup>
import Navigation from "@/components/Navigation.vue";

function topScroll() {
  window.scrollTo({
    top: 1000,
    behavior: "smooth",
  });
}
</script>

<template>

  <section id="container" class=""  style="padding: 34px 40px 34px 40px; max-width: 1440px; margin: auto">
    <div class="title-container">
      <div class="title-logo">Hybrid</div>
      <div ref="elementRef" class="title-text">xperience</div>
      <div class="glass-effect"></div>
    </div>
    <span class="text-scroll" @click="topScroll" >
      Scroll to experience magic
      <img class="animation-arrow" src="../assets/img/Arrow.svg" alt="" />
    </span>

  </section>
</template>

<style lang="scss">
body::-webkit-scrollbar {
  display: block;
}
</style>

<style scoped lang="scss">
@media screen and (max-width: 992px){
  .title-logo {
    font-size: 70px !important;
    line-height: 55px !important;
  }
  .title-text {
    font-size: 46.5px !important;
    line-height: 100% !important;
  }
  .glass-effect {
    width: 320px !important;
    height: 40px !important;
    transform: translateY(20px) !important;
  }
  .text-scroll {
    font-size: 12px !important;
    font-style: normal;
    font-weight: 700;
    line-height: 1.5;
    position: relative;
    top: 35% !important;
  }
  .title-container{
    top: 47% !important;
  }
}

.project-twelve__background {
  width: 100%;
  height: 60%;
}

.animation-arrow {
  animation: top-bottom 0.8s infinite forwards;
}

@keyframes top-bottom {
  0% {
    transform: translateY(2px);
  }
  100% {
    transform: translateY(-2px);
  }
}
#container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: relative;
  height: 100vh;
}

.title-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translate(0, -35%);
  z-index: 22;
}

.title-logo {
  background: linear-gradient(170deg, #0037C3 13.85%, #7E06BD 105.14%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Alexandria", sans-serif;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 140px;
  line-height: 100px;
  transition: 1s;
}
.title-text {
  font-family: "Alexandria", sans-serif;
  text-transform: uppercase;
  background: linear-gradient(170deg, #0037C3 1.85%, #7E06BD 40.14%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
  font-size: 93px;
  line-height: 93px;
  transition: all 0.3s ease-in-out;
}

@keyframes dashboard-animation {
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1);
  }
}

.glass-effect {
  width: 770px;
  height: 80px;
  border-radius: 30px;
  background: #0000000d;
  backdrop-filter: blur(4px);
  position: relative;
  bottom: 45px;
  box-shadow: 0 4px 30px #0000000d;
  opacity: 0;
  animation: glass-effect 0.4s forwards;
  animation-delay: 0.5s;
  transform: translateY(5px);
}

@keyframes glass-effect {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.text-scroll {
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  color: white;
  display: flex;
  align-items: center;
  gap: 5px;
  background: transparent;
  margin-bottom: 101px;
  position: relative;
  z-index: 22;
  top: 45% !important;
}
</style>