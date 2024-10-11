<script setup>
import { computed, ref } from "vue";
import { useCounterStore } from "../store/store.js";
import { useRouter } from "vue-router";
import MobileLoading from "@/components/MobileLoading.vue";

const store = useCounterStore();
const router = useRouter();
const isMobile = ref(window.innerWidth < 762);
const showTitle = ref(false);
const addClass = ref(false);

const interval = setInterval(() => {
  if (store.count >= 60) {
    document.body.classList.add("bodyScroll");
  }

  if (store.count <= 99) {
    store.count += 1;
  } else {
    showTitle.value = true;
    setTimeout(() => {
      router.push("/");
    }, 1000);
    setTimeout(() => {
      const yellowImgH = document.querySelector(".yellow-img-h");
      const yellowImg = document.querySelector(".yellow-img");

      addClass.value = true;
      yellowImgH.classList.add("addClassH");
      yellowImg.classList.add("addClassX");
    }, 900);

    clearInterval(interval);
  }
}, 60);
const computedColor = computed(() => {
  const opacity = Math.min(store.count / 100, 1);
  return `rgba(255, 255, 255, ${opacity})`;
});
</script>

<template>
  <MobileLoading v-if="isMobile"/>
  <div v-else style=" padding: 34px 40px 34px 40px; max-width: 1440px;  margin: auto;position: relative; z-index: 1">
    <!--  navigation-->
    <div class="navigation screen-width">
      <div class="big-logo-name">
        <img src="../assets/img/Logo.svg" alt="" />
      </div>
      <div class="navigation-menu" style="visibility: hidden">
        <span class="first-animation">About</span>
        <span class="second-animation">Reels</span>
        <span class="third-animation">Community</span>
        <span class="four-animation">Blog</span>
        <span class="five-animation">Brief</span>
      </div>
      <div class="navigation-magic" style="visibility: hidden">
        <span class="magic-animation"> Discover magic </span>
        <img src="../assets/img/MenuIcon.svg" alt="" />
      </div>
    </div>
    <section id="container" v-if="store.count >= 80 && store.count <= 100">
      <img
          :class="{
        visibilityImg: showTitle,
        'yellow-img-h': store.count >= 80 && store.count <= 100,
      }"
          src="../assets/img/YellowH.svg"
          class="one-h-img"
          alt=""
      />
      <div class="title-container" :class="{ animate: showTitle }">
        <div class="title-logo" :class="{ shadowNone: addClass }">Hybrid</div>
        <div class="title-text" :class="{ shadowNone: addClass }">xperience</div>
        <div class="glass-effect" style="visibility: hidden"></div>
      </div>
      <img
          :class="{
        visibilityImgX: showTitle,
        'yellow-img': store.count >= 80 && store.count <= 100,
      }"
          class="two-x-img"
          src="../assets/img/YellowX.svg"
          alt=""
      />
      <span class="text-scroll" style="visibility: hidden">
      Scroll to experience magic
      <img class="animation-arrow" src="../assets/img/Arrow.svg" alt="" />
    </span>
    </section>
    <!--  -->
    <div v-else class="content">
      <img
          :class="{ visibility: store.count >= 5 && store.count < 20 }"
          class="img-count relative right-[60px]"
          src="../assets/img/Group1.svg"
          alt=""
      />
      <div class="flex justify-between items-center gap-[309px]">
        <img
            :class="{ visibility: store.count >= 40 && store.count < 60 }"
            class="img-count"
            src="../assets/img/pink1.svg "
            alt=""
        />
        <img
            :class="{ visibility: store.count >= 60 && store.count < 80 }"
            class="img-count"
            src="../assets/img/pink2.svg"
            alt=""
        />
      </div>
      <div
          :class="{ visibility: store.count >= 20 && store.count < 40 }"
          class="img-count relative right-[120px]"
      >
        <img src="../assets/img/group2.svg" alt="" />
        <img class="content-img" src="../assets/img/childGroup.svg" alt="" />

      </div>
    </div>

    <!--  footer-->
    <div
        class="footer"
        :class="{ footerTop: store.count >= 80 && store.count <= 100 }"
    >
      <div class="text-load" :class="{ animateFooter: addClass }">
        <span class="first-animation">Xperience</span>
        <span class="second-animation">is</span
        ><span class="third-animation">loading</span
      ><span class="four-animation">...</span>
      </div>

      <div
          class="progress"
          :style="{ color: computedColor }"
          :class="{ animateFooter: addClass }"
      >
        {{ store.count }}%
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.bodyScroll::-webkit-scrollbar {
  display: none !important;
}
.footerTop {
  position: relative !important;
  top: -183px !important;
}
.animateFooter {
  animation: footerTopAnimation 0.5s forwards linear;
}
@keyframes footerTopAnimation {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(40px);
    opacity: 0;
  }
}
</style>

<style scoped lang="scss">
.nav-logo-name {
  color: var(--White, #f9f9f9);
  font-family: Alexandria, sans-serif;
  font-size: 30px;
  font-weight: 800;
  font-style: normal;
  text-align: center;
  text-transform: uppercase;
}
.nav-logo-text {
  color: var(--White, #f9f9f9);
  font-family: Alexandria, sans-serif;
  font-size: 20px;
  text-align: center;
  font-weight: 800;
  font-style: normal;
  text-transform: uppercase;
}
.big-logo-name {
  line-height: 0.82;
}

.enable {
  -webkit-text-fill-color: white !important;
}

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  position: relative;
  z-index: 22;
  &-menu {
    display: flex;
    gap: 60px;
    font-size: 14px;
    line-height: 20px;
    font-family: "Alexandria", sans-serif;
    font-weight: 700;
    color: white;
  }
  &-menu span {
    cursor: url("@/assets/img/Polygon.svg"), auto;
  }

  &-magic {
    display: flex;
    gap: 20px;
    align-items: center;
    font-size: 16px;
    line-height: 20px;
    font-family: "Alexandria", sans-serif;
    font-weight: 700;
    color: white;
  }
}

.img-count {
  opacity: 0;
}

.visibility {
  opacity: 1;
  transition: 1s;
}

.content {
  height: 81vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 1s;

  &-img {
    position: relative;
    right: -140px;
    bottom: 45px;
  }
}

.text-load {
  color: white;
  font-family: Alexandria, sans-serif;
  font-size: 14px;
  line-height: 17px;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.progress {
  color: rgba(255, 255, 255, 0.16);
  color: white;
  font-weight: 500;
  font-family: Alexandria, sans-serif;
  font-size: 62px;
  line-height: 75px;
  transition: width 1s ease-in-out;
}
@keyframes leftRight {
  60% {
    transform: translate(50px, 0) scale(1.2);
    opacity: 1;
  }

  80% {
    transform: translate(0) scale(1.5);
    opacity: 0;
  }

  100% {
    transform: translate(0) scale(1);
    opacity: 1;
  }
}

.first-animation {
  opacity: 0;
  animation: up-to-down 0.5s forwards;
  transform: translateY(100px);
}

.second-animation {
  opacity: 0;
  animation: up-to-down 1s forwards;
  animation-delay: 0.3s;
  transform: translateY(100px);
}

.third-animation {
  opacity: 0;
  animation: up-to-down 1s forwards;
  animation-delay: 0.6s;
  transform: translateY(100px);
}

.four-animation {
  opacity: 0;
  animation: up-to-down 1s forwards;
  animation-delay: 0.7s;
  transform: translateY(100px);
}

@keyframes up-to-down {
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.text-load {
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-load span {
  margin: 0 5px;
}

#container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: relative;
  height: 100vh;
  transition: 1s;
}

.title-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  position: absolute;
  top: 50%;
  opacity: 0;
  transition: transform 0.4s linear;
}

.title-container.animate {
  opacity: 0;
  animation: fade-in 0.8s linear forwards;
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: scale(0.6) translate(0, -50%);
  }

  100% {
    transform: scale(1) translate(0, -50%);
    opacity: 1;
  }
}
.one-h-img {
  position: relative;
  opacity: 0;
  transform: translateY(15px);
}
.two-x-img {
  position: relative;
  opacity: 0;
  transform: translateY(-15px);
}
.yellow-img-h {
  opacity: 1;
  transition: 1s;
}

.yellow-img {
  opacity: 1;
  transition: 1s;
}

.yellow-img-h.visibilityImg {
  animation: slideUp 0.7s alternate forwards;
}

@keyframes slideUp {
  0% {
    transform: translateY(15px);
  }
  100% {
    transform: translateY(-71px);
  }
}
.addClassH {
  animation: slideFullUp 0.9s linear forwards !important;
}
.addClassX {
  animation: slideFullDown 0.9s linear forwards !important;
}
@keyframes slideFullUp {
  0% {
    transform: translateY(-71px);
  }

  60% {
    transform: translateY(-121px);
  }
  100% {
    transform: translateY(-141px);
    opacity: 0;
  }
}
@keyframes slideFullDown {
  0% {
    transform: translateY(145px);
  }
  60% {
    transform: translateY(245px);
  }
  100% {
    transform: translateY(265px);
    opacity: 0;
  }
}
.yellow-img.visibilityImgX {
  animation: slideDown 0.5s alternate forwards;
}

@keyframes slideDown {
  0% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(145px);
  }
}

.title-logo {
  font-family: "Alexandria", sans-serif;
  text-transform: uppercase;
  background: linear-gradient(170deg, #0037C3 13.85%, #7E06BD 105.14%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
  font-size: 140px;
  line-height: 100px;
  transition: all 1s linear;
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
}

.glass-effect {
  width: 770px;
  height: 80px;
  position: relative;
  bottom: 45px;
  transform: translateY(10px);
}

.text-scroll {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 101px;
  position: relative;
  z-index: 22;
  top: 400px;
}
</style>
