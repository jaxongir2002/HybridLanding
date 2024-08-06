<script setup>
import {ref} from 'vue'
import Lenis from "lenis";

const lenis = new Lenis();

const openMenu = ref(false)
const openMobil = ref(false)
const isMobile = ref(window.innerWidth < 762);

function mobile(){
  // openMobil.value=true
  if (openMobil.value===true) {
    document.body.classList.add('no-scroll');
    lenis.stop();
  } else {
    document.body.classList.remove('no-scroll');
    lenis.start();
  }
}mobile()
function openMobileFn() {
  openMobil.value=true
  mobile()
}
function closeMobile() {
  openMobil.value=false
  mobile()
}
</script>

<template>
  <div class="navigation">
    <div>
      <img src="../assets/img/Logo.svg" alt="">
    </div>
    <div class="navigation-menu">
      <span class="first-animation">About</span>
      <span class="second-animation">Reels</span>
      <span class="third-animation">Community</span>
      <span class="four-animation">Blog</span>
      <span class="five-animation">Brief</span>
    </div>
    <div class="navigation-magic" @click="openMenu=true">
      <span class="magic-animation" :class="{ 'animate': openMenu }">
         Discover magic
      </span>
      <img src="../assets/img/MenuIcon.svg" alt="">
    </div>
    <div class="navigation-mobile" >
      <img v-if="!openMobil" @click="openMobileFn" src="../assets/img/MenuIcon.svg" alt="">
      <img v-else @click="closeMobile" class="active:scale-[0.9]" src="@/assets/img/menuClose.svg" alt="">
    </div>
  </div>
  <Transition name="slide-fade">
    <div class="menu-dialog" v-show="openMenu">
      <div class="flex justify-end transition-all">
        <img @click="openMenu= false" class="active:scale-[0.9]" src="@/assets/img/menuClose.svg" alt="">
      </div>
      <div class="flex">
        <div class="flex flex-col gap-[10px]">
          <div class="menu-text flex gap-[15px]">
        <span>
             home
        </span>
            <div class="menu-btn">
              01
            </div>
          </div>
          <div class="menu-text flex gap-[15px]">
        <span>
             about
        </span>
            <div class="menu-btn">
              02
            </div>
          </div>
          <div class="menu-text flex gap-[15px]">
        <span>
          Reels
        </span>
            <div class="menu-btn">
              03
            </div>
          </div>
          <div class="menu-text flex gap-[15px]">
        <span>
           Community
        </span>
            <div class="menu-btn">
              04
            </div>
          </div>
          <div class="menu-text flex gap-[15px]">
        <span>
        Blog
        </span>
            <div class="menu-btn">
              05
            </div>
          </div>
          <div class="menu-text flex gap-[15px]">
        <span>
           brief
        </span>
            <div class="menu-btn">
              06
            </div>
          </div>
        </div>
        <div>
          <img src="@/assets/img/menuLogo.svg" alt="">
        </div>
      </div>
      <div class="flex items-end h-[328px]">
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
    <div class="menu-mobile" v-show="openMobil">
      <div class="flex">
        <div class="flex flex-col gap-[10px] relative bottom-[50px]">
          <div class="text-mobile flex justify-center gap-[15px]">
            <span>home</span>
            <div class="btn-mobile">01</div>
          </div>
          <div class="text-mobile flex justify-center gap-[15px]">
            <span>about</span>
            <div class="btn-mobile">02</div>
          </div>
          <div class="text-mobile flex justify-center gap-[15px]">
            <span>Reels</span>
            <div class="btn-mobile">03</div>
          </div>
          <div class="text-mobile flex justify-center gap-[15px]">
            <span>Community</span>
            <div class="btn-mobile">04</div>
          </div>
          <div class="text-mobile flex justify-center gap-[15px]">
            <span>Blog</span>
            <div class="btn-mobile">05</div>
          </div>
          <div class="text-mobile flex justify-center gap-[15px]">
            <span>brief</span>
            <div class="btn-mobile">06</div>
          </div>
        </div>
      </div>
      <div class="flex  items-end">
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
</template>
<style lang="scss">
.no-scroll{
  overflow: hidden !important;
}
@media screen and (max-width: 992px){
  body{
    width: 100% !important;
    overflow-x: hidden;
  }
}
</style>

<style scoped lang="scss">
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
  z-index: 33;
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

@media screen and (max-width: 992px){
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

}

.menu-mobile {
  width: 100% !important;
  background: #0E0E0E;
  height:50vh;
  z-index: 33;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 140px;

  .text-mobile {
    color:  #F9F9F9;
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
  &-magic{
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
.magic-animation{
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