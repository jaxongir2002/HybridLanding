<script setup>
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {onMounted} from "vue";

function topScroll() {
  window.scrollTo({
    top: 1000,
    behavior: "smooth",
  });
}
gsap.registerPlugin(SplitText, ScrollTrigger);
onMounted(() => {
  let mySplitText = new SplitText(".test-animation", {type: "chars"});
  let chars = mySplitText.chars;
  gsap.from(chars, {
    yPercent: 130,
    stagger: 0.02,
  });
})
</script>

<template>
  <section id="container">
    <div class="title-container">
      <div class="flex justify-between items-end gap-[130px] max-sm:gap-0 max-sm:w-[80%]">
        <div class="title-logo test-animation">Hybrid</div>
        <div class="text-magic text-left">
          Content creation
        </div>
      </div>
      <div class="flex justify-between items-end gap-[130px] max-sm:gap-0 max-sm:w-[80%]">
        <div class="text-magic">
          Magic creation
        </div>
        <div class="title-logo test-animation">Studio</div>
      </div>
    </div>
    <span class="text-scroll" @click="topScroll">
      Scroll to experience magic
      <img class="animation-arrow" src="@/assets/img/Arrow.svg" alt=""/>
    </span>

  </section>

</template>

<style scoped lang="scss">
@media screen and (max-width: 992px) {
  .title-logo {
    font-size: 45px !important;
    line-height: 98% !important;
  }
  .text-magic {
    font-size: 12px !important;
    line-height: 100% !important;
    width: 87px !important;
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
  .title-container {
    top: 40% !important;
  }
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
  transform: translate(0, -55%);
  z-index: 22;
  width: 100%;
}


.title-logo {
  font-family: "Alexandria", sans-serif;
  text-transform: uppercase;
  color: #fff;
  font-weight: 900;
  font-size: 140px;
  line-height: 100%;
  transition: 1s;
}

@keyframes dashboard-animation {
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1);
  }
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

.text-magic {
  color: var(--White, #F9F9F9);
  font-family: Alexandria, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 31.2px */
  text-transform: uppercase;
  width: 177px;
}
</style>