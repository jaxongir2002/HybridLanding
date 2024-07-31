<script setup>
import {computed, ref} from 'vue'
import {useCounterStore} from "../store/store.js";
import {useRouter} from "vue-router";

const store = useCounterStore()
const router = useRouter()
const addClass = ref(false)

const interval = setInterval(() => {
  if (store.count <= 99) {
    store.count += 1;
  } else {
    router.push('/about')
    clearInterval(interval);
    addClass.value = true
  }
}, 40)
const computedColor = computed(() => {
  const opacity = Math.min(store.count / 100, 1);
  return `rgba(255, 255, 255, ${opacity})`;
});

</script>

<template>
  <div class="navigation" style="display: flex; justify-content: space-between;">
    <div class="animate seven">
      <div class="hybrid-experience">
        <div>
          <span class="big-text">H</span><span class="big-text">Y</span><span class="big-text">B</span><span
            class="big-text">R</span><span class="big-text">I</span><span class="big-text">D</span>
        </div>
        <div class="small-text">
          <span>X</span><span>P</span><span>E</span><span>R</span><span>I</span><span>E</span><span>N</span><span>C</span><span>E</span>
        </div>
      </div>
    </div>
    <div class="navigation-menu" style="visibility: hidden">
      <span>About</span>
      <span>Reels</span>
      <span>Community</span>
      <span>Blog</span>
      <span>Brief</span>
    </div>
    <div class="navigation-magic" style="visibility: hidden">
      Discover magic
      <img src="../assets/img/MenuIcon.svg" alt="">
    </div>
  </div>
  <div v-if="store.count >= 80 && store.count <= 100" class="content">
    <div class="img-count visibility ">
      <img :class="{visibility : store.count >= 80 && store.count < 90}" src="../assets/img/YellowH.svg" alt=""
           class="yellow-img-h">
      <div class="title-container">
        <div class="title-logo" :class="{'enable': addClass}">
          Hybrid
        </div>
        <div class="title-text" :class="{'enable': addClass}">
          xperience
        </div>
        <div class="glass-effect"></div>

      </div>
      <img style="display: block" src="../assets/img/YellowX.svg" alt="" class="yellow-img">
    </div>
  </div>
  <div v-else class="content">
    <img :class="{visibility : store.count >= 5 && store.count < 20}" class="img-count" src="../assets/img/Group1.svg"
         alt="">
    <img :class="{visibility : store.count >= 40 && store.count < 60}" class="img-count" src="../assets/img/pink1.svg "
         alt="">
    <div :class="{visibility : store.count >= 20 && store.count < 40}" class="img-count">
      <img src="../assets/img/group2.svg" alt="">
      <img class="content-img" src="../assets/img/childGroup.svg" alt="">
    </div>
    <img :class="{visibility : store.count >= 60&& store.count < 80}" class="img-count" src="../assets/img/pink2.svg"
         alt="">
  </div>
  <div class="footer">
    <div class="text-load">
      <span class="first-animation">Xperience</span> <span class="second-animation">is</span><span
        class="third-animation">loading</span><span class="four-animation">...</span>
    </div>

    <div class="progress" :style="{color:computedColor}">
      {{ store.count }}%
    </div>
  </div>
</template>

<style scoped lang="scss">
.enable {
  -webkit-text-fill-color: white !important;
}

.title-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 341px;
  height: 112.8px;

}

.title-logo {
  text-align: center;
  font-family: Alexandria, sans-serif;
  font-size: 140px;
  font-style: normal;
  font-weight: 900;
  line-height: 140px;
  text-transform: uppercase;

  background: linear-gradient(90deg, #000000 1.73%, #FFF 44.64%, #000000 97.33%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}

.title-text {
  text-align: center;
  font-family: Alexandria, sans-serif;
  font-size: 93px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  text-transform: uppercase;
  background: linear-gradient(90deg, #000000 1.73%, #FFF 44.64%, rgb(0, 0, 0) 98.33%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.navigation {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-transform: uppercase;
  position: relative;
  bottom: 15px;

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
    cursor: pointer;
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

.title-container {
  position: absolute;
  top: 48%;
  left: 41%;
  transform: translate(-50%, -50%);
  opacity: 0;
  animation: fade-in 1s ease-in-out forwards;
}

.yellow-img-h {
  position: relative;
  transform: translateY(0px);
  animation-delay: 1s;
  //top: 79px;
  animation: slide-up 1s linear forwards;


}

.yellow-img {
  position: relative;
  //bottom: 121px;
  transform: translateY(184px);
  animation-delay: 1s;
  animation: slide-down 1s linear forwards;

}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: scale(0);
  }

  100% {
    transform: scale(1);
    opacity: 1;

  }
}

@keyframes slide-up {
  0% {
    transform: translateY(0px);
  }
  60% {
    transform: translateY(-52px);
  }
  80% {
    animation-delay: 2s;
    transform: translateY(-100px);
  }
  100% {
    animation-delay: 2s;
    transform: translateY(-150px);
    opacity: 0;
  }
}

@keyframes slide-down {
  0% {
    transform: translateY(0px);
  }
  60% {
    transform: translateY(111px);
  }
  80% {
    animation-delay: 2s;
    transform: translateY(200px);
  }
  100% {
    animation-delay: 2s;
    transform: translateY(300px);
    opacity: 0;
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
  height: 79.1vh;
  display: flex;
  justify-content: space-around;
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

.animate {
  font-size: 50px;
}

.hybrid-experience {
  display: flex;
  flex-direction: column;
  line-height: .82;
}

.big-text {
  font-size: 30px;
  font-weight: 600;
  word-wrap: break-word;
  display: inline-block;
  margin-right: 1px;
}

.small-text {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.small-text span {
  font-size: 18px !important;
  margin-right: 2px;
  font-weight: 600;
}

.animate span {
  display: inline-block;
  animation: fadeIn 2s ease-in-out infinite;
  opacity: 0;
  font-family: Alexandria, sans-serif;
  color: white;
  text-align: center;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.big-text:nth-of-type(2) {
  animation-delay: 0.1s;
}

.big-text:nth-of-type(3) {
  animation-delay: 0.2s;
}

.big-text:nth-of-type(4) {
  animation-delay: 0.3s;
}

.big-text:nth-of-type(5) {
  animation-delay: 0.4s;
}

.big-text:nth-of-type(6) {
  animation-delay: 0.5s;
}

.big-text:nth-of-type(7) {
  animation-delay: 0.6s;
}

.big-text:nth-of-type(8) {
  animation-delay: 0.7s;
}

.big-text:nth-of-type(9) {
  animation-delay: 0.8s;
}

.big-text:nth-of-type(10) {
  animation-delay: 0.9s;
}

.big-text:nth-of-type(11) {
  animation-delay: 1s;
}

.big-text:nth-of-type(12) {
  animation-delay: 1.1s;
}

.big-text:nth-of-type(13) {
  animation-delay: 1.2s;
}

.big-text:nth-of-type(14) {
  animation-delay: 1.3s;
}

/* Animation Seven */

.seven span {
  opacity: 0;
  transform: translate(-150px, 0) scale(.2);
  animation: leftRight .8s forwards;
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
  animation: up-to-down .5s forwards;
  transform: translateY(100px);
}

.second-animation {
  opacity: 0;
  animation: up-to-down 1s forwards;
  animation-delay: .3s;
  transform: translateY(100px);
}

.third-animation {
  opacity: 0;
  animation: up-to-down 1s forwards;
  animation-delay: .6s;
  transform: translateY(100px);
}

.four-animation {
  opacity: 0;
  animation: up-to-down 1s forwards;
  animation-delay: .7s;
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

</style>