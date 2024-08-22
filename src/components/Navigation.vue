<script setup>
import {onMounted, ref} from 'vue'
import Lenis from "lenis";
import router from "@/router/router.js";

const lenis = new Lenis();

const openMenu = ref(false);
const openMobil = ref(false);
const isNavFixed = ref(false);
const isNavSticky = ref(false);
const changeFirstVideo = ref(true);
const changeSecondVideo = ref(false);
const changeThreeVideo = ref(false);
const changeFourVideo = ref(false);
const changeFiveVideo = ref(false);
const changeSixVideo = ref(false);
onMounted(() => {
  let prevScrollPos = window.pageYOffset;
  window.addEventListener('scroll', () => {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos && currentScrollPos > 900) {
      isNavFixed.value = true;
      isNavSticky.value = false
    } else {
      isNavSticky.value = true
      isNavFixed.value = false
    }
    prevScrollPos = currentScrollPos;
  });
  const element = document.getElementById("renderSurface");

// Create the onclick event handler function
  function handleClick() {
    openMenu.value = false
  }

// Attach the onclick event handler to the element
  element.onclick = handleClick;

});


function mobile() {
  if (openMobil.value === true) {
    document.body.classList.add('no-scroll');
    lenis.stop();
  } else {
    document.body.classList.remove('no-scroll');
    lenis.start();
  }
}

mobile()

function openMobileFn() {
  openMobil.value = true
  mobile()
}

function closeMobile() {
  openMobil.value = false
  mobile()
}

function load() {
  router.push('/landing')
}

function firstFn() {
  changeFirstVideo.value = true
  changeSecondVideo.value = false
}

function secondFn() {
  changeFirstVideo.value = false
  changeSecondVideo.value = true
}

function threeFn() {
  changeSecondVideo.value = false
  changeThreeVideo.value = true
}

function fourFn() {
  changeThreeVideo.value = false
  changeFourVideo.value = true
}

function fiveFn() {
  changeFourVideo.value = false
  changeFiveVideo.value = true
}

function sixFn() {
  changeFiveVideo.value = false
  changeSixVideo.value = true
}
</script>

<template>
  <div :class="{ fixed: isNavFixed,'header-animation': isNavFixed,'isNavStick':isNavSticky  }">
    <div :class="{ 'w-[100%]': isNavFixed,'header-animation': 'w-[100%]','isNavStick':isNavSticky  }">
      <div class="navigation" style=" padding: 34px 40px 34px 40px; max-width: 1440px; margin: auto">
        <div>
          <img src="@/assets/img/Logo.svg" alt="" @click="load">
        </div>
        <div class="navigation-menu">
          <router-link to="/about">
            <span class="first-animation">About</span>
          </router-link>
          <router-link to="/reels">
            <span class="second-animation">Reels</span>
          </router-link>
          <router-link to="/community">
            <span class="third-animation">Community</span>
          </router-link>
          <router-link to="/blog">
            <span class="four-animation">Blog</span>
          </router-link>
          <router-link to="/brief">
            <span class="five-animation">Brief</span>
          </router-link>
          <router-link to="/experience">
            <span class="five-animation">Experience</span>
          </router-link>
          <router-link to="/studio">
            <span class="five-animation">Studio</span>
          </router-link>
          <router-link to="/lab">
            <span class="five-animation">Lab</span>
          </router-link>
        </div>
        <div class="navigation-magic" @click="openMenu=true">
          <span class="magic-animation" :class="{ 'animate': openMenu }">
             Discover magic
          </span>
          <img src="../assets/img/MenuIcon.svg" alt="">
        </div>
        <div class="navigation-mobile">
          <img v-if="!openMobil" @click="openMobileFn" src="../assets/img/MenuIcon.svg" alt="">
          <img v-else @click="closeMobile" class="active:scale-[0.9]" src="@/assets/img/menuClose.svg" alt="">
        </div>
      </div>
      <Transition name="slide-fade">
        <div class="menu-dialog" v-show="openMenu" :class="{menuUi : isNavFixed}">
          <div class="flex justify-end transition-all">
            <img @click="openMenu= false" class="active:scale-[0.9]" src="@/assets/img/menuClose.svg" alt="">
          </div>
          <div class="flex">
            <div class="flex flex-col gap-[10px]">
              <div @mousemove="firstFn" class="menu-text flex gap-[15px]" @click="$router.push('/landing')">
              <span>
                   home
              </span>
                <div class="menu-btn">
                  01
                </div>
              </div>
              <div @mousemove="secondFn" class="menu-text flex gap-[15px]" @click="$router.push('/about')">
              <span>
                   about
              </span>
                <div class="menu-btn">
                  02
                </div>
              </div>
              <div @mousemove="threeFn" class="menu-text flex gap-[15px]" @click="$router.push('/reels')">
                <span>
                  Reels
                </span>
                <div class="menu-btn">
                  03
                </div>
              </div>
              <div @mousemove="fourFn" class="menu-text flex gap-[15px]" @click="$router.push('/community')">
                <span>
                   Community
                </span>
                <div class="menu-btn">
                  04
                </div>
              </div>
              <div @mousemove="fiveFn" class="menu-text flex gap-[15px]" @click="$router.push('/blog')">
              <span>
              Blog
              </span>
                <div class="menu-btn">
                  05
                </div>
              </div>
              <div @mousemove="sixFn" class="menu-text flex gap-[15px]" @click="$router.push('/brief')">
                <span>
                   brief
                </span>
                <div class="menu-btn">
                  06
                </div>
              </div>
              <div @mousemove="sixFn" class="menu-text flex gap-[15px]" @click="$router.push('/Experience')">
                <span>
                   Experience
                </span>
                <div class="menu-btn">
                  07
                </div>
              </div>
              <div @mousemove="sixFn" class="menu-text flex gap-[15px]" @click="$router.push('/studio')">
                <span>
                   Studio
                </span>
                <div class="menu-btn">
                  08
                </div>
              </div>
              <div @mousemove="sixFn" class="menu-text flex gap-[15px]" @click="$router.push('/lab')">
                <span>
                   Lab
                </span>
                <div class="menu-btn">
                  09
                </div>
              </div>
            </div>
            <div class="card-change-video">
              <Transition>
                <video autoplay loop muted width="320" height="240" playsinline v-show="changeFirstVideo">
                  <source
                      src="../assets/video/ac57976749d126f18128abad5cec0903ee50f1bcaab2b1941b03887e69ae9a29_rbIGpUGF.mp4"
                      type="video/mp4">
                </video>
              </Transition>
              <Transition>

                <video autoplay loop muted width="320" height="240" playsinline v-show="changeSecondVideo">
                  <source src="../assets/video/wecreatemagic_lsF4u8LF.mp4"
                          type="video/mp4">
                </video>
              </Transition>
              <Transition>
                <video autoplay loop muted width="320" height="240" playsinline v-show="changeThreeVideo">
                  <source
                      src="../assets/video/84d3ee1d02f80623a9f94aaf876be15f12f8030d7abc558fa81e43cf65067340_FU8j2xww.mp4"
                      type="video/mp4">
                </video>
              </Transition>
              <Transition>
                <video autoplay loop muted width="320" height="240" playsinline v-show="changeFourVideo">
                  <source
                      src="../assets/video/ac57976749d126f18128abad5cec0903ee50f1bcaab2b1941b03887e69ae9a29_rbIGpUGF.mp4"
                      type="video/mp4">
                </video>
              </Transition>
              <Transition>
                <video autoplay loop muted width="320" height="240" playsinline v-show="changeFiveVideo">
                  <source
                      src="../assets/video/91ec3544e41e9afbff63c3d000a9a5296073707d839b265710597bd574d824eb_ndrKpibw.mp4"
                      type="video/mp4">
                </video>
              </Transition>
              <Transition>
                <video autoplay loop muted width="320" height="240" playsinline v-show="changeSixVideo">
                  <source src="../assets/video/lastimg_ezUrAU63.mp4"
                          type="video/mp4">
                </video>
              </Transition>
            </div>
          </div>

          <div class="flex items-end ">
            <div class="flex gap-[10px]">
              <button class="btn-links">
                Instagram
              </button>
              <button class="btn-links w-[37px]">
                <span class="">X</span>
              </button>
              <button class="btn-links">
                Linkedin
              </button>
            </div>
            <iframe src="https://lottie.host/embed/d12aeedd-ef05-4146-a269-e4112a1b9ca1/JJrsbqYW7T.json"></iframe>
          </div>
        </div>
      </Transition>
      <Transition name="slide-fade">
        <div class="menu-mobile" v-show="openMobil" :class="{mobileFixed : isNavFixed}">
          <div class="flex">
            <div class="flex flex-col gap-[10px] relative bottom-[50px]">
              <div class="text-mobile flex justify-center gap-[15px]" @click="$router.push('/landing')">
                <span>home</span>
                <div class="btn-mobile">01</div>
              </div>
              <div class="text-mobile flex justify-center gap-[15px]" @click="$router.push('/about')">>
                <span>about</span>
                <div class="btn-mobile">02</div>
              </div>
              <div class="text-mobile flex justify-center gap-[15px]" @click="$router.push('/reels')">>
                <span>Reels</span>
                <div class="btn-mobile">03</div>
              </div>
              <div class="text-mobile flex justify-center gap-[15px]" @click="$router.push('/community')">>
                <span>Community</span>
                <div class="btn-mobile">04</div>
              </div>
              <div class="text-mobile flex justify-center gap-[15px]" @click="$router.push('/blog')">>
                <span>Blog</span>
                <div class="btn-mobile">05</div>
              </div>
              <div class="text-mobile flex justify-center gap-[15px]" @click="$router.push('/brief')">>
                <span>brief</span>
                <div class="btn-mobile">06</div>
              </div>

              <div class="text-mobile flex justify-center gap-[15px]" @click="$router.push('/experience')">>
                <span>experience</span>
                <div class="btn-mobile">04</div>
              </div>
              <div class="text-mobile flex justify-center gap-[15px]" @click="$router.push('/studio')">>
                <span>studio</span>
                <div class="btn-mobile">05</div>
              </div>
              <div class="text-mobile flex justify-center gap-[15px]" @click="$router.push('/lab')">>
                <span>lab</span>
                <div class="btn-mobile">06</div>
              </div>
            </div>
          </div>
          <div class="flex  items-end" :class="{'relative bottom-[80px]'  : isNavFixed}">
            <div class="flex gap-[10px] relative bottom-[30px]">
              <button class="btn-links">
                Instagram
              </button>
              <button class="btn-links w-[37px]">
                <span class="">X</span>
              </button>
              <button class="btn-links">
                Linkedin
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </div>

  </div>


</template>
<style lang="scss">
.no-scroll {
  overflow: hidden !important;

}

@media screen and (max-width: 992px) {
  body {
    width: 100% !important;
    overflow-x: hidden;
  }
}
</style>

<style scoped lang="scss">
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s linear;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.card-change-video {
  width: 100px;
  height: 120px;
  flex-shrink: 0;
  box-shadow: 0 4px 50px 5px rgba(164, 45, 234, 0.25);
  border-radius: 12px;
  transform: matrix(0.00206186 0 0 0.00171821 0 -0.252577);
  overflow: hidden;
  transition: 1s;
}

.menu-text:hover:is(.card-change-video, .another-class) {
  backdrop-filter: blur(24px);
  opacity: 0;
}

video {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.fixed {
  position: fixed !important;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 33499;
  height: 90px !important;
  background: #0E0E0E;
  margin: auto !important;
}

.menuUi {
  height: 95vh !important;
  top: 20px !important;
  right: 0 !important;
}

.isNavStick {
  animation: header-animation-another .5s linear;
}

@keyframes header-animation-another {
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-100%);
  }
}

.header-animation {
  animation: header-animation .5s linear;
}

@keyframes header-animation {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}

.navigation-mobile {
  display: none;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.btn-links {
  padding: 6px 10px;
  border-radius: 500px;
  border: 0.5px solid #F9F9F9;
  color: var(--White, #F9F9F9);
  font-family: Alexandria, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-transform: uppercase;
}

.btn-links:hover {
  border-color: #BF56FF;
  color: #BF56FF!important;
}
//
.navigation-menu span {
  position: relative;
  display: inline-block;
  padding-bottom: 2px;
  transition: all 0.5s ease;
}

.navigation-menu span:before {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: auto;
  right: 0;
  background-color: currentColor;
  visibility: hidden;
  transition: all 0.5s ease;
}

.navigation-menu span:hover:before,
.router-link-active:before {
  visibility: visible;
  width: 100%;
  left: 0;
  right: auto;
}
//nav hover
.menu-dialog {
  width: 602px;
  height: 95%;
  flex-shrink: 0;
  border-radius: 30px;
  background: #181818;
  padding-left: 40px;
  padding-right: 20px;
  padding-top: 20px;
  position: absolute;
  z-index: 339999;
  right: 20px;
  top: 25px;

  .menu-text {
    color: #F9F9F9;
    font-family: Alexandria, sans-serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    text-transform: uppercase;
  }

  .menu-btn {
    display: inline-flex;
    padding: 6px 10px;
    justify-content: center;
    height: 27px;
    align-items: center;
    gap: 10px;
    border-radius: 500px;
    border: 0.5px solid #F9F9F9;
    color: #F9F9F9;
    font-family: Alexandria, sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-transform: uppercase;
    margin-top: 15px;
  }
}

.menu-text:hover {
  color: #BF56FF;
}

.menu-text:hover .menu-btn {
  background: #BF56FF;
  border-color: #BF56FF;
}

@media screen and (max-width: 992px) {
  /* Mobile styles */
  .navigation-menu {
    display: none !important;
  }
  .navigation-magic {
    display: none !important;
  }
  .navigation-mobile {
    display: block;
  }
  .mobileFixed {
    height: 75vh !important;
  }
}

.menu-mobile {
  width: 100% !important;
  background: #0E0E0E;
  height: 50vh;
  z-index: 33;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 140px;

  .text-mobile {
    color: #F9F9F9;
    text-align: center;
    font-family: Alexandria, sans-serif;
    font-size: 25px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
    text-transform: uppercase;
    margin-top: 10px;
  }

  .btn-mobile {
    display: inline-flex;
    padding: 3px 5px;
    justify-content: center;
    height: 16px;
    align-items: center;
    gap: 10px;
    border-radius: 500px;
    border: 0.5px solid #F9F9F9;
    color: #F9F9F9;
    font-family: Alexandria, sans-serif;
    font-size: 8px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    text-transform: uppercase;
    margin-top: 3px;
  }

  .text-mobile:hover {
    color: #A42DEA;
  }
}

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  position: relative;
  z-index: 9999 !important;
  transition: 1s ease-in-out;

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
    transition: 0.5s;
  }
}

.first-animation {
  opacity: 0;
  animation: up-to-down .4s forwards;
  transform: translateY(10px);
}

.second-animation {
  opacity: 0;
  animation: up-to-down .4s forwards;
  animation-delay: .3s;
  transform: translateY(10px);
}

.third-animation {
  opacity: 0;
  animation: up-to-down .4s forwards;
  animation-delay: .5s;
  transform: translateY(10px);
}

.four-animation {
  opacity: 0;
  animation: up-to-down .4s forwards;
  animation-delay: .6s;
  transform: translateY(10px);
}

.five-animation {
  opacity: 0;
  animation: up-to-down .4s forwards;
  animation-delay: .7s;
  transform: translateY(10px);
}


@keyframes up-to-down {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.magic-animation {
  opacity: 0;
  animation: left-to-right .4s linear forwards;
  transform: translateX(60px);
}

@keyframes left-to-right {
  0% {
    opacity: 0;
    transform: translateX(60px);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate {
  animation: left-to-right-1 .4s linear forwards;
}

@keyframes left-to-right-1 {
  0% {
    opacity: 0;
    transform: translateX(60px);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

</style>